---
title: "Time to Part Ways with Docker Hub"
date: "2023-03-21"
seoTitle: "Time to Part Ways with Docker Hub | dyrectorio"
seoDescription: Docker's decision to axe Free Teams subscriptions is a huge blow to the open-source ecosystem. It's for the better, though. Learn what alternatives to look for.
description: Docker's decision to axe Free Teams subscriptions is a huge blow to the open-source ecosystem. It's for the better, though. Learn what alternatives to look for.
tags: ["SelfHosting", "OpenSource", "Docker"]
cover: "./dyrectorio-docker-hub-registry-alternatives-cover.png"
header: "./dyrectorio-docker-hub-registry-alternatives-header.png"
coverAlt: Blog post cover reading Docker announced the end of Free Teams, which is a huge blow to the open-source community. It's a painful transition, but it's for the better.
headerAlt: Blog post header reading Time to Part Ways with Docker Hub.
---

**Open-source community was caught off guard by Docker’s announcement to discontinue the Free Teams plan. Considering Docker’s merits in the open-source & self-hosted scene, it’s the end of an era. But Docker was never the only player in the field, and there are better alternatives.**

---

Docker announced the end of Free Teams subscriptions last week. The open-source community reacted with loud dissatisfaction to the news that all Free Team organizations need to subscribe to one of their paid plans if they want to keep their containers. After seeing the community uproar, Docker shifted to an apologetic approach claiming that public images will remain on Docker Hub if the maintainers decides to keep them, and even made sure that namespace squatting won’t be possible. Safe to say, it probably won’t be enough to keep their position as industry leaders.

## Docker Paved the Way for Containerization

Containerization wouldn’t be a popular practice without Docker and they deserve all the praise for the role they played in turning it mainstream. Their presence turned out to be gamechanger for the open-source community in the beginning, even if we consider the problems through the years surrounding Docker.

OCI – Open Container Initiative – making it possible to provide access to open-source projects, and offering technology that simplified their use is a huge achievement worth commending. Docker led the movement behind reducing dependency induced problems on a high-level impacting everyone by providing a low barrier entry for less experienced users.

## Docker Was Always Flawed

Merits aside, Docker didn’t do much for permeability through different types of registries. Issues surrounding security and other areas were always present. While some companies are just getting started with Docker, other big players rather boycott Docker. In fact, their implicit ways of usage were counter intuitive and almost against moral and technical standards. Arguments can be made how a simple `nginx:latest` is better than `docker.io/library/nginx:latest`, but one thing’s for sure, it’s an example of how they’d always be behind the operation of containers even when you don’t really want to deal with Docker Hub. And the thing is: there are better registries than Docker Hub.

## Better Alternatives Are Already Out There

Reddit was on fire after the announcement. Some users wanted to express their disappointment, while others were looking for alternatives. One of the most popular recommendations is Quay of Red Hat, but V2, GHCR, GitLab, Google Container Registry, Azure Container Registry are all worth looking into if you consider leaving Docker Hub for good. If you are into self-hosting Harbor is a very decent solution to the problem at hand with all the culprits, you would have to face using a regular v2 registry image.

## We Support Most Registry Providers

dyrectorio is able to deploy containers from different registries, including V2, Docker Hub, GHCR, GitLab, Google Container Registry. More details about how to use registries with dyrectorio **[here](https://docs.dyrector.io/tutorials/add-your-registry)**. It might be worth it to check out Harbor, which is a self-hosted registry. We plan to support a wide variety of technologies to maintain accessibility to all kinds of users and organizations.

---

_This blogpost was written by the team of specialists at [dyrectorio](https://dyrectorio.com). dyrectorio is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.
