---
layout: post
title:  "Is “Inner/outer loop time spent” a good metric in Software Engineering?"
type: Article
---

When McKinsey stepped into the space of measuring Software Engineering productivity (and claimed *"[Yes, you can measure software developer productivity](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/yes-you-can-measure-software-developer-productivity)”*) they proposed new metrics to complete DORA and SPACE, one being “Inner/outer loop time spent”.

This metric isn’t new. It belongs to McKinsey’s standard toolbox to measure organizational efficiency and productivity. It differentiates between core development activities (inner loop) and supporting tasks (outer loop). The goal is to optimize the inner-outer-loop ratio. But is it a good metric for software engineering teams? Let's dive in.

Based on McKinsey, the inner loop encompasses *“activities directly related to creating the product: coding, building, and unit testing”*. The outer loop includes *“other tasks developers must do to push their code to production: integration, integration testing, releasing, and deployment.”* From their standpoint *“maximizing the amount of time developers spend in the inner loop is desirable”*.

While I like the overall separation, I disagree with the definition/ assignment of activities to the inner/ outer loop. From my point of view all activities from building to deploying software in production belong to the inner circle. Why? Simply because otherwise there is no value! And secondly, you split apart the ownership of a team.

You could argue that you want to streamline efforts for testing and deployment and therefore these activities should belong to the outer loop. But reducing efforts should be done and measured by degree of automation not reduction of scope. Otherwise you deprioritize long-term effects. 

So what’s left for the outer loop? I definitely see all surrounding activities (e.g. alignment meetings). These activities are important as well. And while automation is hard, usually there is lots of room for optimization … talking from my own experience.

PS: This post also got posted at [LinkedIn](https://www.linkedin.com/pulse/innerouter-loop-time-spent-good-metric-software-andr%2525C3%2525A9-neubauer-ushce%3FtrackingId=pWySU%252BmqSgubBBxDoF1rXw%253D%253D/?trackingId=pWySU%2BmqSgubBBxDoF1rXw%3D%3D)