<template>
    <div class="container col">
        <div class="card">
            <div class="card-content form">
                <span v-if="favorito">Favorito</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAIynV2wxF6tf5nAk3zcTuArf64ekOSMMMQ&usqp=CAU"
                    width="100" alt="Imagem do medicamento">
                <span>Nome: {{ nome }}</span>
                <span>laboratorio: {{ laboratorio }}</span>
                <span>Preço: {{ preco }}</span>
            </div>
            <div class="container-favorito">
                <button @click="$emit('favoritar', id)">Favoritar</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CardMedicamento",
    data: () => ({

    }),
    props: ['nome', 'laboratorio', 'preco', 'favorito', 'id']
}
</script>
  
<style scoped>
.card {
    display: flex;
    widows: calc(100%/4 - 2em);
    margin: 5px;
    width: 220px;
    background-color: rgb(253, 253, 253);
    padding: 8px;
    justify-content: flex-start;
}

.container {
    background-color: rgb(240, 241, 244);

}

.container-favorito {
    display: flex;
    padding-top: 15px;
     
    justify-content: end;  
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: start;
}

button{
    padding: 3px;
}
</style>