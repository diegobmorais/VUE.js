
<template>
  <div>
    <button @click="conteudo = 'Home'">Home</button>
    <button @click="conteudo = 'PublicarVaga'">Publicar Vaga</button>

    <component :is="conteudo" />
  </div>
</template>

<script>
import Home from '../views/Home.vue'
import PublicarVaga from '../views/PublicarVaga.vue'

export default {
  nome: "Conteudo",
  components: {
    Home,
    PublicarVaga,
  },

  data: () => ({
    conteudo: 'Home'
  }),

  beforeCreate(){

  },
  created(){

  },
  
  mounted(){

  },
  
}
</script>

<style></style>
