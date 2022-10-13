<template>
  <div>
    <h1>{{ id }}</h1>
    <pre>{{ JSON.stringify(resultadoTeste, null, 2) }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ResultadoTeste",
  data() {
    return {
      resultadoTeste: {},
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    axios
      .get("http://localhost:8079/test-result/" + this.id)
      .then((response) => (this.resultadoTeste = response.data));
  }
};
</script>

<style scoped>

</style>