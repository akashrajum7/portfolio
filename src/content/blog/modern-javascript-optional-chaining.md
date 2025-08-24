---
author: Akash Raju M
pubDatetime: 2021-01-15T17:08:24.439Z
modDatetime: 2021-01-15T17:08:24.439Z
title: Modern Javascript -- Optional Chaining (?.)
slug: modern-javascript-optional-chaining
featured: true
draft: false
tags:
  - javascript
  - es6
  - programming-tips
  - optional-chaining
description: A quick guide to the Optional Chaining (?.) operator in modern JavaScript, explaining how it can reduce code and improve readability.
---

> ### In this short article, I will talk about a handy JavaScript trick that I came across recently known as Optional Chaining (?.). This is one of those tricks that will reduce the amount of code we will have to write and also clean up our code.

Hello 👋, I'm Akash from India. I work as a frontend developer at [Classcard](https://www.classcardapp.com/). For us to understand this better, I will explain a use case where optional chaining can be used and will show you the code with and without its usage.

Let us assume we are building a modern frontend application and we want to retrieve and display the user data from the API. We initialize a new variable called `userData` in the state of our application to `null` or `{}` (An empty object), assuming we don't know the response structure or if the response structure is inconsistent. We assign the data to our state variable `userData` once we get it from our API response. This is only an example I'm using to explain optional chaining and can be useful in other parts of our application as well.

In JavaScript, if we try to access a nested property on `null` or empty object, we get a reference error, but in some cases like this one, we might want to use `userData.address.city` in hopes of our data being updated once we receive a response from the API. This will result in a reference error as when DOM is first rendered the value of `userData` is either `null` or `{}`. In order to avoid this, we might do this --

```javascript
userData ? (userData.address ? userData.address.city : undefined) : undefined;
```

As you can tell, even though this solution works, this isn't great for readability. Multiple ternary operators are disorienting and not recommended. Now let use optional chaining and rewrite the above statement --

```javascript
userData?.address?.city;
```

That looks much better to read and feels natural. It does exactly the same thing our first code block does while also improving the readability of our code and cleans it up. You can also use this operator to access functions and other properties. If you would like to learn more about this, please refer MDN -- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
