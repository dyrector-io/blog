---
title: "A Quick Introduction to Self-Hosting"
date: "2023-03-08"
seoTitle: "A Quick Introduction to Self-Hosting | dyrectorio"
seoDescription: Self-hosting and open source software walk hand in hand. Get a brief intro to all things that need to be considered before picking self-hosting.
description: Self-hosting and open source software walk hand in hand. Get a brief intro to all things that need to be considered before picking self-hosting.
tags: ["SelfHosting", "OpenSource"]
cover: "./dyrectorio-how-to-selfhost-cover.png"
header: "./dyrectorio-how-to-selfhost-header.png"
coverAlt: Blog post cover reading Self-hosting is an increasingly preferred way of using software compared to SaaS solutions. It's cheaper, it gives control to engineers, what's there not to like? Here's a brief intro to the practice, the 0th issue of dyrectorio blog's self-hosting pieces.
headerAlt: Blog post header reading A quick introduction to self-hosting.
---

**Self-hosting is an increasingly preferred way of using software compared to SaaS solutions. It’s cheaper, it gives control to engineers, what’s there not to like? Here’s a brief intro to the practice, the 0th issue of dyrectorio blog’s self-hosting series.**

---

Self-hosting web applications is increasing in relevance both for individual developers and engineering teams. There are a couple of reasons behind this. 

1. **Control:** Self-hosting provides engineers with complete control over their infrastructure, allowing them to customize it to suit their specific needs and requirements.

2. **Privacy and Security:** Self-hosting can provide greater privacy and security compared to using third-party solutions. It completely eliminates sharing data with third-parties, therefore it shifts the responsibility of securing data to the engineer, who can choose the way they want to protect their data with encryption, authentication methods and other security measures.

3. **Costs:** It’s a lot cheaper to self-host, than to pay for a third-party SaaS. It also means that the hosts responsibility is to maintain the software and the infrastructure, which has to be considered when budgeting, because it may be a challenging responsibility without the required experience.

## Open-Source Software and Self-Hosting

Self-hosting is strongly connected with the concepts, benefits, and challenges of open-source software. Open-source software is used to substitute SaaS options by self-hosting. Besides the advantages of self-hosting, another emerges with open-source apps that rhymes with the other benefits: engineering freedom. Users might need an email solution to the project they develop, which they don’t need to create themselves, they can implement an open-source alternative of their liking to the stack.

## Challenges of Self-Hosting

Every advantage of self-hosting comes with its own trade off. Here’s what engineers need to consider.

- **Maintenance & Updates:** Engineers need to keep track of the updates that come out for the apps they self-host and maintain them. A significant, low-effort way to do address this problem is to simply watch the project’s repository on GitHub. Stargazers don’t get notifications on the updates of the projects, while users who watch do. It makes sense to approach this problem with testing the update in staging environments, similar to apps teams develop themselves.

- **Security:** Self-hosting poses several security risks only the user’s responsible for taking care of. It can be turned to their advantages, as they take their own security measures, and they don’t have to rely on the efforts of unknown individuals working for third parties. Access control, authentication methods, and up-to-date software can help avoid security breaches.

- **Scalability:** This issue might not be applicable when someone hosts an application for private use, but when a self-hosted app needs to serve a larger number of requests, users can avoid outages with monitoring, load balancing – Traefik and NGINX are the most common choices in this regard.

## Self-Hosting Starter Pack

In the coming weeks, we’re going to publish content about common scenarios when it makes sense to use self-hosted applications. What’s common in them is that self-hosting requires a certain set of tools and technologies.

### Orchestration

This process shouldn’t take more than a few minutes but keep in mind that some providers take 48 hours to process user requests to point a domain to a VPS. To do so, you need to add the VPS IP address to the domain’s DNS as an A record.

- **Podman:** Podman is a daemonless container engine. It can be used to deploy and run containers. For those who begin their self-hosting journey, Podman is our recommendation. The main reason of this is its focus on security. It comes with a CLI on Linux.

- **Docker:** Docker does the same as Podman, except it’s not daemonless. We recommend it to experienced users.

### Proxy

- **Traefik:** Traefik is an open-source web server designed for containerized environments. It supports automatic TLS certificate generation and renewal. It’s the preferable choice for dynamic configuration systems. It's available for Linux node registration on dyrectorio.

- **Caddy:** Caddy does the same as Traefik, but it focuses more on simplicity. It comes with a lot of plugins and middleware for customization.

## Miscellaneous services

- **Nextcloud:** Nextcloud is a self-hosted cloud storage and file-sharing platform.

- **WordPress:** WordPress is the most widely used content management system (CMS) for creating and managing websites and blogs. It’s available as a **[template](https://docs.dyrector.io/features/templates/wordpress)** on dyrectorio.

- **GitLab:** A self-hosted Git repository management tool that includes features like continuous integration/continuous deployment (CI/CD), issue tracking, and more. Like WordPress, it’s also available as a **[template](https://docs.dyrector.io/features/templates/self-managed-gitlab)** on dyrectorio.

- **Gitea:** A lightweight, self-hosted Git service that provides a web interface for managing Git repositories. Available as a **[template](https://docs.dyrector.io/features/templates/gitea)** on dyrectorio.

- **Matomo:** A self-hosted web analytics platform that provides insights into website traffic and user behavior.

## Summary

Self-hosting can serve different purposes, but the advantages and the challenges remain similar. It makes sense to consider the ROI of self-hosting induced maintenance costs compared to SaaS-fees that you’re trying to eliminate.

## Parts of this series

Part 1: **[Self-Hosting Event Scheduler Cal.com](https://blog.dyrector.io/2023-03-08-self-hosting-event-schedule-calcom-dyrectorio/)**

---

_This blogpost was written by the team of [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source continuous delivery & deployment platform with version management._

**Find the project on [GitHub](https://github.com/dyrector-io/dyrectorio/).**

