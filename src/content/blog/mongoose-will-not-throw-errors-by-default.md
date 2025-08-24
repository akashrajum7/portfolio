---
author: Akash Raju M
pubDatetime: 2020-04-14T12:00:00.000Z
modDatetime: 2020-04-14T12:00:00.000Z
title: Mongoose will not throw any errors by default if you use a model without connecting, here’s why.
slug: mongoose-will-not-throw-errors-by-default
featured: false
draft: false
tags:
  - mongoose
  - nodejs
  - mongodb
  - javascript
  - database
  - debugging
description: A common gotcha with Mongoose that cost me a hackathon and will probably save you a lot of frustration.
---

_A common gotcha with Mongoose that cost me a hackathon and will probably save you a lot of frustration._

![A person looking at a frustrating error on a laptop screen](https://miro.medium.com/v2/resize:fit:1400/0*rL2jy4tu7let82Io)
_Photo by [Kyle Glenn](https://unsplash.com/@kylejglenn?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

[Mongoose](https://mongoosejs.com/) is a [MongoDB](https://www.mongodb.org/) object modeling tool. It works as a middleware to perform operations on MongoDB. If you have been working with Node.js and MongoDB, you must have surely come across Mongoose. If you have started working with it recently, by following tutorials, like me, you might have missed this common gotcha.

## Table of contents

## The experiment

We will create a simple express server to demonstrate how Mongoose will fail silently even when the connection to the database is not created. I hope you already have Node.js and npm installed on your system and create a new folder to create our example app in. Now open your terminal or git bash (You can get it here: [https://git-scm.com/downloads](https://git-scm.com/downloads)) if on windows in that folder. We will Initialise our Node app using the below command.

```bash
npm init -y
```

We will now install all the required dependencies.

```bash
npm i express mongoose
```

We will then create a new file called ‘index.js’ to hold our Node.js code and let us first paste the basic express app code in it.

```javascript
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Your app is listening on port 3000");
});
```

We will now add code from the [Mongoose](https://mongoosejs.com/) homepage to our express app and not add a Mongoose connection. We will also create a route to demonstrate how this can cause problems. So our final index.js file should look like this.

```javascript
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", { name: String });

app.get("/", function (request, response) {
  Cat.findOne({ name: "Hero" }, function (error, foundCat) {
    response.send(foundCat);
  });
});

app.listen(3000, () => {
  console.log("Your app is listening on port 3000");
});
```

Now we will start our server using the below command.

```bash
node index.js
```

Now let us open our browser and go to [http://localhost:3000/](http://localhost:3000/) and your browser should keep loading and you would think Mongoose would throw an error in the terminal or git bash but to our surprise, nothing.

![A terminal window showing the node server running without any errors](https://miro.medium.com/v2/resize:fit:1204/1*WHGf-xT8AAZqgZvDIfyC_g.png)

## The cause

Mongoose uses something called [Operation Buffering](https://mongoosejs.com/docs/connections.html#buffering). It buffers model function calls internally so that you can start using your models immediately, without waiting for Mongoose to establish a connection to MongoDB. Basically, all function calls you make on Mongoose models get stored in a buffer so they can execute when a connection is established to the database. This can cause confusion as no error message is shown when that happens.

## The fix

You can fix this by setting [Operation Buffering](https://mongoosejs.com/docs/connections.html#buffering) to false like this:

```javascript
mongoose.set("bufferCommands", false);
```

But, you should also note that buffering is also responsible for waiting until Mongoose creates collections. If you disable buffering, you should also disable the `autoCreate` option and use the `createCollection()` option. You can and I suggest you do, read more about it here: [https://mongoosejs.com/docs/connections.html#buffering](https://mongoosejs.com/docs/connections.html#buffering)

## Conclusion

Even though the problem in this simple example may seem obvious, when you are working on a project that is structured and the database connection is modularised into a different file, you could easily forget to import it. Or even if you did import it, you could forget to invoke it if you are exporting it as a function like I did which cost me a hackathon. I hope you were able to learn something new and hope this saves someone else the frustration it caused me.
