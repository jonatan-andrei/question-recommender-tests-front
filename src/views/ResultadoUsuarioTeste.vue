<template>
    <div class="resultado-json">
        <h2>Dados do teste do usuário {{resultadoUsuarioTeste.integrationUserId}}:</h2>
        <pre>{{ JSON.stringify(resultadoUsuarioTeste, null, 2) }}</pre>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    name: "ResultadoUsuarioTeste",
    data() {
        return {
            resultadoUsuarioTeste: {},
            id: null
        };
    },
    created() {
        this.id = this.$route.params.id;
    },
    mounted() {
        axios
            .get("http://localhost:8079/test-result/user/" + this.id)
            .then((response) => (this.resultadoUsuarioTeste = response.data));
    }
};
</script>
  
<style scoped>
.resultado-json {
  padding: 60px 200px 50px 200px;
}
</style>