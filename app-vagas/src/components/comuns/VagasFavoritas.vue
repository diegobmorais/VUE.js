<template>
    <div>
        <div class="favoritos">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">Vagas Favoritas</button>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(vaga, index) in vagasFavoritas" :key="index">
                        {{vaga}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VagasFavoritas',

    data: ()=>({
        vagasFavoritas:[],
    }),

    mounted() {
        this.emitter.on('favoritarVaga', (titulo) => {
            this.vagasFavoritas.push(titulo)
        })
        this.emitter.on('desfavoritarVaga', (titulo) => {
            let indexArray = this.vagasFavoritas.indexOf(titulo)

            if(indexArray !== -1) this.vagasFavoritas.splice(indexArray, 1)
        })
    }
}

</script>

<style scoped>
.favoritos {
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 110px;
}
</style>