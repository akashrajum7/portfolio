<template>
  <div class="hello">
    <div class="dp-cont">
      <img src="@/assets/profile-photo.jpg" alt="Profile photo" height="100" width="100" />
      <h1 class="name">Akash Raju M</h1>
      <p class="hello">Hello there 👋</p>
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
  margin-top: 2rem;
}
</style>
