<template>
   <router-view />  
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand">Vagas</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/publicar-vaga">
              <a class="nav-link">Publicar Vaga</a>
            </router-link>
          </li>
        </ul>        
      </div>      
    </div>        
  </nav> 
  <alerta v-if="exibirAlerta" :tipo="alerta.tipo">    
        <h4>
          {{ alerta.titulo }}
        </h4>
        <hr>
        <p>{{ alerta.descricao }}</p>   
  </alerta>
</template>
  
<script>
import Alerta from '@/components/comuns/Alerta.vue';

export default {
  name: "Topo",

  data: () => ({
    exibirAlerta: false,
    alerta: {titulo: '', descricao: '', tipo: ''},
  }),

  components:{
    Alerta,
  },
  mounted(){
    this.emitter.on('alerta', (parametro)=>{
      this.alerta = parametro
      this.exibirAlerta = true
      setTimeout(()=>this.exibirAlerta = false, 3000 )      
    })
  }

}

</script>
  
<style></style>