<template>
  <div class="hello">
    <div class="dp-cont">
      <img src="@/assets/profile-photo.png" alt="Profile photo" height="100" width="100" />
      <h1 class="name">Akash Raju M</h1>
      <p class="hello">
        Hello there
        <span class="wave">👋</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dp-cont {
  display: grid;
  text-align: center;
}
.dp-cont img {
  margin: auto;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 2rem;
}
.name {
  margin-top: 0.5rem;
}
.hello {
  margin-top: 1.5rem;
  font-size: 1.2rem;
}
/* Hand Wave Animation */
span.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
