<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}
html {
  height: 100vh;
}
</style>
