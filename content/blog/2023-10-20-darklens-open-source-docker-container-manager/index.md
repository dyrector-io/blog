---
title: "Easily accessible docker logs & inspect with darklens"
date: "2023-10-20"
seoTitle: "Easily accessible docker logs & inspect with darklens | dyrector.io"
seoDescription: darklens is an open-source container viewer to access docker logs and container settings from multiple environments.
description: darklens is an open-source container viewer to access docker logs and container settings from multiple environments.
tags: ["Docker", "Container"]
cover: "./dyrector-io-darklens-open-source-docker-container-manager-cover.png"
header: "./dyrector-io-darklens-open-source-docker-container-manager-header.png"
coverAlt: Cover picture of a blog post titled How does darklens help you with containers? with description underneath saying "darklens is a lightweight container viewer. It makes docker logs and container configs accessible."
headerAlt: Header picture of a blog post titled Container logs & configs with darklens.
---

**darklens is a lightweight container viewer. In other words, darklens is a tool you can use to check out your containers across multiple environments without opening dozens of terminals and digging up SSH keys.**

---

## The never-ending pain of endless terminal windows

Have you felt the confusion when you have at least 4 terminal windows in front of you and after 5 minutes you have to double check what’s going on in either of them? Well, the guy who accidentally deleted GitLab’s database might know a thing or two about that.

Hold on, we have no personal feelings against terminals. They’re cool until the point when you have terminal window blindness. We kind of like how you can just type `npm i` and things work out. To be able to use darklens, you’ll actually need a shell. Thought we’d mention that part to put our love and hate relationship into perspective about terminal windows. But when an environment – or multiple environments! – hogs a terminal window, that’s the opposite of cool.

To prevent this phenomenon, and possibly fatal database deletions, we came up with the idea to deliver a centralized UI for your containerized stack. Whether you have one home server, or have ten or twenty VMs, you can add them all to darklens and check out what’s going on. Is your self-hosted Minecraft server having problems? Cool, let's just give darklens a quick look to see what’s happening.

## Why use JSON when a GUI will do?

Be honest: when was the last time you looked at a JSON and had complete understanding of the situation? Maybe it’s just us, but when it comes to container configs, we prefer to take a glance at settings in an organized way. Standards are fine, but that doesn’t mean configs need to come exclusively in JSON format.

That’s why we made a table view for container configs. Essentially, what you’d see in a terminal window after sending a docker inspect command, you’d see the same data in darklens.

## Agent installation is like a breeze

darklens might remind you of a couple of already existing tools. We tried some of them, and we faced problems getting on-board time to time. These tools are certainly popular for a reason. We had two thoughts about this, however:

- When on-boarding becomes complex for an abstraction, such as darklens, the whole thing might fail at the beginning.
- It doesn’t take too much to improve the user experience to spare users the trouble of setting up ports and other things.

That's why we came up with the idea to offer an easy to install agent. You can install the agent with 3 easy steps:
- name the environment where you’ll set the agent up,
- generate a one-liner script,
- run it in a shell,

and you’re good to go.

Based on the feedback of a couple of folks who we asked, our agent is good to use because it just works. Therefore, the whole process facilitates towards a smooth user experience, so mission accomplished.

## Get started with darklens 

Follow these two simple steps to set up darklens:

1. Enter `docker run -p 8000:8000 -d ghcr.io/dyrector-io/darklens:latest` in terminal
2. Open `localhost:8000` in browser

## Check out darklens on GitHub

Give the tool a closer look on GitHub:

- **https://github.com/dyrector-io/darklens/**

If you bump into anomalies, feel free to create an issue, or reach out to us on **[Discord](https://discord.gg/pZWbd4fxga)**.

---

_This blogpost was written by the team of [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source continuous delivery & deployment platform with version management._

**Support us with a star on [GitHub](https://github.com/dyrector-io/dyrectorio/).**
