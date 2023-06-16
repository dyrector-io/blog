---
title: "10 Containerization Best Practices to Keep in Mind"
date: "2023-06-15"
seoTitle: "10 Containerization Best Practices to Keep in Mind | dyrector.io"
seoDescription: Containerization is supposed to make user friendly applications. This doesn't happen by chance. Find out about containerization best practices.
description: Containerization isn't the practice of making usability out of thin air. Here's how you can create user-friendly containerized applications.
tags: ["Containerization", "Docker"]
cover: "./dyrectorio-containerization-best-practices-cover.png"
header: "./dyrectorio-containerization-best-practices-header.png"
coverAlt: Drawn picture of a container ship with container best practices written above.
headerAlt: Drawn picture of a container being parachuted between clouds.
---

**Containerization’s mission is to increase usability but that rarely happens to containers. When you have user-friendly applications in mind, it’s in everyone’s best interest to go the extra mile. Here’s 10 things you can do to create and maintain a user-friendly containerized application.**

---

## #1: Isolate Build & Runtime Dependencies

Multi-stage build or not, don't put build time dependencies into the runtime: make the attack surface smaller by giving up less to entities with malicious intent to use and exploit in the container. This approach aligns with the best-practice represented by distroless images, while there are arguments that images without dependency aren’t any less secure than the ones abundant in dependencies.

## #2: Pick the Right Image for the Job

Keep in mind when an image you’d like to use fits your exact use case. There are generic, sort of de facto images that might be helpful in any given scenario, but a general rule of thumb is to check image size and basic behavior. A few examples:

- **[scratch](https://hub.docker.com/_/scratch):** scratch is an empty image you can use to create a new image. It comes with no files or folders whatsoever, all you can do with it is call the FROM scratch command to add files, etc. to it. Works best if something has absolute zero dependency.
- **[busybox](https://hub.docker.com/_/busybox):** This lightweight image has over 200 customizable utilities, and it’s the self-proclaimed Swiss Army knife of Embedded Linux.
- **[alpine](https://hub.docker.com/_/alpine):** Lightweight Linux distribution, that you can imagine as busybox on steroids, since it’s literally built around it. With a growing community around it, alpine is destined to become one of the most popular distros, since it’s only 5 megabytes, and it’s lightning fast with a lot of security focus. Important notice: it has musl over glibc.
- **[debian](https://hub.docker.com/_/debian):** Versatile Linux distribution, that provides feature rich package management due to apt capabilities. It’s one of the first free open-source projects dating back to 1993, which makes it inevitably a more mature Linux distro than Alpine.

### Alpine or Debian?

Alpine is more suitable for usage with restricted resources as a container, and while Debian is a bit slower with packages, it also offers more capabilities and is more supported (systemd, glibc).

## #3: Organize Cache Layers Logically

Each Docker build directive in the Dockerfile spawns a new layer, and those layers are stored, therefore cached. To save time, start with static directives and move towards dynamic ones. For example, copying the compiled application should typically be the last step.

## #4: Make Sure You Have Reproducible Builds

Reproducible builds are important to achieve consistent behavior of your image. It’ll allow you to verify the source of the binary, resolve issues that occur faster, enabling you to have the same output given the specs.

## #5: One Process, One Container

Generally speaking, it’s the right thing to do. Separating processes from each other is the easiest way to reduce the complexity of your stack. Isolating a process eliminates the risk of interfering with others, allows easier upgrading, helps with builds and testing. Single concern containers also pave the way for general use, which can serve as building blocks. If you need other utility processes, check out the **[sidecar pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)**.

## #6: Run Containers Without Root 

Unless you change the default behavior of container runtimes and deploy them, they run as root. Containers don’t need root privileges most of the time. It’s an unnecessary vulnerability factor because if someone exploits it, your previously set permissions will be useless against them since the root privilege will enable them to do as they will, taking complete ownership of the given machine. It is like having your keychain hanger outside of the house.

Podman and OpenShift are viable solutions that run containers rootless, but Docker supports rootless runtimes, as well. Besides, if you need to run it with root privileges, you can do so without using the host’s root user.

Well-engineered containers are non-root by default.

## #7: Add Default Exposed Ports

Containers with exposed ports by default are easier to use since they’re rarely used on their own. When a container's creator defines exposed ports, users don’t have to go out of their way to configure it for themselves, and when the container is started with docker, it exposes those ports.

Using `EXPOSE` makes the container listen on their local environment, and you can also configure whether the protocol is TCP or UDP. Default is TCP when you use it.

## #8: Define ENTRYPOINT and CMD

`ENTRYPOINT` and `CMD` are indispensable within a container that’s designed for usability. Users without context won’t be able to understand the behavior of the container, therefore it’s essential to set constraints that’ll help with usability.

## #9 : Add OCI Annotations

By adding annotations, using the LABEL directive within a Dockerfile, you can provide extra information to a container’s users. These annotations can help with usability or verification of a container. There’s a bunch of annotations that are pre-defined by OCI standards, but we suggest using source, license, revision, vendor, and title.

## #10: Do Frequent Security Analysis 

If there’s a vulnerability, you can evaluate if you have the impacted code piece and if it’s in use within your application. It’s possible that the vulnerability is severe, and while you have the library in your container, the code never calls the affected part. 

There are static image analyzers you can use, like **[Trivy](https://trivy.dev/)**, **[Anchore Engine](https://anchore.com/blog/anchore-engine/)**, or **[Quay Container Security Operator](https://catalog.redhat.com/software/container-stacks/detail/601aa650895df448347e722f)**.

## Relevant resources

If you'd like to learn more about containes, check out these:

- **[12factor.net](https://12factor.net/)**
- **[OCI image specification](https://github.com/opencontainers/image-spec)**

---

_This blogpost was written by the team of [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source container management platform._

**Find the project on [GitHub](https://github.com/dyrector-io/dyrectorio/).**
