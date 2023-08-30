---
title: "How to Manage Identity & Authorization with Kratos"
date: "2023-08-30"
seoTitle: "How to Manage Identity & Authorization with Kratos | dyrector.io"
seoDescription: Kratos is an open-source, API-first authorization tool. Here's how you can utilize it for your application to provide great user experience.
description: Kratos is an open-source, API-first authorization tool. Here's how you can utilize it for your application to provide great user experience.
tags: ["OpenSource", "Golang"]
cover: "./dyrector-io-automate-deployments-github-actions.png"
header: "./dyrector-io-continuous-delivey-github-actions.png"
coverAlt: Drawn picture of a robot with various signs and a laptop around it.
headerAlt: Header picture of a blog post titled How to Automate with GitHub Actions in CD platform category.
---

**Kratos is an API-first authentication tool written in Go. It offers the most common authentication capabilities, and also supports OAuth, which allows users to sign in with their social media accounts. Here’s how you can utilize Kratos.**

---

## Introduction to Authorization & Kratos

Authorization is the process of giving a user access to resources or functions. **[Kratos](https://github.com/ory/kratos)** is an API-first open-source identity, user & authorization management tool.

Kratos offers the usual authorization capabilities, such as:

- **Login & Registration:** self-service account creation and sign-in.
- **Multi-factor authentication (MFA/2FA):** supports OAuth (RFC 6238, RFC 4226).
- **Account verification & recovery:** email address verification and password recovery.
- **Profile management:** users can edit passwords, usernames, linked profiles, etc.
- **API capabilities for admins:** account import, update, and deletion via API calls.

## Why We Went with Kratos

We were looking for authorization solutions in Go as we made the decision to develop key components of the platform in the language, as described in this **[blog post](https://blog.dyrector.io/2022-12-05-ups-and-downs-of-golang/)**.

It took us a little time to find Kratos by stumbling across **[Fosite](https://github.com/ory/fosite)**, so we decided to use it instead of creating our own solution. The API-first approach allowed us to be able to use Kratos completely tailored to our use, including our own frontend and database. This aligns with our preference to host solutions for ourselves, instead of relying on 3rd party applications.

Some of the additional advantages of Kratos is the data breach password checker, which we don’t have to maintain to offer a secure use to our users. Another benefit of picking Kratos was the support of social accounts, which allows our users to sign in with their GitHub, GitLab, Google or Azure AD.

A long-term aspect of our choice to go with Kratos was that the Ory ecosystem has a wide range of products for identity management, authorization and such. It’s fair to say that they’re world class at what they’re doing, and when we’ll scale dyrector.io, we’ll know where to look for solutions. Keto for role management, Oathkeeper for access control are services we have our eyes on for future use already.

**A few more advantages of using Kratos:**
- Everything can be configured with environment variables, as well as config files.
- Kratos manages migrations well.
- There’s HTTP Client for the API.
- API is RESTful and easy to understand.

## How we use Kratos

Since Kratos has dedicated flows for each functionality, such as login and registration, we were able to obtain new or existing flows from Kratos with HTTP requests during Server-Side Rendering.

At the same time, on the client’s side, we get a list of inputs we have to display, such as email address and name, from the user and update the current flow using the data. When an error occurs, for example, the user enters an invalid email address, or adds a password that matches an entry in the password checker of Kratos, we re-render the page with an error message.

When the flow turns successful, we forward the cookie we received from Kratos or redirect the user to it.

Kratos supports various databases, including PostgreSQL, as we’re familiar with it. For local setup and testing, we use Mailslurper, which is an open-source SMTP server written in Go.

## Support Open-Source With a Star

Make sure to support open-source projects like **[Kratos](https://github.com/ory/kratos)** or dyrector.io with a star at the link below.

- **[https://github.com/dyrector-io/dyrectorio](https://github.com/dyrector-io/dyrectorio)**

---

_This blogpost was written by the team of [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source continuous delivery & deployment platform with version management._

**Support us with a star on [GitHub](https://github.com/dyrector-io/dyrectorio/).**
