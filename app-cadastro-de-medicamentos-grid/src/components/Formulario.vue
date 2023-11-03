<template>
    <legend class="form-label mx-5 pt-5">Cadastro de Medicamento</legend>
    <div class="mb-5 px-5 d-flex row">
        <div class="col">
            <label for="nome" class="form-label px-2">Nome: </label>
            <input type="text" class="form-control" id="nome" v-model="medicamento">
        </div>
        <div class="col">
            <label for="laboratorio" class="form-label px-2">Laboratorio: </label>
            <input type="text" class="form-control" id="laboratorio" v-model="laboratorio">
        </div>
        <div class="col">
            <label for="preco" class="form-label px-2">Preço: </label>
            <input type="number" class="form-control" id="preco" v-model="preco">
        </div>
        <div class="col d-flex flex-column px-3 justify-content-end">
            <div>
                <button @click="$emit('cadastrar', medicamento, laboratorio, preco)"
                    class="btn btn-primary">Cadastrar</button>
            </div>
        </div>
        <legend class="form-label pt-5 font-weight-bold">Lista de Medicamento</legend>
    </div>
</template>
  
<script>
export default {
    name: "Formulario",
    data: () => ({
        id: 0,
        medicamento: "",
        laboratorio: "",
        preco: 0
    })
}
</script>
  
<style></style>