---
title: 4 Pros of CI/CD Pipelines – And 3 Things to Look Out For 
date: "2022-01-25"
seoTitle: Pros and Unexpected Challenges of CI/CD
seoDescription: Continuous integration and delivery, also known as CI/CD can boost your teams efficiency while reducing money. But it's not a one-and-done solution.
description: Continuous integration and delivery is a substantial practice of DevOps methodology, even though only 38% of companies working under it have adopted CI/CD pipelines by 2020. Find out how it impacts efficiency and what challenges it may bring.
tags: ["CI/CD"]
cover: "./dyrectorio-cicd-pipelines-challenges-and-advantages.jpg"
header: "./dyrectorio-continuous-interation-continuous-delivery-cicd-pipelines.jpg"
coverAlt: "One of the most important advantages of CI/CD pipelines is that developers can focus on development instead of testing and deployment."
headerAlt: "Only in 2020 companies burned $260 billion in the United States due to unsuccessful development. Continuous integration and continuous delivery can decrease that number."
---

**CI/CD pipelines are no silver bullet, but they can be the tool that solves your problems. Increasing efficiency by thorough testing and automating the mundane steps of software deployment is in the interest of developers. But just like the software that devs develop, the CI/CD practices require attention after adoption.**

---

The existence of CI/CD pipelines roots from the pursuit of excluding human factors of tasks that can be automated. There are two major reasons for this: 

 - People change when robots are constant – if everything goes as planned. 
 - Doing tasks repeatedly is boring, and nobody likes to do boring stuff in 2022. 

Organizations began to adopt CI/CD pipelines to avoid failures due to human behavior and to save time, a resource far scarcer than money. The greatest benefit of using pipelines business-wise is that if they’re effective they lead to cost reduction.

A [survey](https://www.zdnet.com/article/gitlabs-take-on-the-current-state-of-devops/) made by GitLab in 2020 found that only 38% of organizations that work under DevOps methodology have adopted CI/CD pipelines. The participants responded that CI/CD pipelines lead to shorter time-to-market, higher quality software and more transparency within the organization. Another important consequence of CI/CD adoption was the increase of employee satisfaction – which we addressed above.

**Another [study](https://www.theee.ai/2021/01/06/6838-poor-software-quality-cost-the-usd-2-08-tn-in-2020/) showed that in 2020 unsuccessful software developments cost $260 billion, only in the US.** This number can be significantly reduced with a broader level of CI/CD adoption. 

## What is a CI/CD pipeline? 

CI/CD stands for continuous integration and continuous delivery. 

Continuous integration provides an efficient way of failing early. The developers commit the code to the repository where automated tasks examine the dependencies of the new elements and give you detailed feedback on what needs to be adjusted. 

After the newly created code passes the tests, it goes through automated steps of software release which is known as continuous delivery. At this stage the software is in a repository ready to be deployed to an environment where users can get access to it. 

The premise of CI/CD is to do work, test and resolve errors in small batches, rather than large portions. This way errors can be detected earlier. Testing later can and most likely will cause complications, resulting in wasting time and money. *The DevOps terminology for this paradigm is called “left shift.”*

## The advantages of CI/CD 

### #1 They do the dirty work 

A substantial part of sci-fi literature and cinema is based on the premise of people building robots to complete tasks they don’t want to or can’t do efficiently. 

Both integration and delivery can be done far more efficiently with robots than humans. Automated steps can be faster and less risky. Which leads to the next advantage. 

### #2 Developers can focus on development 

While the CI/CD pipeline is taking care of business, developers can do what they’re supposed to do: solve problems and build things people can use. 

While integration and delivery are extremely important parts of software development, they’re often repeatable tasks. It makes sense to automate them to save time and money. There’s a reason why big-tech companies deploy more often than how many seconds are in a year.

### #3 Testing is more efficient 

This sentence might take a second for you to read. A machine can “read” this entire blogpost in a fraction of a second. It’s evident that the machine can point out weaknesses or problems with the software with higher efficiency. And at the same time, they can create a log of said problems which further explain what happened. This way developers can understand why the application doesn’t work and what needs to be done to fix it. 

### #4 Maintainability

There are situations when – despite the successful testing – UX problems occur after deployment. For whatever reason, you need to roll back that version, preferably without downtime.

CI/CD pipelines can reinstate the previous version which worked properly. This way your devs can figure out the problem and fix it while the users have access to the previous release.

Companies often try to test the application's performance in a production environment by pushing the release to a few end users. *This approach is called "shift right."*

## CI/CD pipelines aren’t deus ex machinas 

The concept of CI/CD pipelines solving problems at a finger snap should belong in the group of mythical creatures between centaurs and phoenixes. As with everything DevOps related, there are both technical and cultural aspects of CI/CD.

The pipelines, when set up properly, can lead to higher efficiency and cost reduction. But when done wrong they can bring many problems. Here are the challenges you need to look out for.

### Challenge #1: The pipeline is slow

The most relevant benchmark of pipeline performance is whether it’s faster than manual work or not. There are many reasons why CI/CD can make you slower – but the point is, when the automated steps are slower than your staff, you need to deal with it.

If CI/CD pipelines have a negative impact on your team’s efficiency, you have to examine data and the steps that make up the pipeline. Maybe there are unnecessary steps that can be shaved off the process.

### Challenge #2: Testing is unreliable

One of the most important aspects of CI/CD is to figure out how the new piece of software will impact the functionality of the application. Testing practices with inaccurate results is like skydiving without a parachute. And, as we’ve detailed in our blog post about deployments, as complexity is growing, finding flaws in dependencies early saves time and money.

Applying the fitting processes for testing is crucial to maintain a level of user experience that serves your organization’s business goals. Therefore, you should never underestimate the value of top-notch and thorough testing.

### Challenge #3: Prioritizing efficiency over security

Arguments can be made about which one is more important – our bet is on security while sustaining a high level of efficiency. Maintaining the pipeline – using updated versions of used tools and not granting unnecessary security roles, for example – are the best way to keep your software secure. But it needs constant efforts to keep the required level of safety.

## Summary

CI/CD pipelines shouldn’t be treated as a one-and-done type of practical venture. Integrating the pipeline into your process can bring great value. But with great value comes great importance of maintenance.

***Resources:***

- *[How Agile Teams Shorten SDLC Using DevTestOps](https://hackernoon.com/how-agile-teams-shorten-sdlc-using-devtestops) - Hackernoon*
- *[The CI/CD Model Development Process](https://hackernoon.com/the-cicd-model-development-process-862a37tw) - Hackernoon*
- *[4 Common Problems With Continuous Integration And Deployment And How To Avoid Them](https://www.coherentsolutions.com/blog/4-common-problems-with-continuous-integration-and-deployment-and-how-to-avoid-them/) - Coherent Solutions*
- *[5 Benefits of Implementing a CI/CD Pipeline](https://www.ranorex.com/blog/5-benefits-ci-cd-pipeline/) - Ranorex*

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrector.io). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.