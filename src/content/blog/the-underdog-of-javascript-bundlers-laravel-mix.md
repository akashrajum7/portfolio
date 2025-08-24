---
author: Akash Raju M
pubDatetime: 2020-12-19T07:31:00.343Z
modDatetime: 2020-12-19T07:31:00.343Z
title: The underdog of Javascript bundlers - Laravel Mix
slug: the-underdog-of-javascript-bundlers-laravel-mix
featured: false
draft: false
tags:
  - javascript
  - bundling
  - webpack
  - laravel-mix
  - vuejs
  - transpiling
description: Discover how Laravel Mix, an elegant wrapper around Webpack, can simplify your JavaScript bundling and transpiling process, especially when integrating modern frameworks like Vue.js into legacy codebases.
---

Hello there 👋, I'm Akash from India and I work as a frontend developer at a startup called [Classcard](https://www.classcardapp.com/). This is my story of how I discovered Laravel Mix and how it made my work life so much easier.

Before we continue with my story, let me first explain what Laravel Mix i.e, a Javascript bundler is and how transpiling works, you can skip ahead to the next section if you already know.

## Table of contents

## Eh? Javascript bundler? Transpiling?😕

In order to understand javascript bundlers and transpiling, let us first travel back in time and understand the origins of Javascript, hang tight. 🌟

JavaScript was created in the year 1995, by Brendan Eich when he was working for Netscape Communications. JavaScript was mainly developed for the purpose of input validation on the client-side. JavaScript has now grown into a significant feature of every main web browser on the market. JavaScript is now recognized as a full programming language that can handle complex calculations and interactions. If you would like to know more about it, I highly recommend checking out this series -- [fireship.io/courses/javascript/intro-history](https://fireship.io/courses/javascript/intro-history/).

The first big change for JavaScript came in the form of ECMA standardization. ECMA is an industry association formed in 1961 concerned solely with standardization of information and communications systems. ECMA committee was not able to use JavaScript as the name due to trademark. JavaScript is just the commercial name for ECMAScript. Version 1 was released in June 1997 and lacked a lot of features.

ECMAScript 3 was released in December 1999 and came with big changes and it spread far and wide. Unfortunately, the following years were not good for JavaScript development. Strong differences in the committee started to appear as they started to work on ECMAScript 4. ECMAScript 4 took almost 8 years of development and was finally scrapped, a hard lesson for everyone involved.

ECMAScript 5 was a modest update to ECMAScript 3 and became one of the most supported versions of JavaScript, and also became the compiling target of many transpilers. We will learn about transpilers in a bit, don't worry. 💪

ECMAScript 6 and ECMAScript 7 were released in 2015 and 2016 respectively, ECMAScript6 was later renamed to ECMAScript 2015. Some of the big features of ECMAScript 4 were implemented and Javascript currently stands as one of the most popular programming languages.

Now that we understood how Javascript came to be, now let us understand what bundlers do. In simple terms, a bundler is a tool that bundles i.e, combines all your Javascript files into a single Javascript file so you can ship it as a Library or Application. In javascript, we can import libraries i.e, pieces of code written by other people and use them to create amazing applications without having to write everything from scratch. Bundlers will let us combine all the dependencies i.e, libraries and our code into a single file so it's easier for us to ship our application.

As we learnt above, JavaScript evolved over time while browsers are playing catch up, In order to support users using old browsers while letting developers write modern code with all the awesome features, we can use a magical tool called transpiler. In simple terms, transpiler allows us to convert modern JavaScript into an older version of JavaScript so we can support users with old browsers. Isn't that magical? 🍄

Modern web application development process includes a javascript bundler such as [webpack](https://webpack.js.org/) and transpiler such as [Babel](https://babeljs.io/). But setting up all these tools can be tedious and hence modern frontend frameworks come with CLI tools but what if you don't want to use CLI tool or you are using modern frameworks incrementally with the old codebase? Laravel Mix to the rescue. 🦸

## Now back to my story

At [Classcard](https://www.classcardapp.com/), we started with PHP but as the time passed and application grew, we realised that using a modern framework could reduce the amount of code we had to write and the user experience would improve drastically. So we started to implement parts of our application in Vue. The only problem was since we were using Vue within the old codebase, we did not have an option to use Vue CLI.

That means we could not have the privilege of bundler and transpiler being automatically set up for us, so we were using [rollup](https://rollupjs.org/) at first. This was working fine but the drawback is that we have to create a separate Vue instance for each component we use because we had to use them on different pages and had to write different rollup config files. It was doing its job but another drawback was that we were not using .vue files, instead .js files, passing HTML as a value to the template key in export, so we were missing out on syntax highlighting and other goodies that code editors like vscode provide.

When I first saw this, this seemed like a problem that could be solved. So I started to look for a solution to write .vue files, I came across a [plugin](https://rollup-plugin-vue.vuejs.org/) for [rollup](https://rollupjs.org/). I was super happy and converted our .js files into .vue files tried to use the plugin and bundle the files, that is when I was met with a dead-end called circular dependency. Due to the time constraints I had, I could not spend too much time on it and from the initial googling, I realised that this was not a problem that could be solved easily, I could be wrong, I don't know to this day.

So my search continued for a solution that will rid me of all these headaches, without even knowing if such a solution existed, luckily it did and that is when I came across [Laravel Mix](https://laravel-mix.com/). As their tagline says "An elegant wrapper around Webpack for the 80% use case.", it is a wrapper around [webpack](https://webpack.js.org/), that makes setting up a bundler super easy. Setting it up is pretty straightforward following their setup guide for the standalone project. -- [laravel-mix.com/docs/5.0/installation#stand-alone-project](https://laravel-mix.com/docs/5.0/installation#stand-alone-project)

Now again I converted my .js file into a .vue file and configured webpack.mix.js file given to us by [Laravel Mix](https://laravel-mix.com/) and it worked on the first try. Before you worry about config, let me tell you this config is one the most Intuitive and easiest setups ever as a javascript developer. You just have to import mix using `const mix = require('laravel-mix');`. Now we can chain methods to mix to compile different files, the full API can be found in their documentation -- [laravel-mix.com/docs/5.0/mixjs](https://laravel-mix.com/docs/5.0/mixjs)

It has inbuilt support for Vue files as well as API for handling react files, it also has a method to take care of typescript files and also comes with support for CSS preprocessors, you can find more info in their documentation which is very well written -- [laravel-mix.com/docs/5.0/css-preprocessors](https://laravel-mix.com/docs/5.0/css-preprocessors), it also has support for transpiling using babel -- [laravel-mix.com/docs/5.0/concatenation-and-minification](https://laravel-mix.com/docs/5.0/concatenation-and-minification)

I think Laravel Mix is super underrated and hope this article helps you discover this amazing tool and simplify your workflow. Please share this article with your friends and co-workers if you think this can help them too.
