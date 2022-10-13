<template>
  <div id="app">
    <div class="logo">
        <router-link to="/"><img alt="Question Recommender logo" src="../public/logo.png" /></router-link>
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

</style>
