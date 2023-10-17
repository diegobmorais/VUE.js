<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ titulo }}</div>
        <div class="card-body">
            <p>{{ descricao }}</p>
        </div>
        <div class="card-footer">
            <small>Salario: {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Publicação:
                {{ publicacao }}</small>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Vaga',
    props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao',],


computed: {
        getModalidade() {
            switch (this.modalidade) {
                case '1': return 'Home Office'
                case '2': return 'Presencial'
            }
            return ''
        },

        getTipo() {
            switch (this.tipo) {
                case '1': return 'CLT'
                case '2': return 'PJ'
            }
            return ''
        }
    }
}

</script>