<template>
  <table id="resultados">
    <tr>
      <th>Id</th>
      <th>Dump (percentual)</th>
      <th>Data</th>
      <th>Usuários</th>
      <th>Perguntas</th>
      <th>Recomendações</th>
      <th>Percentual de acerto</th>
    </tr>
    <tr v-for="item in testes" :key="item.testResultId">
      <td>
        <router-link :to="`/resultado/${item.testResultId}`">
          {{ item.testResultId }}
        </router-link>
      </td>
      <td>{{ item.dumpName }} ({{ item.integratedDumpPercentage }}%)</td>
      <td>{{ item.testDate }}</td>
      <td>{{ item.numberOfUsers }}</td>
      <td>{{ item.numberOfQuestions }}</td>
      <td>{{ item.numberOfRecommendedQuestions }}</td>
      <td>{{ item.percentageOfCorrectRecommendations }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      testes: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8079/test-result")
      .then((response) => (this.testes = response.data));
  }
};
</script>

<style scoped>
#resultados {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#resultados td,
#resultados th {
  border: 1px solid #ddd;
  padding: 8px;
}

#resultados td a {
  color: #2c3e50;
  text-decoration: none;
}

#resultados tr:nth-child(even) {
  background-color: #f2f2f2;
}

#resultados tr:hover {
  background-color: #ddd;
}

#resultados th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
