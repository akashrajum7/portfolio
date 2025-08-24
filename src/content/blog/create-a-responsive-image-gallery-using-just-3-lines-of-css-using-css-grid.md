---
author: Akash Raju M
pubDatetime: 2021-01-02T09:14:12.991Z
modDatetime: 2021-01-02T09:14:12.991Z
title: Create a responsive image gallery using just 3 lines of css, using CSS Grid.
slug: create-a-responsive-image-gallery-using-just-3-lines-of-css-using-css-grid
featured: true
draft: false
tags:
  - css
  - css-grid
  - responsive-design
  - webdev
description: Learn how to create a fully responsive image gallery with just three lines of CSS using the power of CSS Grid. This practical guide walks you through the HTML and CSS step-by-step.
---

Hello 👋, I'm Akash from India, working as a frontend developer at [Classcard](https://www.classcardapp.com/). Also, Happy New Year! 🎉

CSS can sometimes be daunting, especially if you are a junior dev or new to the web dev world, but it has some pretty neat tricks up its sleeves. If we can utilize them, we can create awesome stuff without writing too much code. Today I am going to share with you one such trick that I always fall back onto whenever I have to create a responsive image gallery. I decided to take a practical approach to this guide, so please follow along so you can get hands-on practice. I recommend using codepen so you don't have to worry about setting up a dev environment, to get started, go here -- [https://codepen.io/pen/](https://codepen.io/pen/).

## Table of contents

## HTML

Let us first write HTML required to make the image gallery, we will use div's to hold the images and will use a parent div with a class of `gallery`, which we will use in our CSS to style the gallery. As for the source of image's, we will use Unsplash API to get random images.

```html
<div class="gallery">
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
  <div><img src="https://source.unsplash.com/random"></img></div>
</div>
```

## CSS

We will use `img` css selector to style images, I will explain what each line does, you can skip ahead if you already know. `display: block;` is used to make images block elements, which will help us avoid small gap below images, you can learn more about it in this video, thanks to Kevin. -- [Get rid of that small space under your images](https://youtu.be/plOl7TNc89A). We also set the width and height of images to 100% so images can take up all the available space in div's. `object-fit: cover;` is used so that it will cut off the sides of the image, preserving the aspect ratio so we can avoid our images looking stretched or blurry. This is optional based on the type of content in your gallery.

We will use `.gallery` css selector to create our responsive image gallery, surprisingly it takes only 3 lines of CSS. `display: grid;` is used to declare that we want to use CSS Grid. `gap: 1rem;` is used to create both horizontal and vertical space between images so they look good. Rest of the magic lies in this line - `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));`, which helps us create the responsive grid.

Let's break down the line so it makes sense, first `grid-template-columns:` is a property that is used to define no of columns our grid should contain. `repeat()` is a CSS helper function that is used to repeat a property without having to write it multiple times manually. Similarly, `minmax()` is a css helper function that is used to define the width, with min and max values. In our code, we have defined it as min of `240px` and it can go max up to `1fr`. The value of `1fr` depends on the no of columns in the grid, if there are 2 columns, the value of 1fr is 50%, if 5, 10% and so on. But how many columns does our grid have? Here is where it gets interesting, we can now combine both `repeat()` and `minmax()` and create this - `repeat(auto-fit, minmax(240px, 1fr));`. This tells our browser that, if there is enough space for a new image to fit into the column, while all the other images are at 240px and gaps are also considered, display that picture in the same column, if there isn't enough space, show the image in a new column, and the remaining space in the first column is equally divided to the images present in the first column since the unit of width falls onto 1fr in that case.

If you want to learn how this works in-depth, I highly recommend this resource, thanks to Jeff -- [Build three different responsive CSS grid layouts from scratch](https://fireship.io/lessons/three-responsive-css-grid-layouts/).

```css
/* Gallery styles */
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```

## Result

Thanks for sticking around until the end, if we do this, this is the final result --

<iframe height="365" style="width:100%" src="https://codepen.io/akashrajum7/embed/preview/rNMdVZw?height=265&theme-id=dark&default-tab=html,result">
  See the Pen <a href="https://codepen.io/akashrajum7/pen/rNMdVZw">CSS Grid Gallery</a> by Akash Raju M
  (<a href="https://codepen.io/akashrajum7">@akashrajum7</a>) on <a href="https://codepen.io">CodePen</a>.
</iframe>

Please share this article with your friends and co-workers if you think this can help them too.
