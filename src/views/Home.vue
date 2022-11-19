<template>
  <div class="home">
    <ListaResultados />
  </div>
</template>

<script>
import ListaResultados from '@/components/ListaResultados.vue'

export default {
  name: 'Home',
  components: {
    ListaResultados
  }
}
</script>

<style>
.home {
  padding: 60px 100px 50px 100px;
}
</style>