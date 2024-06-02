---
author: Akash Raju M
pubDatetime: 2020-12-11T16:51:00.000Z
modDatetime: 2020-12-11T16:51:00.000Z
title: Mysteries of Moment.js's UTC offset
slug: mysteries-of-moment-js-utc-offset
featured: true
draft: false
tags:
  - javascript
  - dates
  - momentjs
  - utcoffset
  - timezones
description: This blog post aims to explain the confusing behaviour of UTC in Moment.js javascript library that catches many people off guard when first working with timezones
---

I work as a front-end engineer at a company called [Classcard](https://www.classcardapp.com/), and I recently had to work with [Moment.js](https://momentjs.com/) to display the time until a class starts. It wasn't as simple as it sounds 😅, continue reading to learn why.

## Table of contents

## Intro

[Moment.js](https://momentjs.com/) is a popular library used to parse, validate, manipulate, and display dates and times in JavaScript. If you are considering using Moment.js in a modern project, or in a new project, please learn about [Project Status](https://momentjs.com/docs/#/-project-status/).

## Challenge

The requirement was that the back-end API returns date and time in UTC format and we had to compare it to local date and time and display the time left for a class to start. If you are thinking what's so hard about it, it's [UTC offset](https://en.wikipedia.org/wiki/UTC_offset). Since the project was already using the Moment.js library, I decided to make use of it.

So I started by going to Moment.js's [documentation](https://momentjs.com/docs/#/parsing/) and to parse the date in Moment.js you can use `moment()` method. So we just use the date we get from API and parse it using `moment(apiDate)` and get current date and time with `moment()` and just compare right? Wrong 😅.

The reason why this wouldn't work is that the date and time we get from the server are in UTC and the date you get when you use `moment()` is in local time zone. So the confusion started when I decided to convert the local time into UTC so I can compare it with the date and time we get from the server.

## Confusion

So let me get straight to the point and tell you what the issue was, Moment.js has two UTC methods, `moment().utc()` and `moment.utc()`. As you can already tell, not very distinct from each other in syntax, but they are very distinct in terms of functionality when used in practice and can cause unwanted confusion.

## Solution

When we use `moment(apiDate)`, moment assumes that the date being passed to it is in local time and if you do `moment(apiDate).utc()`, it will take the UTC date and apply your local offset to UTC date which will lead to the wrong date and time. In order to parse UTC time in moment, you have to use `moment.utc(apiDate)`. To get the current date and time we can use `moment()` but this will return the current date and time in local timezone, and if you compare that you will get wrong results. If you want to get the current time and date in UTC to compare to the value we get from the API, we can do `moment.utc()`. So the final expression looks like this -- `moment.utc(apiDate).from(moment.utc())`.
