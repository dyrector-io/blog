---
title: "A Practical Guide to Personal Dashboard Self-Hosting"
date: "2023-04-12"
seoTitle: "A Practical Guide to Personal Dashboard Self-Hosting | dyrectorio"
seoDescription: Personal dashboards are the most customizable tools you can host for yourself. Here's how to pick the one for your use case.
description: Self-hosting a personal dashboard is a great way to dive into the rabbit hole of self-hosting, as many dashboards focus on homeservers and monitoring them. Here's how you can find the right dashboard for your use.
tags: ["SelfHosting", "OpenSource", "PersonalDashboard"]
cover: "./dyrectorio-self-hosting-personal-dashboard-cover.png"
header: "./dyrectorio-self-hosting-personal-dashboard-header.png"
coverAlt: Drawn picture of a man standing in front of a whiteboard that has green and red bars, like a dashboard with a flower in a pot in the corner.
headerAlt: Blog post header reading A Practical Guide to Personal Dashboard Self-Hosting.
---

**One of the most common use cases of self-hosting is of personal dashboards. The key trait of personal dashboards is customizability. In this blog post, you can find out about essential dashboard tools.**

---

Personal dashboards give you quick access to whatever you’d like to reach with as few steps as possible. It can be data, or a website, bookmarks, your own search bar with customized commands. Dashboards are popular because these tools spare users the time they’d spend on going out of their way to navigate to a certain website or application using the URL bar. Let’s say you’d like to make your own dashboard that aggregates news from all kinds of sources. Instead of individually hitting up each website, you can make a dashboard that gathers the news on your own feed.

## How to Pick the Right Dashboard

Open-source dashboards serve multiple purposes. There are dashboards able to combine these with the help of widgets and integrations, some serve well-defined goals, like giving insight into personal expenses or time management.

Understanding what you’d like to get out of a dashboard is the first step of self-hosting a dashboard. Getting a defined specification will pave the way to the right tool.

## General & Server Dashboards

One of the most important advantages of your own dashboard is the ability to customize them to your needs. **[Dashy](https://github.com/Lissy93/dashy/)**, as one of the most popular open-source dashboards provides exactly that. You can arrange your important links, create widgets with this tool. Another benefit of Dashy is the fact that it’s easy to set up and customize, so even less advanced users can get many things out of the tool.

Server dashboards give you a neat homepage for the applications running on your infrastructure. Two of the most popular dashboards are **[Heimdall](https://github.com/linuxserver/Heimdall)** and **[Homarr](https://github.com/ajnart/homarr)**. All of these are customizable with different capabilities, such as Docker integration to interact with containers running on your server. Homer is a good option, too, that’s customizable with yaml files.

## Habit tracking, to-do lists

Imagine that you’re trying to gain control over your habits because you’re trying to live healthier, or you want to do your everyday tasks in a more organized manner. A really cool tool to help you is **[Habitica](https://github.com/HabitRPG/habitica)**. It’s not entirely a dashboard, but rather a gamification platform for whatever things you need to get done. Habitica will turn your tasks into an RPG and reward you like what you’d expect from a role-playing game. You get things done for gold, experience points and other stuff. What makes Habitica special is the fact that it supports all kinds of OSs, including iOS and Android, too. Unfortunately, you can’t set up Habitica to your phone with dyrectorio, but you’re good for any Linux, Mac or Windows setup.

## Time management

We’re eager to give any **[Golang](https://blog.dyrector.io/2022-12-05-ups-and-downs-of-golang/)** based project a try. One of these is **[Traggo](https://github.com/traggo)**, a time-management application, sort of a Toggl alternative. It’s easy to setup and configure, so one thing’s for sure: it won’t take up a lot of time of your logs to get things started with Traggo. If you’re not familiar with Toggl, it’s a time tracking tool that helps you get an overview on how you spent your days in a calendar view.

## Server monitoring

Hardcore self-hosting enthusiasts might find a monitoring dashboard extremely useful. The de facto monitoring tool of the industry is Grafana. We use it, as well, along with Prometheus that collects your metrics and Grafana turns it into visible data. Our **[blog post](https://blog.dyrector.io/2022-04-01-devops-metrics/)** addresses the importance of DevOps Metrics, and even describes how Prometheus combined with Grafana can give you the insight you need to maintain your infrastructure.

Grafana and Prometheus are obviously incredibly large tools. You don’t need them for home servers and private VPNs. **[Dash.](https://github.com/MauriceNino/dashdot)** is the right monitoring dashboard for that use. Besides tracking your server’s performance, it’s supported by both Homarr and Heimdall.

## Dashboards offer endless capabilities

The dashboards introduced above are just the tip of the iceberg, as there are many different dashboards made for specific use cases. As mentioned earlier, you need to understand what you’re trying to get out of a dashboard before selecting the right one.

There are many options for personal dashboards that list apps running on your infra, but in many cases, the dashboard has nothing to do with stuff like that. If you want to track your music listening habits on Spotify, there’s a **[dashboard](https://github.com/Yooooomi/your_spotify)** made for that. If you’d like to focus more on your workout routine, there's a **[dashboard](https://github.com/wger-project/wger)** you can use.

The common ground between all of these alternatives is the fact that they can be set up with dyrectorio. Configuration might alter but if there’s an OCI image to a tool, it can be deployed with the platform.

---

_This blogpost was written by the team of [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source continuous delivery & deployment platform with version management._

**Find the project on [GitHub](https://github.com/dyrector-io/dyrectorio/).**
