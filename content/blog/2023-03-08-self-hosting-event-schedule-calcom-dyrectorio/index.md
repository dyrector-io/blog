---
title: "Self-Hosting Event Scheduler Calendly Alternative Cal.com With dyrectorio"
date: "2023-03-08"
seoTitle: "Self-Hosting Event Scheduler With dyrectorio | dyrectorio"
seoDescription: Self-hosting an event scheduler, such as Cal.com, is a shortcut towards flexibility. Learn how you can self-host the Calendly alternative.
description: Self-hosting an event scheduler, such as Cal.com, is a shortcut towards flexibility. Learn how you can self-host the Calendly alternative.
tags: ["SelfHosting", "OpenSource", "Template"]
cover: "./dyrectorio-calcom-self-hosting-cover.png"
header: "./dyrectorio-calcom-self-hosting-header.png"
coverAlt: Blog post cover reading In this blog post, you can find out how to setup Cal.com, an open-source vent scheduler alternative to Calendly, and more importantly, why you should consider it. Learn how you can set it up with dyrectorio.
headerAlt: Blog post header reading Calendly Alternative Cal.com in Self Hosted category.
---

**Flexibility is the word when it comes to self-hosting event schedulers compared to their SaaS alternatives besides the usual benefits of self-hosting. In this blog post, you can find out how to setup Cal.com, an open-source event scheduler alternative to Calendly, and more importantly, why you should consider it.**

---

First of all, why would you self-host an event scheduler application?

There are many SaaS alternatives, like Calendly, Doodle, Microsoft Bookings and so on. Oftentimes, these options have some restrictions baked in that makes them slightly off to your use case. Event scheduling has a single purpose – to arrange meetings fast and efficiently – but many times, the way users should be able to book a meeting differs. Open-source alternatives, like Cal.com offer the flexibility needed in this area.

So, the initial question should rather be: why shouldn’t you self-host an event scheduler application?

## Advantages and Challenges of Self-Hosting an Event Scheduler

Pros of self-hosting an event scheduler differs for individual users and organizations.

Individual users might prefer to store the data themselves to not rely on any third-parties. From an organizational point of view, the cons of using a SaaS event scheduler begin with its costs. The costs of self-hosting an open-source alternative is very likely small compared to a subscription plan based on the seats of an organization.

On top of all of these, there’s room for customizability for integrations, embedding the event scheduler into the website of the user and so on. Solid arguments can be made if this is necessary when there are household names of event scheduling, like Calendly. Open-source software enthusiast might prefer to self-host Cal.com, which is a Calendly alternative to avoid relying on third-parties in the event scheduling process when it comes to avoiding outages and data privacy.

This freedom comes with the common challenges of self-hosting, including maintenance and operations costs.

## Setting up Self-Hosted Cal.com with dyrectorio

As Cal.com users ourselves, we came across the Hacker News discussion where lots of users discussed how self-hosting the Calendly-alternative works. So, we decided to turn Cal.com into a template on dyrectorio for a faster, easier setup. Below you can see how to set it up to a server you use without getting into the details of setting up a VPS and a domain.

After signing in to dyrectorio, select the Templates section on the right side. Select Cal.com from the templates listed by clicking `Add`.

![](dyrectorio-cal-com-self-hosting-01.png)

You’re able to specify a name and a description to the Cal.com stack you plan to deploy. Depending on if you plan to roll out the latest version of Cal.com, you can pick if you want to deploy Cal.com as a simple or a complex type of product. More details on the differences **[here](https://docs.dyrector.io/tutorials/create-your-product)**, but a simple product will likely do for most users.

Click `Add` to save Cal.com as a product.

![](dyrectorio-cal-com-self-hosting-02.png)

On the next screen, click `Add deployment`.

![](dyrectorio-cal-com-self-hosting-03.png)

Select the node and click `Add`.

![](dyrectorio-cal-com-self-hosting-04.png)

Click on the gear icon next to each image for configuration settings. On the configuration screen, specify the following variables with your domain:

- **cal-db**
    - `POSTGRES_PASSWORD` has to be specified.
- **cal-com**
    - `DATABASE_URL` needs to contain `POSTGRES_PASSWORD`'s value in `postgresql://cal-user:${POSTGRES_PASSWORD}@cal-db:5432/cal-db` for cal-db.
    - `NEXTAUTH_SECRET` and `CALENDSO_ENCRYPTION_KEY` needs to be specified. We recommend OpenSSL to generate these secrets.
    - If you have a node with Traefik enabled you can use `http://cal.localhost` (or any other domain setup in the ingress settings) by setting `NEXT_PUBLIC_WEBAPP_URL` to the public URL.

If you’d like to access your Cal.com from a specific domain, then the follow the configuration setting instructions below: 

- `name`, `host` under Ingress section. `name` is the first part of the domain, host is the second. Example: if your domain is `booking.example.com`, then `name = booking`, `host = example.com`. 

- `DOMAIN` under Environments section. Example: if your domain is `booking.example.com`, then `DOMAIN` key will be `booking.example.com`. 

On the configuration settings screen, click `Back` to save all configuration settings.

![](dyrectorio-cal-com-self-hosting-06.png)

On the next screen, click `Deploy` to setup Cal.com.

![](dyrectorio-cal-com-self-hosting-07.png)

If you've got the image downloaded already, the deployment should be successful in a few minutes, as seen in the screenshot below. For first time deployments, the image download and extraction process should take a few minutes, since the image is about 5 GBs.

![](dyrectorio-cal-com-self-hosting-08.png)

A few minutes after deployment, the container will charge up. The result look something like this.

![](dyrectorio-cal-com-self-hosting-09.png)

After the deployment is successful, you’re able to embed your self-hosted Cal.com to your website, as documented **[here](https://developer.cal.com/embed/set-up-your-embed)**.

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrector.io). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.
