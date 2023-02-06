---
title: "Products vs. Versions: How to Use Them on dyrector.io"
date: "2022-09-01"
seoTitle: "Products vs. Versions: How to Use Them on dyrector.io | dyrector.io"
seoDescription: Products and Versions are very similar concepts within dyrector.io but one of the represents business needs and the other is on the technical side.
description: While they're similar in some ways, Products and Versions serve different needs. Creating a version for your product allows you to distribute and test different variants of your Products.
tags: ["Platform"]
cover: "./dyrector-io-products-versions-use-cases.png"
header: "./dyrector-io-products-versions-best-practices.png"
coverAlt: "Versions help you to distribute and test different variants of your Products."
headerAlt: "There are two types of Products that come with at least one version. There's one type that comes without any versions."
---

**dyrector.io's main use case is to manage app releases and their configurations in Kubernetes and Docker. This is why we created Products and Versions. See how you can set up your application ready for deployment in under a minute using Products and Versions.**

---

As their names indicate, Products exist for business purposes, while Versions are rather technical concepts within dyrector.io. Products are the applications you distribute to your clients and users through the platform, therefore it’s a concept on the business side of software development. On the technical side, Versions are unique variants of your Product, but chances are you’re already familiar with software versioning.

## Simple & Complex Product Types

There are two types of Products you can create: Simple and Complex.

### Simple Products

Simple products don’t have any versions, they don’t have any relation to other Products or Versions. This means there’s no way to roll them back. They’re ideal for testing. Below you can see how you can create a Simple Product in less than a minute.

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/AnchoredIdleBlackrhino' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


You can deploy them to a test environment through dyrector.io right away without any specialist present. In the case of self-hosted dyrector.io, the test node will be the environment you use to run the platform.

### Complex Products

The key difference between Simple and Complex Products is that the ladder comes with a version every time.

There are two types of Complex Products: Rolling and Incremental Versions.

- **Incremental Version:** The most significant difference between Incremental Versions and any other type of Product is that they’re hierarchical to other Versions within the same Product. Incremental Versions are ideal for production, when your application’s functionality has been validated through various tests. Rollbacks and defaulting apply to Incremental Versions, so when you set an Incremental Version as default, future versions will inherit images and configurations and you won't have to add them repeatedly. Below you can see how you can create an Incremental Version to a Complex Product.

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/RaggedPhonyImperialeagle' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


- **Rolling Version:** It consists of one rolling version your teammates can use for continuous delivery, but it can be rolled back. Below you can see how you can create a Rolling Version.

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/EmbarrassedReflectingLamprey' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>


Complex Products can have both Rolling and Incremental Versions, so you can maintain versions of the same business product for different technical purposes.

![The different types of Products and their Versions serve different purposes.](./dyrector-io-product-types-and-versions.png)

## Why should you treat Versions and Products differently?

Each type has a different purpose: what’s ideal for another usage, for example Simple Products for testing, might not be good for the other.

The most common use case of Products on dyrector.io is to create a Simple Product for testing, and either a Rolling Version for CD when users need access to just the latest functioning version or an Incremental Version when your clients need completely different versions of the app you developed for regulatory, business or technical reasons.

By our experience, a less common, but significantly valuable use case of having different versions of your product is when your team develops an extremely complex business application consisting of dozens of images with altering tags that need to be distributed to different clients. Not only Product assembly but configuration management can be all over the place in this case. For this reason, our team is working on bundled configuration management, which will allow users to templatize their variables and secrets, so they won’t have to be specified and assigned repeatedly.

To find out how to create Products and Versions, head to our [documentation](https://docs.dyrector.io/tutorials/create-your-product).

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrector.io). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.