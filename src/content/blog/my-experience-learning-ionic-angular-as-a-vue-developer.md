---
author: Akash Raju M
pubDatetime: 2021-01-08T19:53:21.590Z
modDatetime: 2021-01-08T19:53:21.590Z
title: My experience learning Ionic Angular as a Vue developer
slug: my-experience-learning-ionic-angular-as-a-vue-developer
featured: false
draft: false
tags:
  - ionic
  - angular
  - vue
  - frontend
  - javascript
description: A Vue developer's journey into the world of Ionic and Angular. This post shares personal experiences, challenges, and key concepts to help others transitioning between these frontend frameworks.
---

> In this article, I'll write about my experience learning Ionic Angular in hopes of helping some of you that are planning to learn it too. I have been working with Vue for about two years now, and learning Ionic Angular was an interesting endeavour.

Hello 👋, I'm Akash from India. I work as a frontend developer at [Classcard](https://www.classcardapp.com/). Recently, I have been tasked with completing a partially developed admin app for our company. The app was built using Ionic and Angular, and I had no prior experience working with them, so it was an interesting opportunity to explore these. I am not gonna lie, it was quite frustrating at first, but I hope to save you from the same by sharing my knowledge with you in this post.

## Table of contents

## Introduction

### Angular

Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. It is a front-end framework similar to Vue or React that helps us build web applications that feel native without having to write a lot of code. Angular is very opinionated, in the sense, it has its own way of doing things and it has inbuilt support for most of the common tasks while building web applications.

I knew that before I could dive into the codebase and start building features, I had to learn Angular. To be honest with you Angular's [documentation](https://angular.io/docs) felt a little uneasy to me at first, filled with all the technical jargon, most of it unique to Angular. If you are coming to Angular from another frontend framework as I did, it might surprise you that the recommended way to create components in Angular is to use the Angular CLI. That is because Angular has a surprisingly large amount of setup required even for a simple task such as creating a component. I realise I sound a little negative but that is how I feel coming from Vue. One good thing about it, well it depends on you if it's a good thing, is its usage of typescript.

### Ionic

Ionic is an open-source mobile UI toolkit for building high quality, cross-platform native and web app experiences. In layman terms, it provides us with a bunch of components that we can use to build cross-platform mobile and web apps without having to write any native code. It also has support for plugins which help us access native features like camera, location etc. This makes it a very good choice for developers looking to build natives apps with web technologies.

Ionic has it's own CLI tool which we can use to add it to an Angular project to create an Ionic Angular project. It also provides it's own wrapper around Angular CLI and helps us create Angular pages and components in your Ionic Angular project. You can learn more about it in their documentation here -- [ionicframework.com/docs/cli/commands/generate](https://ionicframework.com/docs/cli/commands/generate). You can also learn about all the components ionic provides and their customization options from their docs here -- [ionicframework.com/docs/components](https://ionicframework.com/docs/components). Please make sure that you have selected Angular in the top left corner.

## Building blocks

### Pages

Pages are similar to a web application in Ionic Angular. They are basically views in an application. Each new screen can be considered a new page, while it is necessarily not the case at all times. If you have ever worked with frameworks like Nuxt, which is a framework based on Vue or Next, which is a framework based on React, you will be familiar with the concept of pages. It is similar in Angular and to generate a new page in Ionic Angular, you can use this command - `ionic generate page <path_to_page>`, where you can replace `<path_to_page>` with an actual path, I recommend using pages folder to hold all your pages.

This will create 6 files in a folder with the name of the page you provided, if we consider that the name of the page is about, here is how they are named and what they contain.

```
about
│   about-routing.module.ts
│   about.module.ts
│   about.page.html
│   about.page.scss
│   about.page.spec.ts
│   about.page.ts
```

`about-routing.module.ts` is used to define all the routes and subroutes that belong to this page. `about.module.ts` is a file that is used to define all the components and imports that you want to use in that particular page. `about.page.html` is where we write our HTML along with all the template logic of Angular. `about.page.spec.ts` is a file that is used for testing. `about.page.ts` is the file in which you write all the logic and functionality for your page. I was very confused between `about.module.ts` and `about.page.ts`, wrote logic in the wrong place and struggled a lot, since they both use classes and sound similar, it's very easy to get confused, so be aware.

### Components

Components in Angular are similar to other frontend frameworks. They are the basic building blocks of a page, but unlike Vue and React, Components in Angular do not contain code that makes API calls. We use something called services for that, which we will discuss in the next section. Creating components in Ionic Angular is similar to creating a page, we will use ionic CLI, with the command - `ionic generate component <path_to_component>` and just like pages, I suggest keeping all the components in a folder called components.

This will create a new component with 4 files in it. Let us assume the name of the component is contact-form, then the folder structure looks like this.

```
contact-form
│   contact-form.component.html
│   contact-form.component.scss
│   contact-form.component.spec.ts
│   contact-form.component.ts
```

`contact-form.component.html` is used to write HTML and Angular template logic, `contact-form.component.scss` is used to write css, `contact-form.component.spec.ts` is used for testing, `contact-form.component.ts` is used to write all the logic and functionality for your component. This is simpler to write compared to a page, but in order to use a component, we have to import it into a page and we can use the component template directives in the page's HTML file.

### Services

Services is where you write common code for tasks such as fetch data from the API. These services can then be imported into a page or component depending on your use case. To create a service, you can again make use of ionic CLI, by running the command - `ionic generate service <path_to_service_folder>`. One difference to note here is that a service will not create a folder. Similar to pages and components I suggest keeping services in a separate folder called services though.

This will create two files in the services folder, and if we assume the name of the service is user, the directory structure will look like this.

```
services
│   user.service.spec.ts
│   user.service.ts
```

`user.service.spec.ts` is used for testing while `user.service.ts` holds the code for the service. You can read about making HTTP calls to your API using service here -- [angular.io/guide/http](https://angular.io/guide/http).

## Common usage

We can combine all these basic building blocks to create apps, the overall architecture looks like, we have pages which contain all the components and we write services which can be used by either the pages or components to provide services like API requests. One good thing about Angular is it decouples everything so we can improve reusability of code.

These are the common steps you need to perform in Ionic Angular apps. Angular apps are divided into modules, for you to be able to use any page or component, you must first include it in a module. When you create a page, Angular by default creates a `.module.ts` file for you and imports your page into it. In order to define a module, we use `@ngModule` decorator in Angular. It is written on top of the class that is exported in `.module.ts` file and usually looks like this.

```typescript
@NgModule({
  imports: [...],
  declarations: [...],
})
```

`imports` array is used to define other modules that you want to use in this page, `declarations` is used to define declarables that this page can use, it is usually used to define components that this page can use. We import the components and modules using es6 syntax and define them in these arrays respectively. You can read about it in-depth here -- [angular.io/api/core/NgModule#ngmodule](https://angular.io/api/core/NgModule#ngmodule).

Whereas services can directly be imported in `.page.ts` or `.component.ts` files respectively using es6 syntax and can directly be used. For a service to be accessible in a class, it has to be defined in the constructor, for example, if I had a service called user and wanted to use in a page called profile, this is how it would be declared in the `profile.page.ts` file,

```typescript
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  constructor(private api: UserService) {}

  ngOnInit() {}
}
```

Now we could use any functions defined in the user service using `this.api.<function_name>` inside `ProfilePage` class.

## Challenges

### Same component in two pages

One common challenge you might face if you are new to Angular is being able to use the same component in two different pages, you might be thinking, well that's simple, I'll import it into each page's `moule.ts` file and I can use. But unfortunately, you cannot declare a component in two different places. To solve this you will have to create a new `.module.ts` file, commonly called `shared.module.ts` and you have to use `@ngModule` like how you do in a `.module.ts` file in a page, and in `@ngModule`, along with `declarations`, we will use something called as `exports`, which is also an array of declarations.

Now we will import the components that we would like to use in multiple pages, and declare them in both `declarations` and `exports` arrays. Now this will become a module. So in whichever page we want to use the component, we will import this module's class using an es6 import inside those page's `.module.ts` files and we declare it in their imports in `@ngModule`, if this sounds confusing to you please watch this video -- [youtu.be/za5NaFavux4](https://youtu.be/za5NaFavux4).

### Nested components

Let's say you want to use a component inside another component, this might not be obvious to you at first, it definitely was not for me. You'll have to declare both the components in the page's `.module.ts` file as if they were sibling components and you can directly use them in each other since Angular is divided into modules, once they are in the same module, they can be used anywhere in the components or pages present in that module.

## Conclusion

Even though I have not covered everything that Angular has to offer, I think this is enough to get you started.
