<template>
  <div>
    <Header></Header>
    <Formulario @cadastrar="cadastrarMedicamento"></Formulario>
    <div class="container">
      <CardMedicamento 
        v-if="!!listaMedicamentos"
        v-for="medicamento in listaMedicamentos" :key="medicamento.id" @favoritar="favoritarMedicamento"
        :nome="medicamento.nome" :laboratorio="medicamento.laboratorio" :preco="medicamento.preco" :id="medicamento.id" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Formulario from './components/Formulario.vue';
import CardMedicamento from './components/CardMedicamento.vue'

export default {
  name: "App",
  data() {
    return {
      listaMedicamentos: []
    }
  },
  components: {
    Header,
    Formulario,
    CardMedicamento
  },
  methods: {
    cadastrarMedicamento(nome, laboratorio, preco) {
      const novoMedicamento = {
        id: this.listaMedicamentos.length + 1,
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false
      }
      this.listaMedicamentos.push(novoMedicamento)
    },
    favoritarMedicamento(id) {
      this.listaMedicamentos = this.listaMedicamentos.map(item => {
        if (item.id == id) {
          item.favorito = !item.favorito
        }
      })
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  widows: 100vw;
  padding: 1em;
  
}

</style>
