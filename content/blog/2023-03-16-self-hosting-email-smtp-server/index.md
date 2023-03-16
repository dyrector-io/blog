---
title: "You Deserve Better Than Email Self-Hosting"
date: "2023-03-16"
seoTitle: "You Deserve Better Than Email Self-Hosting | dyrectorio"
seoDescription: There's a whole universe of things more enjoyable than email self-hosting. But if you'd still like to host an email server, here's all you need to know.
description: There's a whole universe of things more enjoyable than email self-hosting. But if you'd still like to host an email server, here's all you need to know.
tags: ["SelfHosting", "OpenSource", "Email"]
cover: "./dyrector-io-email-smtp-self-hosting-cover.png"
header: "./dyrector-io-email-smtp-self-hosting-header.png"
coverAlt: Blog post cover reading In theory, email self-hosting should be amazing. But there are technical and business issues that make it so difficult we can't tell you enough times to never do it.
headerAlt: Blog post header reading You Deserve Better Than Email Self-Hosting.
---

**Email self-hosting sounds great in theory. Due to technical aspects of emailing, and spam whitelists, it’s not something we'd suggest anyone to do. But if you’d really like to host an email server, here’s what you need to deal with.**

---

“A definitive don't.” This is the unofficial advice from dyrectorio’s engineering team when it comes to email self-hosting. At the root of this defiance there are two key factors: email protocols and spam-filtering.

## Email Protocols in a Nutshell

There are 4 email protocols. SMTP – Simple Mail Transfer Protocol – is designed for email sending. POP – Post Office Protocol – and IMAP – Internet Message Access Protocol – are both made for receiving emails but the latter allows users to access messages from multiple devices and locations. The 4th one is MIME – Multipurpose Internet Mail Extensions –, that enables users to include images, videos, and so on in a standardized format.

Before self-hosting an email server, users need to consider if they have the level of expertise with these protocols. On a more positive note, there doesn't seem to be a whole movement behind creating new email protocols, meaning users don't need to keep their email protocol knowledge up-to-date. Getting a grasp on all of the technologies interacting with each other can be a big enough mission.

## Brief Overview of Google & Emailing

Emailing isn't a new technology at all, and it's the de facto technology of business communication. As a vital part of organizations’ everyday lives, it's been with us since companies began to trust emailing with transacting official data to keep track of what's happening.

Then came Google. As the business entity that crawls the internet at the highest volume, they have a pretty good idea of what's valuable content and not. This would become a game changer of spam filtering. It's pretty cool to not get spam. The awesomeness turns into a headache when you plan to host your own email server and it happens to share IP with the sender of spam that led your SMTP server address on the black list of Google. You can get it whitelisted but life would be easier if users would never have to deal with this.

Considering that an unknown but nevertheless large portion of email communication takes place with the participation of Google due to Gmail, it's safe to say that it's a huge vulnerability that quickly sinks any self-hosting efforts when it comes to SMTP self-hosting.

## A Hybrid Solution for the Stubborn Self-Hosting Enjoyers

As already mentioned, there are different protocols created for both receiving and sending emails. This creates room to work around spam blacklists to spare the trouble of whitelisting your IP. It requires giving up self-hosting partially but it’s not a bad deal considering that you're still going to be able to keep your incoming emails secure.

The trick is to outsource SMTP to a trusted IP address. In this scenario, the trusted IP address' maintainer still won't have access to the data you're sending. It'll only act as a sender on behalf of you. At the same time, you can receive emails on a self-hosted POP or IMAP server.

This solution is an obvious shortcut compared to warming your IP. IP warming is the practice of giving a good impression to ISPs. There are resources on this topic, but the point is to gradually send an increasing number of emails with as little bounce rate as possible.

## Fine, If You Still Want to Self-Host an Email Server...

There are many open-source email servers that are complex enough to enable sending and retrieving emails. One of them is Maddy, an SMTP and IMAP server written in Golang. See how you can set it up **[here](https://maddy.email/)**. **[Mailu](https://mailu.io/1.9/)** is another one we recommend. And obviously, **[Docker Mailserver](https://artifacthub.io/packages/helm/docker-mailserver/docker-mailserver)** is a great choice. If you’re looking for an IMAP server to receive emails, **[Dovecot](https://www.dovecot.org/)** is worth looking into.

For testing purposes, we use **[Mailslurper](https://www.mailslurper.com/)**, but **[MailHog](https://github.com/mailhog/MailHog)** is another good SMTP testing tool.

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrector.io). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.
