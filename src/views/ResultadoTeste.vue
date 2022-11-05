<template>
  <div class="resultado">

    <p>Dump (percentual): {{ resultadoTeste.dumpName }} ({{ resultadoTeste.integratedDumpPercentage }}%)</p>
    <p>Data: {{ resultadoTeste.testDate }}</p>
    <p>Configuração: {{ resultadoTeste.settingsModel }}</p>
    <p>Usuários: {{ resultadoTeste.numberOfUsers }}</p>
    <p>Perguntas: {{ resultadoTeste.numberOfQuestions }}</p>
    <p>Recomendações: {{ resultadoTeste.numberOfRecommendedQuestions }}</p>
    <p>Percentual de acerto: {{ resultadoTeste.percentageOfCorrectRecommendations }}</p>
    <table id="usuarios">
      <tr>
        <th>Usuário</th>
        <th>Perguntas</th>
        <th>Recomendações</th>
        <th>Percentual de acerto</th>
      </tr>
      <tr v-for="usuario in resultadoTeste.users" :key="usuario.testResultUserId">
        <td>
          <router-link :to="`/resultado/usuario/${usuario.testResultUserId}`">
            {{ usuario.integrationUserId }}
          </router-link>
        </td>
        <td>{{ usuario.numberOfQuestions }}</td>
        <td>{{ usuario.numberOfRecommendedQuestions }}</td>
        <td>{{ usuario.percentageOfCorrectRecommendations }}</td>
      </tr>
    </table>
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
.resultado {
  padding: 60px 200px 50px 200px;
}

#usuarios {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#usuarios td,
#usuarios th {
  border: 1px solid #ddd;
  padding: 8px;
}

#usuarios td a {
  color: #04AA6D;
  text-decoration: none;
}

#usuarios tr:nth-child(even) {
  background-color: #f2f2f2;
}

#usuarios tr:hover {
  background-color: #ddd;
}

#usuarios th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>