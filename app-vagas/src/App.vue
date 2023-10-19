<template>
  <div>    
    <vagas-favoritas></vagas-favoritas>      
    <router-view></router-view>
     
  </div>
</template>

<script>

import VagasFavoritas from './components/comuns/VagasFavoritas.vue'

export default{
  name: "App", 

  data:()=>({
    
  }),

  components:{   
    VagasFavoritas,   
  },
  mounted(){
    this.emitter.on('alerta', ()=>{
      this.exibirAlerta = true
    })
  }
}

</script>

<style>

</style>
