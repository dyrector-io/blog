---
title: "Dagger 101: How to Get Started with Containerized CI Workflows"
date: "2023-11-23"
seoTitle: "Dagger 101: How to Get Started with Containerized CI Workflows | dyrector.io"
seoDescription: Dagger is a CI/CD platform that offers containerized workflows. Check out this blog post to learn more about it.
description: CI/CD can be a difficult concept to embrace, but it's inevitable to improve the effectiveness of software development. That's why Dagger hit the scene to offer containerized workflows for continuous integration.
tags: ["Dagger", "CICD", "OpenSource", "SelfHosted"]
cover: "./dyrector-io-getting-started-with-dagger.png"
header: "./dyrector-io-dagger-101-containerized-continuous-integration.png"
coverAlt: Drawn picture of men working beside a pipeline on an oil field.
headerAlt: Header picture of a blog post titled Dagger 101.
---

**Continuous Integration and Continuous Delivery are the secret sauces of shipping new features consistently and reliably to your software. However, the effectiveness of this process is closely tied to the tooling that orchestrates it. Some of the pain points of CI/CD systems are slow feedback loops, vendor lock-in, lack of abstraction, limited composability, or YAML itself. This is where Dagger comes into the spotlight, promising a more unified and accelerated path.**

---

## Introduction

The development and deployment process at dyrector.io has already become much faster each year as we adopt and integrate better tools and methods. However, we aim to further unify and accelerate this. Dagger philosophy aligns with what we consider crucial for a truly rapid and seamless process:

- Local testing: Enable developers to test their code instantly, locally
- Programmable CI: Replace messy YAML-based, complex CI with code
- Compatibility: If it runs in a container, you can add it to your pipeline
- Portability: The same pipeline can run on your local machine, a CI runner, a dedicated server, or any container hosting service
- Universal caching: Every operation is cached by default, and caching works the same everywhere

Currently, we have the option to use our own dyrector.io (we’ll refer to it as dyo many times in this blog post) go CLI with our commands or Docker Compose with its YAML to spin up our stack for local testing, while we also maintain a GitHub Actions workflow for running end-to-end tests on GitHub. This setup lacks coherence, as we cannot employ the specialized GitHub Actions workflow YAML in a local setting or with a different CI/CD environment.

We want to get closer to being able to ship every single day, or even multiple times a day, as quickly as we possibly can, using the same tool running locally and in CI. Dagger feels like an actual innovation in CI/CD, and it seems it will enable us to do that. There is also a strong focus on getting feedback from the community and utilizing it when we’re designing and building something that people really need.

## Setting up Dagger CI/CD

We would like to use Dagger locally with the dyo Go CLI, and for this we need the Dagger Go SDK for integration (there are many Dagger SDKs) and the Dagger Engine, which will run our pipelines. We developed a small proof of concept (POC) to evaluate if we could use our entire stack locally with Dagger. If this POC will be successful, we plan to use the same setup in our GitHub workflow, essentially using GitHub Actions just to trigger the Dagger pipeline.

Steps to set up Dagger for our project:

1. Install the Dagger Go SDK
(again, you can use any other Dagger SDK for your project, but we use Go)
Go to your existing project – in our case it is dyrectorio.
```
$ go get dagger.io/dagger
$ go mod tidy
```

2. Add local Dagger test to our Makefile
It is for simple and fast “make test” (similarly to our other commands).
```
# Shortcut for local testing
.PHONY: test
test:
    go run golang/cmd/dagger/main.go
```

3. Create Dagger main.go
We already have dyo, dagent and crane in our golang/cmd, so put dagger here too.

4. Import Dagger SDK

Create a Dagger client using the SDK
This will allow you to interact with the Dagger Engine and create pipelines.

6. Create Dagger pipelines

Additional note:
We can also install the Dagger CLI if we want to, but this is an optional tool to interact with the Dagger Engine from the command-line – it has a nice terminal UI though, with parallel progress bars that are visually impressive if you are into that sort of thing.

Install the Dagger CLI
```
$ cd /usr/local
$ curl -L https://dl.dagger.io/dagger/install.sh | sh
```

## Workflow Integration

As you will see, the “Dagger way” is a very “Docker-ish” way - no surprise, one of the co-founders of Dagger is Solomon Hykes, earlier founder and technical director of Docker.

To show you concrete code examples from our POC:

Import Dagger SDK
In our main.go:
``` 
import (
	"context"
	"dagger.io/dagger"
	…)
```

Create a Dagger client using the SDK
```
func initDaggerClient(ctx context.Context) *dagger.Client {
	client, err := dagger.Connect(ctx, dagger.WithLogOutput(os.Stdout))
	if err != nil {
		panic(err)
	}
	return client
}
```

And we can call this initDaggerClient() function in our main() like this:
```
    ctx := context.Background()
    client := initDaggerClient(ctx)
    defer client.Close()
```

Run unit tests on our NestJS-based Crux backend:
```
func runCruxUnitTestPipeline(ctx context.Context, client *dagger.Client) {
	log.Info().Msg("Run crux unit test pipeline...")

	_, err := client.Container().From("node:20-alpine").
		WithDirectory("/src", client.Host().Directory("web/crux/"), dagger.ContainerWithDirectoryOpts{
			Exclude: []string{"node_modules"},
		}).
		WithWorkdir("/src").
		WithExec([]string{"npm", "ci"}).
		WithExec([]string{"npm", "run", "test"}).
		Stdout(ctx)
	if err != nil {
		panic(err)
	}

	log.Info().Msg("Crux unit test pipeline done.")
}
```

We can call this runCruxUnitTestPipeline() function in our main():
    runCruxUnitTestPipeline(ctx, client)

Run unit tests on our Next.js-based Crux UI frontend is very similar to the above code, we only need to change the host directory to “web/crux-ui/” and an additional “.next” exclusion, everything else remains the same:
```
    WithDirectory("/src", client.Host().Directory("web/crux-ui/"), dagger.ContainerWithDirectoryOpts{
        Exclude: []string{"node_modules", ".next"},
    }).
```

A slightly more advanced example when we run our Crux backend in production mode (as we do for e2e test) with a connected PostgreSQL DB service container:
```
func getEnv(envPath string) map[string]string {
    cruxEnv, err := godotenv.Read(envPath)
    if err != nil {
        panic(err)
    }
    return cruxEnv
}

func getCruxPostgres(client *dagger.Client, cruxEnv map[string]string) *dagger.Container {
    databaseURL := cruxEnv["DATABASE_URL"]
    parsedURL, err := url.Parse(databaseURL)
    if err != nil {
        panic(err)
    }
    postgresUsername := parsedURL.User.Username()
    postgresPassword, _ := parsedURL.User.Password()
    postgresDB := strings.TrimPrefix(parsedURL.Path, "/")

    dataCache := client.CacheVolume("data")

    cruxPostgres := client.Pipeline("crux-postgres").Container().From("postgres:14.2-alpine").
        WithMountedCache("/data", dataCache).
        WithEnvVariable("POSTGRES_USER", postgresUsername).
        WithEnvVariable("POSTGRES_PASSWORD", postgresPassword).
        WithEnvVariable("POSTGRES_DB", postgresDB).
        WithEnvVariable("PGDATA", "/data/postgres").
        WithExposedPort(5432)

    return cruxPostgres
}

func runCruxProd(ctx context.Context, client *dagger.Client, cruxPostgres *dagger.Container) *dagger.Container {
    crux := client.Pipeline("crux").Container().From("node:20-alpine")
    crux = crux.
        WithDirectory("/src", client.Host().Directory("web/crux/"), dagger.ContainerWithDirectoryOpts{
            Exclude: []string{"node_modules"},
        }).
        WithWorkdir("/src").
        WithServiceBinding("localhost", cruxPostgres).
        // WithEnvVariable("NOCACHE", time.Now().String()).
        WithExec([]string{"npm", "ci"}).
        WithExec([]string{"npm", "run", "build"}).
        WithExec([]string{"npm", "run", "prisma:migrate"}).
        WithExec([]string{"npm", "run", "start:prod"})

    _, err := crux.Stdout(ctx)
    if err != nil {
        panic(err)
    }

    return crux
}
```
 
We can run the above code in our main() like this: 
```
    cruxEnv := getEnv("web/crux/.env") 
    cruxPostgres := getCruxPostgres(client, cruxEnv) 
    runCruxProd(ctx, client, cruxPostgres) 
```

We would like to note that we made our POC with Dagger 0.8.x during September, so the code snippets above will show that. But even then the new API development of Dagger Services v2 (which we will need for our complex e2e pipeline) was in progress at Dagger in a separate feature branch and they promised on their Discord forum back then that this new API with some breaking changes will be included in Dagger 0.9. It wasn’t just us showing demand for parallel long running service containers - and they kept their word and it is indeed included in Dagger 0.9.0 released at the end of October. Shouts to Team Dagger!

We put our POC on hold in October, but we have been keeping an eye on Service v2 developments and news. We will try out Service v2 in the near future and dedicate another blog post to whether we managed to solve our entire e2e pipeline with Dagger.

Dagger efficiently caches each step of the pipelines, automatically handling the caching of source code copies, containers and builds, and when developers configure it programmatically, it also caches mounted volumes such as database data, node_modules, and Go build-cache. Our logs provide clear examples of this on reruns without code modifications. 

```
    copy web/crux/ CACHED
    > in host.directory web/crux/
    …
    pull docker.io/library/postgres:14.2-alpine CACHED
    > in crux-postgres > from postgres:14.2-alpine
    > in crux > service bvqf991cmob5i.97ul8ph8qf1qc.dagger.local
    …
    exec docker-entrypoint.sh postgres
    > in crux > service bvqf991cmob5i.97ul8ph8qf1qc.dagger.local
    [0.15s] PostgreSQL Database directory appears to contain a database; Skipping initialization
    …
    [0.30s] 2023-11-08 10::11.131 UTC [15] LOG:  database system is ready to accept connections
    ...
    exec docker-entrypoint.sh npm run build CACHED
    > in crux
    exec docker-entrypoint.sh npm run prisma:migrate CACHED
    > in crux
    exec docker-entrypoint.sh npm ci CACHED
    > in crux
    copy / /src CACHED
    > in crux
    exec docker-entrypoint.sh npm run start:prod
    > in crux
    [0.57s] > crux@0.7.0 start:prod
    [0.57s] > node dist/main
    [2.31s] [Nest] 33  - 11/07/2023, 14:24:13.142 AM     LOG [NestFactory] Starting Nest application...
    ...
```

## Challenges and Lessons Learned 

We were able to run most of our stack with Dagger 0.8.x, the Crux backend and the Crux-UI frontend separately, but our entire e2e test will require Dagger 0.9.x with the Services v2 API that we can run Crux, Crux-ui, Traefik and Kratos as long running service containers for the Playwright e2e container. 

If you want to know more about the Services v2, Dagger wrote a blog post about it here: 
https://dagger.io/blog/dagger-0-9 
 

## Best Practices for Dagger CI/CD

The fact that we can write the CI/CD code in Go and in a docker-like style had a refreshing effect on us. Here are some general tips:

- **Iterate small:** Start with a small POC to understand how Dagger fits into your workflow before scaling up
- **Community engagement:** Stay active in Dagger's community forums or Discord channels for support and to keep up with the latest developments
- **Documentation:** Keep your Dagger configurations well-documented to ease onboarding and maintenance
- **Monitor and optimize:** Regularly review the performance of your pipelines and optimize caching strategies for better efficiency

## Conclusion

We have seen firsthand the transformative nature of Dagger and the flexibility of its programmable pipelines. It stands out as a forward-thinking solution, addressing typical CI/CD bottlenecks with a developer-centric approach. Since Dagger is relatively new and evolving, keeping an eye on updates and community feedback can help in adopting best practices as they emerge.

## Dagger Resources

There's still lot to learn about Dagger, so it might be worth the time to check out the following resources to learn about this tool:

- You can explore further on Dagger's official website: **https://dagger.io**
- For those eager to dive deeper into Dagger's capabilities, the Dagger documentation is an excellent resource: **https://docs.dagger.io**
- For absolute hackers: **https://github.com/dagger/dagger**
- Dagger Discord community: **https://discord.gg/dagger-io**

---

_This blogpost was written by the team of [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source continuous delivery & deployment platform with version management._

**Support us with a star on [GitHub](https://github.com/dyrector-io/dyrectorio/).**
