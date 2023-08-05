<template>
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <pesquisar-vaga></pesquisar-vaga>
        </div>        
        <div class="row mt-4">
          <div class="col-4">
            <indicador titulo="Vagas Abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>
          </div>
          <div class="col-4">
            <indicador titulo="Profissionais Cadastrados" indicador="233" bg="bg-dark" color="text-white"></indicador>
          </div>
          <div class="col-4">
              <indicador titulo="Visitantes Onlines" indicador="13" bg="bg-light" color="text-dark"></indicador>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PesquisarVaga from "@/comuns/PesquisarVaga.vue";
  import Indicador from "@/comuns/Indicador.vue";
  
  export default {
    nome: "Home",
  
    components: {
      PesquisarVaga,
      Indicador,
    },
  };
  </script>
  
  <style></style>
  