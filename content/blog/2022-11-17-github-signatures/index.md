---
title: "Please, Sign Your Commits on GitHub"
date: "2022-11-17"
seoTitle: "Please, Sign Your Commits on GitHub | dyrector.io"
seoDescription: Commit signatures on GitHub help you validate your changes to the code to maintainers when you open a pull request. Here's how you can sign them.
description: The same way you wouldn't download an application from an untrusted source, you wouldn't approve a pull request with unsigned commits on GitHub. Here's how you can sign your commits.
tags: ["Open-source, GitHub"]
cover: "./dyrector-io-github-commit-signatures.png"
header: "./dyrector-io-github-commit-signature-verification-gpg.png"
coverAlt: "Blog post cover reading: It's not that hard to sign your commits in one of the 3 possible ways on GitHub, in commit signatures topic with illustration of a man standing before a lock."
headerAlt: "Blog post header reading: It's not that hard to sign your commits in one of the 3 possible ways on GitHub, in commit signatures topic"
---

**You wouldn’t approve pull requests with unsigned commits on GitHub, the same way you wouldn’t steal a house. So why would you open a pull request without signed commits?**

---

Commit signatures on GitHub might not seem like that big of a deal but open-source contributors can’t overlook this seemingly tiny detail when they create pull requests. In this blog post, we’ll detail why commit signatures are critical to maintain trust between contributors and maintainers, and how users can sign their commits.

## Why Commit Signatures Are Needed

Trust makes open-source software go round. After all, literally anyone can contribute to any open-source project out there. Maintainers need to make sure that the contributors are real and mean no harm to the code.

Signing your commits validates that you’re responsible for the changes made to the code on your account. Depending on whether you enabled vigilant mode on GitHub, there are 2 or 3 statuses of signatures. These are the statuses without vigilant mode:

- **Verified:** The commit is signed and verified.

- **Unverified:** The commit is signed but not verified.

Vigilant mode provides 3 statuses to your commit signatures:

- **Verified:** The commit is signed by the only author with vigilant mode enabled and the signature is successfully verified.

- **Partially verified:** The commit is signed, and the signature is verified but the commit has an author who’s not a committer and/or doesn’t have vigilant mode enabled.

- **Unverified:** The commit is either signed but the signature can’t be verified, or the commit isn’t signed. In the latter case, the committer or an author has vigilant mode signed.

These statuses enable maintainers to decide verify the origins of the commit with higher confidence. You can find out **[here](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits)** how to enable vigilant mode on GitHub.

## How to Sign Commits

You can validate your commits by using an SSH, a GPG or an S/MIME key. While SSH and GPG are mostly suitable for individual users, S/MIME is mainly useful for bigger teams and organizations.

SSH and GPG work similarly. They both use asymmetric encryption, meaning the keys come in pairs, a public and a private one. Out of the two, you can use the public one for encryption and the private one for decryption. In the case of commit signatures, you sign using your private key, so others can verify it using your public key. Remember that the private key should never be shared with anyone.

### SSH keys

Of all the keys, SSH is the easiest to set up, but it doesn’t have as many functions as GPG. For example, SSH will only grant you temporary verification to the repository you commit to. The cool thing about SSH is you can use a single key to sign your commits and push them to the repo. 

Here’s how you can sign commits using an SSH key: 

- Step 1: Generate your SSH key on your machine

- Step 2: Add it to your GitHub account

- Step 3: Tell Git about your SSH key

- Step 4: Sign commits

To be able to recover your SSH key, you can generate pass phrases which should never be shared with anyone and stored securely. These steps can alter based on your local OS, so for further details, check GitHub’s **[documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)**.

### GPG keys

GPG is a bit more difficult to setup than SSH, but on top of being more secure than SSH, it has a lot more features. GPG uses OpenPGP standard to create keys. Among many things GPG and its technology can be used to authenticate SSH, encrypt messages, and sign commits on GitHub, for example. GPG is a very complex technology, its capabilities to detail are beyond the scope of this blog post, but you can find out more **[here](https://www.oliverspryn.com/blog/the-handbook-to-gpg-and-git)** and check uses of GPG encryption for Linux kernel development, and mixed uses in other cases in **[Kubernetes’](https://github.com/kubernetes/kubernetes/commits/master)**, **[Apache’s EChart’s](https://github.com/apache/echarts/commits/master)**, and **[Vercel’s Next.js’](https://github.com/vercel/next.js/commits/canary)** development. 

This is how you can sign commits with GPG keys: 

- Step 1: Generate your GPG key on your machine

- Step 2: Add it to your GitHub account

- Step 3: Tell Git about your GPG key

- Step 4: Sign commits

These steps can alter based on your local OS, so for further details, check GitHub’s **[documentation](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)**.

### S/MIME encryption

Mostly used by organizations to sign emails, S/MIME can also be used to sign commits. From a user’s point of view, this is easier to set up since the X.509 keys are usually issued by their organizations.

Set up your S/MIME encrypted key like this:

- Step 1: Tell Git about your S/MIME key

- Step 2: Sign commits

## Summary

Signatures are a key element of maintaining trust between open-source maintainers and contributors. If you’re a first-time contributor, looking for projects to contribute to check our **[open issues](https://github.com/dyrector-io/dyrectorio/issues)** on GitHub at dyrector.io’s repository.

---

_This blogpost was written by the team of specialists at [dyrector.io](https://dyrector.io). dyrector.io is an open-source container management platform._

**Find our project on [GitHub](https://github.com/dyrector-io/dyrectorio/). Read our [docs](https://docs.dyrector.io/) to learn more about our platform. Any contribution is welcome!**

To stay updated about our product follow us on [Twitter](https://twitter.com/dyrectorio), [Instagram](https://www.instagram.com/dyrectorio/) and [LinkedIn](https://www.linkedin.com/company/dyrectorio/).

Join our public [Discord](https://discord.gg/hMyT9cbYFD) server to discuss DevOps.