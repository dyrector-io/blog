---
title: "‘Action!’ – dyrector.io behind the scenes"
date: "2023-05-04"
seoTitle: "‘Action!’ – dyrector.io behind the scenes | dyrector.io"
seoDescription: Behind the creation of the technical clapperboard known as dyrectorio there are 7 misfits. Discover who we are and how we work to help engineers.
description: Behind the creation of the technical clapperboard known as dyrectorio there are 7 misfits. Discover who we are, how we work and what technologies we like to help engineers deliver their applications faster, so they can focus on developing their projects instead of setting them up.
tags: ["Startup", "Platform"]
cover: "./dyrector-io-who-we-are-cover.jpg"
header: "./dyrector-io-who-we-are-header.jpg"
coverAlt: Drawn picture of a stylized woman and men cheering.
headerAlt: Drawn picture of a stylized women and men cheering with confetti raining on them.
---

## Clapperboard for containers

Could you take a closer look at the dyrector.io logo for a second? Do you see the resemblance?

If you're unfamiliar with the project, dyrector.io is like a clapperboard for your containers. The platform tells your containers when it's time for some action. In technical terms, dyrector.io is an open-source container management platform.

Behind the making of this fancy clapperboard, there's a team of 7 misfits in a town called Szeged, located in the southern region of Hungary, about 90 minutes away from Budapest. Two of them, Levi and Berci, came up with the idea in late 2020 when they worked on a project for a client that needed to enable salespeople and resellers to deploy their applications. The special requirement was to allow them to deploy the app to hundreds or thousands of targets at the same time. There was no alternative for this use case, so they started to assemble a team to create the platform they were looking for.

The core team came from different backgrounds with various experiences. Máté, the lead engineer of the team, gained experience as a developer working on several B2B SaaS projects. His friend Nándi joined the party as a DevOps guy. The marketer role was shaken up a bit, but Geri was onboarded to write this blog post and the ones before and to do everything marketing and communication-related. Later, Sziszi came, responsible for SysAdmin duties.

At the same time, we onboarded 4 more engineers temporarily to ship a few new features, including a configuration screen with common, Docker, and Kubernetes filters, CLI, registry, chat integrations, templates, and so on.

After working with the 4 engineers, one of them, Bence, stayed on our team to develop new features and help with refactoring the code.

## Culture at dyrector.io

Most of the team is still in their 20s, which allows us to spend some time outside of work connecting with each other after an exhausting day working on a new feature or beginning the day with breakfast at the office. While in-person availability isn’t required, the team is still on-site 99% of the time. It's just easier to communicate while everyone's in town.

For remote conversations, we prefer to use Discord, and task management takes place on Jira.

We encourage proactivity and prompt solutions to emerging challenges. We believe that even if you can't do something about a problem, the least you can do is let others know so they can react to the problem. We believe that working out solutions together helps the team bond over hard times. It's easier to do when the entire team takes ownership of the project.

We take time to celebrate success and pick each other up when things don't go our way. This means we celebrate things like birthdays, graduations, sports achievements like Lake Balaton Cross Swimming, marathons together, and speak our minds when someone needs to vent because they're going through some personal things, or one of us made a mistake and they feel down about it. It's alright to fail at dyrector.io, but we can't accept not trying, Michael Jordan style. Part of that deal is that we'll aim to solve any problem that occurs.

## Technologies we like

dyrector.io has two agents, one for Docker, and another for Kubernetes, both written in Golang. Why we chose Golang is explained here. We developed the platform’s UI in React.js, and Next.js. Backend is in Node.js, and Nest.js. The platform communicates with those agents in gRPC with TLS encryption. Data is managed in a PostgreSQL database mapped with Prisma. And of course, we need to mention our coffee maker that gives us enough fuel to be there for breaks and concentrated work, too.

## How we work

Our approach to getting things done mostly resembles agile/SCRUM methodology, but we don't live and die by it. We don't have sprints all the time, but when there's a pile of things to get done, mainly shipping new features, we tend to focus more on the practice, having daily standups to maintain sync between teammates, and so on.

As of the writing of this blog post, we're approaching a heavy refactoring cycle of the code. During these times, we don't have as many frequent meetings as earlier because making the software more efficient takes less collaborative effort in our case. Our all-team meetings are reduced to weekly syncs during times like this. Recently, most of our focus was on setting up the platform for a stable user experience, which is a demand created by ourselves. The next big release of dyrector.io, 0.4.0, won't be anything shiny compared to previous releases, except it'll provide consistency for our alpha and self-managed users.

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.
