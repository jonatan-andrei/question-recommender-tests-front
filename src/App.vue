<template>
  <div id="app">
    <div class="logo">
        <router-link to="/"><img alt="Question Recommender logo" src="../public/logo.png" /></router-link>
      </div>
    <div id="nav">
      <router-link class="grid-item" to="/">Home</router-link>
      <router-link class="grid-item" to="/perguntar">Fazer uma pergunta</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "QuestionRecommender",
  created() {
    document.title = "Question Recommender";
  }
};
</script>

<style>
body {
  background-color: #ffffff;
}

.logo {
  text-align: center;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

#nav .grid-item {
  padding: 20px;
  font-size: 25px;
  text-align: center;
  padding-top: 40px;
  font-weight: bold;
  color: #3f51b5;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #77c06c;
}
</style>
