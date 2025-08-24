---
author: Akash Raju M
pubDatetime: 2021-02-12T17:33:01.195Z
modDatetime: 2021-02-12T17:33:01.195Z
title: Modern Javascript -- Nullish coalescing operator (??)
slug: modern-javascript-nullish-coalescing-operator
featured: true
draft: false
tags:
  - javascript
  - web development
  - programming tips
  - frontend development
description: In this short article, I will talk about another handy JavaScript trick that I came across recently known as Nullish coalescing operator (??). This operator was released as a part of ECMAScript 2020 Language Specification.
---

> ### In this short article, I will talk about another handy JavaScript trick that I came across recently known as Nullish coalescing operator (`??`). This operator was released as a part of ECMAScript 2020 Language Specification.

Hello 👋, I'm Akash from India. I work as a frontend developer at [Classcard](https://www.classcardapp.com/). For us to understand this better, I will explain a use case where Nullish coalescing operator can be used. But before that let us first understand what Nullish coalescing operator does.

The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`. This is similar to logical OR (`||`) operator, the difference is that logical OR will return its right-hand side operand when its left-hand side operator is false. In javascript even 0 and empty strings are considered to be false. This is where nullish coalescing operator (`??`) shines.

```javascript
let logicalValue = 0 || "right hand side"; // logicalValue will contain 'right hand side' now because  0 is falsy in javascript
let nullishValue = 0 ?? "right hand side"; // logicalValue will contain 0 now because nullish coalescing operator only works on null or undefined

console.log("logicalValue: ", logicalValue); // right hand side
console.log("nullishValue: ", nullishValue); // 0
```

You can also use nullish coalescing operator (`??`) on functions in order to evaluate the second function only when the first function returns `null` or `undefined`.

```javascript
const firstFunction = () => {
  return null;
};
const secondFunction = () => {
  return "I'm second function";
};

console.log(firstFunction() ?? secondFunction()); // I'm second function
```

```javascript
const firstFunction = () => {
  return true;
};
const secondFunction = () => {
  return "I'm second function";
};

console.log(firstFunction() ?? secondFunction()); // true
```

Now let's add console.log's to both the functions to see how they are evaluated.

```javascript
const firstFunction = () => {
  console.log("First function running.");
  return null;
};
const secondFunction = () => {
  console.log("Second function running.");
  return "I'm second function";
};

firstFunction() ?? secondFunction();

/**
 * Console
 *
 * First function running.
 * Second function running.
 */
```

```javascript
const firstFunction = () => {
  console.log("First function running.");
  return true;
};
const secondFunction = () => {
  console.log("Second function running.");
  return "I'm second function";
};

firstFunction() ?? secondFunction();

/**
 * Console
 *
 * First function running.
 */
```

As we can see in the above example, the second function will only run when the first function fails, this can be used in a lot of places in our day to day code to improve redundancy while still keeping the code clean.
