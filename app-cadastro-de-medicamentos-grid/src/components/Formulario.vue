<template>
    <legend class="form-label mx-5 pt-2">Cadastro de Medicamento</legend>
    <div class="mb-3 px-5">
        <label for="nome" class="form-label px-2" >Nome: </label>
        <input type="text" id="nome" v-model="medicamento">
        <label for="laboratorio" class="form-label px-2">Laboratorio: </label>
        <input type="text" id="laboratorio" v-model="laboratorio">
        <label for="preco" class="form-label px-2">Preço: </label>
        <input type="number" id="preco" v-model="preco">
        <button @click="$emit('cadastrar', medicamento, laboratorio, preco)" class="btn btn-primary mx-3">Cadastrar</button>
        <legend class="form-label pt-5">Lista de Medicamento</legend>
    </div>
</template>
  
<script>
export default {
    name: "Formulario",
    data:()=>({
        id: 0,
        medicamento: "",
        laboratorio: "",
        preco: 0
    })
}
</script>
  
<style>
</style>