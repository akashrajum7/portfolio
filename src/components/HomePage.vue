<template>
  <div class="hello">
    <header class="container">
      <nav>
        <a class="logo" href="/">
          <img src="@/assets/logo.png" alt="Logo" width="35" height="35" />
        </a>
        <ul>
          <li>
            <a class="resume-btn" target="_blank" href="/Resume.pdf">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="dp-cont">
      <img src="@/assets/profile-photo.png" alt="Profile photo" height="100" width="100" />
      <h1 class="name">Akash Raju M</h1>
      <p class="hello">
        Hello there
        <span class="wave">👋</span>
      </p>
      <p class="about container">
        My web development journey started when I first came across
        <a
          href="https://wordpress.org/"
        >Wordpress</a>, but after a certain point I realised that there are certain drawbacks to using a CMS as compared to creating a website using
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        >HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> and
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>. So I started learning them and when I discovered
        <a href="https://nodejs.org/en/">Node.js</a>, I totally fell in love with how easy it was and packages in
        <a
          href="https://www.npmjs.com/"
        >npm</a> are amazing. So I started learning more about it and started creating backend
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/API"
        >API</a>'s with it. In order to build full stack apps, I needed frontend along with the backend, that is when I came across
        <a
          href="https://vuejs.org/"
        >Vue.js</a> and loved it's simplicity and ease of learning. So I started building apps with MEVN Stack and am now a full stack developer. As the field of web development is constantly changing, we need to keep ourselves updated in order to be a successfull developer. I am currently learning more about
        <a
          href="https://jamstack.org/"
        >JAMStack</a>,
        <a href="https://en.wikipedia.org/wiki/Serverless_computing">Serverless Functions</a> and
        <a href="https://firebase.google.com/">Firebase</a>. In future I would also like to learn
        <a href="https://svelte.dev/">Svelte</a> and a desktop framework like
        <a href="https://www.electronjs.org/">Electron</a> and mobile framework like
        <a href="https://flutter.dev/">Flutter</a>. I also love
        <a href="https://www.python.org/">python</a> for it's simplicity and wanna learn
        <a href="https://golang.org/">Go</a>. I have recently started writing on
        <a href="https://medium.com/@akashrajum7">Medium</a> and have built an app to
        <a
          href="https://corona-tracker-2020.netlify.com/"
        >keep track of coronavirus cases</a>. I have all my open source projects on
        <a href="https://github.com/akashrajum7">GitHub</a> along with this one.
      </p>
    </div>
    <footer class="container">
      <p>&copy;{{year}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      year: ""
    };
  },
  created: function() {
    this.year = new Date().getFullYear();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 85%;
  margin: auto;
}
a {
  text-decoration: none;
}
nav {
  display: flex;
  justify-content: space-between;
}
nav ul {
  list-style: none;
}
.resume-btn {
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: black;
  transition: transform 0.2s;
}
.resume-btn:hover {
  transform: scale(1.1);
}
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
.about {
  margin-top: 1.5rem;
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: justify;
}
.about a {
  color: #ff6200;
  background-image: linear-gradient(#ffc099, #ffc099);
  background-clip: text;
}
footer {
  text-align: center;
  font-size: 0.9rem;
}
footer p {
  margin-bottom: 1rem;
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
