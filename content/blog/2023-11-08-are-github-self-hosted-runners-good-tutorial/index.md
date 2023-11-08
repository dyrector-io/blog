---
title: "Why You Should Self-Host GitHub Runners – Or Stay Away from It"
date: "2023-11-08"
seoTitle: "Why You Should Self-Host GitHub Runners – Or Stay Away from It | dyrector.io"
seoDescription: Optimize your CI/CD with our insights on self-hosted GitHub Runners. Discover speed, control, and setup tips for efficient development workflows.
description: Turn GitHub Actions into the sidekick your project needs, not the sidekick it deserves by self-hosting runners. Find out how to decide if you need self-hosted GitHub runners and how to get started.
tags: ["GitHub", "SelfHosted"]
cover: "./dyrector-io-self-hosted-github-runners-cover.png"
header: "./dyrector-io-self-hosted-github-runners-header.png"
coverAlt: Drawn picture of a man standing next to a server.
headerAlt: Header picture of a blog post titled Why you should self-host GitHub runners.
---

**GitHub Actions is the Alfred to your Batman. When you don’t feel like doing something or simply don’t have the capacity to handle various tasks, you can rely on GitHub Actions to automate workflows. You can take GitHub Actions to the next level by self-hosting runners, though. But should you? Let’s find out!**

---

## Why Self-Hosted GitHub Runners Are Beneficial

We’ve been managing dyrector.io’s code on GitHub for more than a year now. One thing we’ve always struggled with was slow GitHub Actions workflows. Here’s why we’ve been contemplating switching to self-hosting our GitHub Runners.

### Speed
The default GitHub runner takes longer to execute as it initializes an ephemeral runner for each job in a workflow from scratch. This method, chosen by GitHub for its simplicity and security, has its merits. Compared to this, self-hosted runners remain active, bypassing the initialization phase for every job, thus providing quicker execution. This continuous availability demands proper management to ensure subsequent runs are not interfered with by remnants from previous executions.

### Control 
GitHub-hosted runners run on Ubuntu with a 2-core CPU, limiting parallel job executions to four. In a self-hosted scenario, we have the liberty to choose other OSes. We opted for Rocky Linux over Ubuntu for its open-source, enterprise-grade, and 100% Red Hat compatibility. This choice also allowed us to define the VM's hardware parameters like CPU, memory and disk type/size. However, this freedom comes at the cost of increased maintenance overhead. 
  
### Debugging / Monitoring 
Debugging is more challenging on GitHub-hosted runners as only error messages and logs are retained. In the meantime, self-hosted runners keep everything in the “_work” and “_diag” directories, allowing real-time monitoring to understand precisely what is happening and the resources being consumed, as the running VM is under our control. 

As we look into the future and explore opportunities for further improvement: 

- Writing in YAML, especially for CI/CD purposes, often necessitates additional scripts to handle various build and runtime conditions in a workflow. This can result in a fragmented view of the process.
- Alternatively, or in addition, leveraging the power of **[Dagger](https://dagger.io/)** CI/CD could offer a more streamlined approach to creating workflows. Dagger CI/CD allows you to use real programming languages through the Dagger SDK.
- For example, we have chosen to use the Dagger Go SDK, which enables the creation of unified workflows. These workflows can run seamlessly, whether it's locally, on GitHub-hosted runners, self-hosted runners, or other CI/CD frameworks, with minimal or no need for significant modifications. This approach entirely avoids the need for extensive YAML configurations, providing a more efficient and flexible way to manage your CI/CD pipelines.

## Few Reasons Why You Shouldn’t Self-Host Runners

### Convenience
The default GitHub hosted runner functionality is free and comes with autoscaling if we look at the submitted parallel pull requests, so you don't have to do anything for them, they are simply there and doing their job. We obviously lose this default behavior if we go on the self-hosted route.

### Setup/Maintenance
The initial setup requires a learning curve, and maintaining the runners can demand a fair share of time. It is not so much the setting of the runners themselves, but rather the maintenance, updating, securing the VM(s) and the correct initial setting of the workflow to manage the clean up and teardown side steps for every job and job step, if necessary.

### Security Concerns
Self-hosted runners may expose your environment to potential security risks if not configured and managed properly. Something even GitHub recommends in its official **[docs](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)** is to use self-hosted runners with private repositories. Here's a more detailed **[description](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)** about security measures for GitHub runners.

## Setting Up Self-Hosted Runners

Ensure your system meets GitHub's minimum requirements, which include:
- 2-core CPU
- 7 GB RAM
- 14 GB SSD storage

We used a larger machine with the following specifications:
- 16 vCPUs
- 32 GiB memory
- Initially, 16 GB SSD (later upgraded to 64 GB)

The upgrade was necessary due to the combined temporary space needs of our code, node.js, and about 10 docker containers, including a playwright container for testing. Our runners resided on an additional data disk, leaving about 8 GB free on the system disk.

Instead of using multiple small VMs with one runner each, we chose to use one large VM hosting several parallel runners. This approach minimizes VM maintenance overhead and is designed to efficiently handle multiple parallel GitHub pull requests.

Future scaling is straightforward as setting up additional runners and/or VMs is not complicated; runners distribute workflow jobs based on common labels regardless of their VM location.

We set up our self-hosted runners with these steps, here we will show actions-runner-001, but it was done in a similar way for our runners 002, 003 and so on.

### Step 1: Create a new runner

At your GitHub repository’s Settings, in the left sidebar click Actions, then click Runners and finally click New self-hosted runner. Select the OS image and architecture of your self-hosted runner machine. In our case it is Linux and x64.

### Step 2: Download the runner installer

```
# Create a folder
$ mkdir actions-runner-001 && cd actions-runner-001
# Download the latest runner package
$ curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz
# Optional: Validate the hash
# On Rocky Linux you may need to install shasum once for this validation
$ sudo dnf update
$ sudo dnf install -y perl-Digest-SHA
$ echo "29fc8cf2dab4c195bb147384e7e2c94cfd4d4022c793b346a6175435265aa278  actions-runner-linux-x64-2.311.0.tar.gz" | shasum -a 256 –c
# Extract the installer
$ tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz
```

### Step 3: Install runner dependencies _(if needed)_

We only need to do this step once per VM, not per runner. You can skip this step if your OS already contains these dependencies, but for Rocky Linux 9.2 it was necessary.

```
# Install dependencies (on Rocky Linux dotnet core 6 was missing by default) 
$ sudo ./bin/installdependencies.sh
```

We also installed node.js, go and docker on our VM for our workflow, but these are not runner dependencies, so we will not go into detail about that here.

### Step 4: Configure the runner

```
# Create the runner and configure it
$ ./config.sh --url https://github.com/dyrector-io/dyrectorio --token <RUNNER_TOKEN>
```

During the configuration process, you can keep most settings at their default values, but we chose to make our runners easily identifiable by giving them unique names and adding extra labels. Initially, the configuration script provides a common name, but our objective was to test multiple runners on a single VM.

By default, a runner is tagged with three labels for Linux x64: self-hosted, Linux, and X64. However, you have the flexibility to specify additional labels during the initial configuration or later on the GitHub repository website. Unlike the default labels, you can add or remove these custom labels at any time. These labels come in handy for targeting specific groups of runners or individual runners within your workflow.

### Step 5: Set pre-job script

Pre-job script is not mandatory if you do not want to use it, but we need it. 
In the runner directory just create a .env file with this content:
 
`ACTIONS_RUNNER_HOOK_JOB_STARTED=pre-job-script.sh`

And in the pre-job bash script file you can use your additional VM specific logic which will run before every job. Important to write “exit 0” at the end of the script file, because this means the script run without errors – otherwise or if you return any other value the runner will skip this job. You can also use this to your advantage for pre checks.

### Step 6: Start the runner

You can start the runner with its run script (`$ ./run.sh`), but we want to run it as a service so first need to install the service and on Rocky Linux we also need to set the SELinux security context for the runsvc.sh file to ensure it operates correctly within the SELinux security policy (otherwise it will be blocked). We only need to set SELinux context and service install once.

```
# Set SELinux context for the runsvc script to s0 (standard security level)
$ sudo chcon system_u:object_r:usr_t:s0 runsvc.sh
# Install the runner as a service
$ sudo ./svc.sh install
``` 
 
Now we can use the service with its start, stop, status commands.

```
# Start the runner service
$ sudo ./svc.sh start
``` 

After completing these steps, the runner and its status are now listed under "Runners" of the GitHub repository.

### Step 7: Execute a workflow on self-hosted runners 

In your workflow file, use the following YAML for each job, adjusting the label(s) as per your runner configuration:

`runs-on: self-hosted`

## Security Tips

Additional security measures for our public open-source repository: 
- We use CODEOWNERS file for our repository.
- In the repository settings, we have the "Require approval for all outside collaborators" option enabled instead of the default "Require approval for first-time contributors".
- Before allowing any external pull requests to run, we check if any workflow files have been modified! (It is easy to spot if anything appears in .github/workflows, without much approval overhead)
- We use our self-hosted GitHub runner with an isolated Azure VM in its own resource group.
- We take care of updating the runner VM's OS to ensure it is always up to date from a security perspective.
- We run external pull requests on a GitHub runner, while we run our own pull requests on our self-hosted runner. This is determined by a necessary pre-job in our workflows, based on the submitter's identity, assigning the appropriate "runs-on" label to the subsequent jobs.
- In the runner's “_diag“ and “_work“ directories, we can review diagnostic logs for both the workflow runs and the runner itself, as well as the checked-out code in the "workflows private" directory."

## Conclusion

Self-hosted GitHub runners offer more freedom and level of control that can significantly boost the efficiency of your development workflow. However, they come with the overhead of setup, maintenance, and potential security concerns. Assessing your project’s needs and your team’s capacity to manage self-hosted runners is crucial before diving in. With proper setup and management, self-hosted runners can indeed be a valuable asset to your development process.

---

_This blogpost was written by the team of [dyrector.io](https://dyrectorio.com). dyrector.io is an open-source continuous delivery & deployment platform with version management._

**Support us with a star on [GitHub](https://github.com/dyrector-io/dyrectorio/).**
