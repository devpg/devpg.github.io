---
layout: post
title:  "Alternating between Extremes - A Phenomenon in Software Engineering?! (Part 1)"
type: Article
---

Let me start with a story:
A piece of software grows and grows and becomes a monolith. Changes are taking longer and longer and maintenance is becoming more and more complex. The reason is quickly identified: The close coupling. The solution is obvious: The monolith must be split into microservices!
During the rework the focus is on ensuring that there is no more … actually any close coupling at all. Many, many microservices are emerging. After the change everything is fine. At some point you notice that handling the many microservices in your daily work is time-consuming. That's why several services get merged into a mono-repo … 

The story could be also about ...
- On-Prem → Cloud → Hybrid-cloud / Cloud-Repatriation
- Server-side rendering → Client-side rendering → Hybrid rendering (client-side hydration)

Does this sound familiar? 

The pattern behind this story: In software engineering - maybe not just there - we alternate between different solution approaches. But it’s not just that. 

<div align="center"><h1>We alternate between extremes! </h1></div>

---

Why is that? Speaking from my experience I see two possible reasons.

### Reality vs. Theory ###
We focus so much on the cause (in the example above “close coupling”) and how to fix it that we become blind to everything else. We forget that there is no free lunch … every new solution has certain characteristics. These can lead to other challenges. In the example above, it’s the complexity that arises when handling many microservices (e.g. runtime dependencies, interface compatibility). However, these downsides are on a theoretical level. So, we don’t take them into account. The real problem gets overrated, the arising but so far only theoretical problems are getting underrated.

### The perfect the solution ###
Another reason could be striving for the perfect solution. But as said above, there is no free lunch, meaning: There is no perfect solution, only an optimal one for the current situation. And since every situation changes continuously, the optimal solution changes as well.

Whatever it is, alternating between extremes is an expensive and lengthy undertaking. It creates high opportunity costs, requires a long-running commitment, and has an increased risk to get stopped.

---

I will shine a light on how to do it better in the next article.