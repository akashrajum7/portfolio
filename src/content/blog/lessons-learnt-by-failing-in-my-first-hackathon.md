---
author: Akash Raju M
pubDatetime: 2020-04-10T15:00:00.000Z
modDatetime: 2020-04-10T15:00:00.000Z
title: Lessons Learnt by Failing in My First Ever Hackathon
slug: lessons-learnt-by-failing-in-my-first-hackathon
featured: false
draft: false
tags:
  - hackathon
  - learning
  - failure
  - web development
  - programming
description: A reflection on the key mistakes made during a first hackathon and the valuable lessons learned from the experience of failing.
---

_Hope this article helps you avoid these mistakes that seem simple but can make a huge difference._

![An image with laptop and book with title failed it, on a table signifying failure.](https://miro.medium.com/v2/resize:fit:1400/0*dTDsW9r5j-d-B6g0)
_Photo by [Estée Janssens](https://unsplash.com/@esteejanssens?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

It was a six-hour hackathon and we were a team of two people. We were competing with around fifteen other teams. We were all college students. It was a web development hackathon and we were provided with a problem statement at the beginning of the hackathon and we had to provide the solution by the end of the time limit.

## Table of contents

## The First Mistake

The day before the hackathon, I discussed with my hackathon partner on what might the problem statement be and what to do if they decide to let us choose a problem statement. We also discussed what technologies and frameworks we will use. This is where I did my first mistake, I had recently started learning Vue.js and was very impressed by how easy it was to pick up and learn and how quickly you can build web apps with it. So I suggested that we would use vue.js for frontend and we could create an express backend API. Since I have been working with express for a while, I suggested that I will build the API and my partner would work on the frontend. The problem was he never worked with Vue.js before.

> Only choose a language, framework or library you are comfortable with to use in a hackathon.

Since he was familiar with angular, I assumed it would be easy for him to pick up Vue.js and sent him an introduction video from youtube and he saw the video and understood the basics. The mistake here was obviously choosing a framework that he was not comfortable with. That was not too bad since, on the day of the hackathon, when we realised using Vue.js wouldn’t work, went back to using plain HTML, CSS with Jquery which he was good at.

## The Second Mistake

It was the day of the hackathon, we came a little early to the place. Since we had a little bit of time with us, we decided to install all the required dependencies for the stack we were going to use.

> Always make sure beforehand that all the setup works properly in your system.

There were only a few minutes before the hackathon started and for some reason, the Vue CLI failed to install on my partner's laptop, it was erroring out, the tension started building and we started panicking before we knew it, and the hackathon hasn’t even started.

## The Third Mistake

The hackathon started and we were handed out our problem statement, the problem statement was that we had to build a comment’s module that would avoid creating new comment if it was found to be a duplicate or was similar. The frontend did not have a lot of the work to do at all, we quickly realised that using Vue.js wasn’t necessary and my partner started building the frontend using HTML, CSS and Jquery and I started with the backend API.

> The project structure doesn’t matter in a hackathon.

Since it was my first hackathon, I didn’t realise how important time was in situations like these and I started creating different folders for different modules and all that stuff. In this process, I somehow missed writing code to connect to the database and the first four hours passed and we were still struggling with getting the comments to save to the database. I had worked with connecting database to express multiple times before, I would have realised if it showed any database connection error but unfortunately, it was failing without any error messages and I did not realise what was going wrong until it was too late.

## The Fourth Mistake

By this time, my partner realised that this was not going to work so he quickly started to write the backend in Java as he was good at it, all the while panicking. But it was too late so he had to rush it and we were left with a partially working module.

> Working with a time constraint changes a lot of things.

You don’t realise how different things seem when you are under the pressure of running out of time until you are in that situation. We underestimated how things could go wrong and how small mistakes can cause big problems.

## Conclusion

Make sure that you are comfortable with all the technologies that you choose to work with in a hackathon. Make sure all the tools and setup required for your stack work properly on your system. If possible, try not to decide on the stack to use until you are aware of the problem statement. Don’t concentrate too much on the structure of your project and concentrate more on getting your project to work properly without confusion. If you are going to participate in a hackathon, practise beforehand with the constraints of the hackathon and most importantly, don’t panic.

_Thank you for your time._
