---
title: "The Ups & Downs of Working With Go"
date: "2022-12-05"
seoTitle: "The Ups & Downs of Working With Go | dyrector.io"
seoDescription: Go has its benefits and disadvantages, but it's just the right programming language for dyrector.io. Here's what we learned about error handling & interfaces.
description: Go is the right language for platforms interacting with other cloud technologies, such as dyrector.io. Find out what we've learned about error handling and other areas of the programming language on the rise.
tags: ["Golang", "Cloud", "Kubernetes"]
cover: "./dyrectorio-the-ups-and-downs-of-golang.png"
header: "./dyrectorio-advantages-of-golang.png"
coverAlt: "3d printed Go mascot, Gopher in front of Scottish landscape. Above it the title says: The Ups & Downs of Working With Go. Under that it says: Go is the programming language that delivers no empty promises for cloud applications and DevOps automation. It’s lightweight, the perfect match for parallel computing, and simple to use. We had to hop on the Golang bandwagon, as well."
headerAlt: "3d printed Go mascot, Gopher in front of Scottish landscape. Above it the title says: The Ups & Downs of Working With Go."
---

**Go is the programming language that delivers no empty promises for cloud applications and DevOps automation. It’s lightweight, the perfect match for parallel computing, and simple to use. We had to hop on the Golang bandwagon, as well. Over the past months of working with the language, we found out about its advantages and disadvantages we learned to manage including error handling and interfaces.**

---

Go, or as many refer to it, Golang became one of the most popular programming languages in recent years. It makes sense: it’s explicit, easy to read, and the de facto language for cloud native applications. For dyrector.io’s use case, Go turned out to be the right match, too.

## Background

To put into context why we picked Go to develop some of dyrector.io’s functions with it, it makes sense to revisit the history of its making.

Go was published in 2009 by Robert Griesemer, Rob Pike, and Ken Thompson, who all worked at Google at the time. They found it difficult to work with C++, so they decided to substitute it with a language that’s simple and progressive while keeping the positive traits of C, Pascal and other languages. Golang turned out to be a game changer, because it enabled software teams to deliver features faster instead of spending tremendous amount of time on bugfixing. They also added parallel programming primitives as additional spice to something C-like.

3 years after its inception, Golang was made open-source. It’s used by some of the biggest organizations, including Dropbox, Twitch, and Uber, for example. The latest version of the language, 1.19 dropped this year with improved runtime, libraries, and by popular demand, **[generics](https://go.dev/doc/tutorial/generics)**.

It makes sense that organizations of all kinds use Go, since it’s been made by Google engineers who aimed at solving highly complex problems enterprises face. Go also allows developers to solve very simple problems at scale.

Besides the already mentioned use cases, Go excels at database implementations and DevOps automation, as well. However, it’s not one of the preferred languages when working on embedded programming – it’s one of the areas where Rust and C outperforms Go.

We also recommend **[Hugo](https://gohugo.io/)** for static site generation. Although Hugo has its own learning curve, it works similar to other site generators, like Gatsby, where you only need to use Markdown to create content. We like Hugo because of its function rich themes.

## We Just Experimented with Go, And Then...

dyrector.io uses two types of agents to deploy applications – _dagent_ to deploy Docker instances, and _crane_ to deploy to Kubernetes clusters. When we worked on the proof-of-concept, we made them in .NET. Just as we expected, .NET provided subpar efficiency. We had to look for another language, and we decided to give Go a try.

Earlier we had zero clue how lightweight Go was going to be. Once we began to stress test it with a simple API, the results were clear. With other languages, only a fraction of the efficiency could’ve been achieved with a tremendous amount of work. It became transparent to us that Go is the way to go – pun intended.

Since then, the agents and things related to them are written in Go, because it’s the de facto in cloud native space due to the reasons addressed above. Besides, gRPC is the easiest to use with Go, which we use when setting up _dagent_ or _crane_ on the user’s node.

It’s well-known that Go is suitable for CLI development. dyrector.io’s CLI is also written in Go, which you can use to set up the platform on your local machine in an instant like **[this](https://docs.dyrector.io/get-started/cli)**.

## Go's Simplicity Is Perfect For dyrector.io

In brief, we picked Go because it’s the de facto programming language of the cloud native community, and the largest open-source Go codebase is Kubernetes itself.

A more detailed reasoning behind our choice is that it encourages simplicity by its nature on a language level. It’s easily readable, and forces developers to write direct code. Besides its simplicity, tooling makes it an exceptional language. It can be debugged with most of the popular IDEs.

Go is semi-restricted, meaning it’s flexible to use with individual preferences, coding styles as long as a couple of things are kept in mind: handle errors and don’t panic.

## Go's Versatility Provides Room for Flexibility

Go is our go-to choice for parallel computing, by far. Where other languages fail, Go thrives in this area. For example, Occam, which is designed for parallel computing, isn’t too bad but Go really nailed parallel computing capabilities. Despite having the comfort of garbage collection, the utilization footprint is unbelievably low, transcending Golang into the right framework for our lightweight applications.

Go hit it out of the ballpark this year with the release of generics. It’s been on top of the wish list of the community for years. It enables users to work with pre-defined methods, and to not create them all from scratch. Due to generics, code generation is finally replaced by clean, language native, general solution, resulting compact, readable code.

## Go is on Fire, and It Allows dyrector.io to Scale

Go has one of the most vocal communities, and it’s taking the world by storm along with Rust. As interest in the language increases, the opportunity emerges to hire the best engineers with experience in Go. We noticed this trend during Hacktoberfest, as well, when our most popular issues were Go related.

Besides the obvious HR aspect, some organizational demands have to be factored in, as well. Go’s simplicity and restrictions allow newly onboarded team members to ramp up with the existing codebase. It’s a beneficial trait of Go when the code needs to be maintained over long periods of time.

## There Are Cons to Go Still

```golang
if err != nil {
return err
}
```

You might know the problem here; this can feel repetitive, painful and unnecessary, mainly if you have C# or Java background. Defer also exists but its use cases are limited due to its nature.

Digging deeper into the error handling of Go is out of the scope of this blog post but if you’re curious about it, you can find out more **[here](https://golangbot.com/error-handling/)**. Those who critique error handling of the language tend to point out that stack tracing is missing. Many still prefer the good old try-catch approach, because it’s available in Java, .NET, and C, as well.

Besides errors, there are panic() functions in Go. It means the code halts the execution which is a fatal state. An opinionated practice to use panics in combination with middlewares. Let’s consider the scenario when the web server can't handle a request or a resource is unavailable, a middleware could recover and return a proper error code and the server proceeds to handle requests instead of crashing. This allows the service to abort execution when a fatal error emerges, without endangering other requests being in progress. This also allows database rollbacks when the server interacts with them. A disadvantage of it is that it’s difficult to test. panic() resembles “goto”, that’s why it’s beneficial to avoid. Standard error handling is still more explicit about intent.

We have high hopes that 2.0 or the next release will solve most of the issues of error handling in Go. More details about what’s ahead **[here](https://go.googlesource.com/proposal/+/master/design/go2draft.md)**.

At times, enums can turn awkward to use for some. The problem with enums is that Typescript has variant types which you can define as a string and they’re ready to use. It’s not possible in Go. More details in official Go **[docs](https://go.dev/doc/faq#variant_types)**.

By our experience, the implicit interfaces are comfortable to use but they can be tangled up with ease. It’s better to keep in mind what you’re trying to achieve with them before you start working with Go interfaces. You can learn about interface best practices in Go in this **[article](https://climbtheladder.com/10-golang-interfaces-best-practices/)**.

There is a work around to have forced static type check for interface implementation. You can add the **[mentioned solution](https://go.dev/doc/faq#guarantee_satisfies_interface)** to your unit tests for example.

## Summary

Golang is the obvious language to choose when developing platforms that interact with other technologies that utilize cloud environments. It’s simple and easy to use, while offering resource friendly behavior.

There are many curated resources on Golang where developers can start their journey with the language, but one of our favorites is **[Awesome Go](https://github.com/avelino/awesome-go)**. For a quick glance at how it works, the best place to start is the **[A Tour of Go](https://go.dev/tour/)**. And further details are provided in the **[official Go documentation](https://go.dev/doc/)**.

To see projects written in Golang, check the following repositories:
- **[Kubernetes repository](https://github.com/kubernetes/kubernetes)**
- **[Prometheus repository](https://github.com/prometheus/prometheus)**
- **[Traefik repository](https://github.com/traefik/traefik)**
- **[gRPC Golang Implementation repository](https://github.com/grpc/grpc-go)**

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrector.io). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.