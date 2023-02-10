---
title: "Notifications Are Nice but They’re Not ChatOps"
date: "2022-07-07"
seoTitle: "Notifications Are Nice but They’re Not ChatOps | dyrector.io"
seoDescription: Many teams utilize Slack chatbot notifications for work but ChatOps offers a lot more than that. Learn about the basics of ChatOps.
description: ChatOps is a lot more than plain chat notifications about your app being deployed. But how can your team get it right? Read our blog post to find out.
tags: ["DevOps"]
cover: "./dyrectorio-chatops-and-chat-notifications.png"
header: "./dyrectorio-basics-of-chatops.png"
coverAlt: "ChatOps is DevOps done through chat messages. Operation teams are enabled to execute actions without opening an application or a terminal."
headerAlt: "Well-working ChatOps relies on accurate and consistent audit logging. Without it, you can't implement ChatOps workflows into your operations."
---

**There are levels to ChatOps, and notifications are only the revolving door to the reception of the Hotel of Chat Integrations. High-level utilization of ChatOps solutions enable teams to react to and solve problems in an instant, without accessing other interfaces. Find out about the basics of ChatOps, the relation between it and audit logging, and how all of it can impact your DevOps tool’s usability.**

---

ChatOps is DevOps done via chat applications. Often it gets confused with plain notifications. And just like switchable lightbulbs which can’t be automated aren’t smart ones, chatbot notifications shouldn’t be considered ChatOps. Instead, it’s when teams execute certain tasks, interact with tools and their infrastructure by sending commands in messages.

## Notification Driven Development

Alerts and notifications are critical in the life of a DevOps team. How else would they know in an instant if something happened that needs to be addressed to avoid downtime and user satisfaction plummeting?

There are use cases when notifications are extremely helpful. Like getting notifications of status changes through [CI/CD pipelines](https://blog.dyrectorio.com/2022-01-02-cicd/), nodes shutting down or new nodes scaling your infrastructure. But they only cover one-way communication. Your teammates see the notification, then go on to do the work that needs to be done outside of the chat platform where they received the message.

ChatOps enables teams to get things done in the chat platform where they got the alert without opening any other app, terminal or browser.

## ChatOps Capabilities

Demand for ChatOps emerged due to the waste-cutting nature of [DevOps](https://blog.dyrectorio.com/2021-11-03-devops-differ/). Since collaboration is a key factor of DevOps, it made sense to bring some processes to one place where teammates already work with each other.

While notifications and alerts are useful, organizations didn’t stop at the ground floor. Consider simple things like e-mails; they turned obsolete in intra-team communication. First of all, wiping out untraceable e-mail threads, the appearance of chat rooms where communication-driven operation happens increased the transparency of operations. Turning messaging platforms into source-of-truth accelerates onboarding processes, as well.

High-level integrations bring even more to the table. For example, if an outage happens, the chatbot can create a room dedicated to the problem. They add relevant staff members to the chat and send a message explaining the error, where they can already start to treat the issue. The chatbot acts as a facilitator to high-velocity operations teams in this case by creating a streamline for commands to handle the situation.

The point of it all is that people don’t need to log in and work on 90+ Chrome tabs. But this raises the challenge of reliable and consistent monitoring.

## Audit Logging, The Challenging Part of ChatOps

Good audit logging is the bedrock of ChatOps done right. Without it, the integrations won’t make your team’s life easier because it won’t be able to deliver relevant data. There are three requirements of proper audit logging:

- **Collect relevant data:** While there are some industry standards to audit logging, especially in the financial industry, audit logs should never have a blind spot. For example, if your system records users and the actions they make but not the time of when the action took place, you’re missing important information. Tracking relevant data is crucial to understanding what caused the problem.

- **Consistency:** Monitoring should be consistent across all places. Including devices and browsers, for example. Audit logs not gathering information generated from certain devices, while tracking data from another type of device shouldn’t be considered sufficient.

- **Access control:** Modifying audit logs should be prevented by any means. This can be achieved by highly restricted access to the logs. Modification also makes it difficult to backup lost data or roll back configurations or components.

Missing any of these factors, your team won’t be ready to utilize ChatOps. Audit logs are the basis of chatbots generating easily understandable error messages.

## ChatOps Isn’t Killing Your Product

The shift from using products directly to through ChatOps integrations raises some concerns that shouldn’t be stressed too much. Chat integrations won’t hurt the usability of developer tools, rather alters the way users interact with it.

After all, your product’s purpose is to deliver value to your users. Some teams might find it rather useful to interact with your product via Slack. Others might love your UI so much they always have your product open in a Chrome tab.

The bottom line is your product should be able to provide alternatives to fit your user’s needs and requirements.

## Summary

ChatOps done right can cut massive amounts of waste from operation team’s processes. Getting things done in one place without using a browser or a terminal is a massive advantage that can be achieved with extensive preparation, in other words, accurate audit logging.

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrector.io). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.
