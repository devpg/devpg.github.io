---
layout: post
title:  "What can we learn from 37signal's cloud repatriation?"
type: Article
---

## TL;DR ##
37signals successfully showed that cloud repatriation is feasible and has the potential for huge cost saving. Is this the way to go? No, it's definitely not for every company but for some it can be a valid option. It "just" requires the right goal and a supportive context.

---

In 2023 37signals left the cloud. They successfully repatriated their cloud services to on-premise servers, saving a significant amount of money without compromising on performance, reliability, or security. AND they achieved this while retaining their existing team, disproving the notion that cloud services significantly reduce operational staff requirements. Absolutely astonishing!
The entire journey is quite well summarized here (including the most frequently asked questions). [[1]](#1)

So what does this mean for other companies? 

## Shall every company repatriate cloud services back to on-premise? ##

The specific answer to this boils down to <ins>two questions</ins>.

### #1: What's your goal? ###
This question is of key importance. It defines your focus and the single piece you want to achieve. In regard to 37signal, their only goal was cost savings. But it also could have been new products, new features or technical aspects like performance or resilience to name a few.

It's important to have a clear answer because capacity is only avialable once. That's why mixed goals (this and that) or vague goals ("becoming better") do not help. Once your goal is set, you have to deal with a second question.

### #2: What's the context you are operating in? ###
Every company is different, so every context is. The context is defined by all aspects impacting the decision. It's crucial to understand all limitations and restrictions. In regard to cloud repatriation the following aspects (among others) are of interest.
- Costs: What's your cloud cost structure? Can you afford the high upfront investments to buy servers and such?
- Performance: Do you have specific requirements, e.g. super low latency which require a special setup, e.g. CDN?
- Control, security and compliance: Are you bound to certain standards and customer agreements?
- Scalability: What are your realistic growth expectations? What's the impact on infrastructure utilization?
- Technical expertise: Do you have the skills to take care of lower layer topics? Is your technology stack capable of running outside the cloud?
- _\<add your individual aspects here\>_

**If you have the answers to both questions you have all the ingredients to make a proper decision.**

Even though cost saving is your only goal, this is not sufficient to justify a cloud repatriation. It also requires a supportive context, like in this example:

- Cost analysis favors on-premise: There is enough cash to do upfront investments and participate from long-term cost benefits of owning hardware versus ongoing cloud service fees.
- Technical expertise available: The organization has or can acquire the necessary technical skills for managing on-premises infrastructure.
- Control and customization needs: There is a strong requirement for direct control over the hardware and software environment.
- Security and data sovereignty: Enhanced control over data storage and security is crucial, especially for compliance.
- Stable demand: The company experiences predictable, stable demand that aligns well with the capabilities of on-premises infrastructure.

37signal had very likely a comparable context back then. They had the money, the skills, the stable demand, etc. So they decided for a repatriation of their cloud usage to an on-premise environment!

### Finally ###
Given the different aspects and their characteristics, the context will - most likely - not speak for cloud repatriation (regardless of the goal). Still, 37signal might have paved the way for more companies to leave the cloud.

---

## Link(s) ##
<span id="1">[1]</span> [The Big Cloud Exit FAQ](https://world.hey.com/dhh/the-big-cloud-exit-faq-20274010)