<template>
  <topo></topo>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
          <vaga :titulo="vaga.titulo" :descricao="vaga.descricao" :salario="vaga.salario" :modalidade="vaga.modalidade"
            :tipo="vaga.tipo" :publicacao="vaga.publicacao" />
        </div>
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
import Indicador from "../comuns/Indicador.vue"
import PesquisarVaga from "../comuns/PesquisarVaga.vue"
import Topo from "@/components/layouts/Topo.vue";
import Vaga from "../comuns/vaga.vue"

export default {
  nome: "Home",

  components: {
    Topo,
    PesquisarVaga,
    Indicador,
    Vaga,
  },
  data: () => ({
    vagas: []
  }),

  mounted() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'))

    this.emitter.on('filtrarVagas', vaga => {
      const vagas = JSON.parse(localStorage.getItem('vagas'))
      console.log(vaga);
      console.log(vagas);
      this.vagas = vagas.filter(index => index.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))

    })
  }
};
</script>
  
<style></style>
  