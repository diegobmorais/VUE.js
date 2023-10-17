
<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais de graça</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Titulo da Vaga</label>
        <input type="text" class="form-control" v-model="titulo">
        <div class="form-text">Por exemplo: Programador VueJS e PHP</div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea type="text" class="form-control" v-model="descricao"></textarea>
        <div class="form-text">
          Informe os detalhes da vaga
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label class="form-label">Salário</label>
          <input type="number" class="form-control" v-model="salario">
          <div class="form-text">Informe o salário</div>
        </div>
        <div class="col">
          <label class="form-label">Modalidade</label>
          <select class="form-select" name="" id="" v-model="modalidade">
            <option value="" disabled>-- Selecione</option>
            <option value="1">Home Office</option>
            <option value="2">Presencial</option>
          </select>
          <div class="form-text">Informe onde as atividades serão realizadas</div>
        </div>
        <div class="col">
          <label class="form-label">Tipo</label>
          <select class="form-select" name="" id="" v-model="tipo">
            <option value="" disabled>-- Selecione</option>
            <option value="1">CLT</option>
            <option value="2">PJ</option>
          </select>
          <div class="form-text">Informe o tipo de contratação</div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <button type="submit" class="btn btn-primary" @click="salarVaga()">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  nome: "PublicarVaga",

  data: () => ({
    titulo: "",
    descricao: '',
    salario: '',
    modalidade: '',
    tipo: '',
  }),

  methods: {
    salarVaga() {
      let vagas = JSON.parse(localStorage.getItem('vagas'))

      if(!vagas) vagas = []

      let vaga = {
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
      }
      vagas.push(vaga)

      // grava dados no localstorage
      localStorage.setItem('vagas', JSON.stringify(vagas))
   }
  }
}
</script>
  
<style></style>
  