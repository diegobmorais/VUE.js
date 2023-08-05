<template>
  <div>
    <topo></topo>
    <conteudo></conteudo>
  </div>
</template>

<script>
import Conteudo from './components/layouts/Conteudo.vue'
import Topo from './components/layouts/Topo.vue'

export default{
  name: "App",
  components:{
    Topo,
    Conteudo,
  }
}

</script>

<style>

</style>
