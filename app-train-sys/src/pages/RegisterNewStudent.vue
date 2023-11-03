<template>
    <Form class="container pt-5 pb-5" @submit="registerNewStudent" :validation-schema="validateSchema">
        <div class=" p-3 bg-light border rounded-3">

            <div class="row pt-5">
                <h1 class="bi bi-award-fill text-success">Cadastro de novos alunos</h1>
                <div class="col pt-5">
                    <div class="Form-outline">
                        <label class="form-label" for="formName">Nome Completo</label>
                        <Field type="text" name="name" id="formName" class="form-control" v-model="name" />
                        <ErrorMessage name="name" class="text-danger" />{{ errorMessage }}
                    </div>
                </div>
                <div class="col pt-5">
                    <div class="form-outline">
                        <label class="form-label" for="formEmail">Email</label>
                        <input type="email" name="email" id="formEmail" class="form-control" v-model="email" />
                        <ErrorMessage name="email" class="text-danger" />
                    </div>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="formContact">Contato</label>
                        <Field type="text" name="contact" id="formContact" class="form-control" v-model="contact" />
                        <ErrorMessage name="contact" class="text-danger" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="formData">Data de nascimento</label>
                        <input type="date" id="formData" class="form-control" v-model="date_birth" />
                    </div>
                </div>
            </div>
            <div class="row pt-4 w-100">
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="formCEP">CEP</label>
                        <Field type="text" v-on:focusout="getInfoCEP()" v-on:keyup.enter="getInfoCEP()" name="cep"
                            id="formCEP" class="form-control" v-model="cep" />
                        <ErrorMessage name="cep" class="text-danger" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="formStreet">Logradouro</label>
                        <Field type="text" name="street" id="formStreet" class="form-control" v-model="street" />
                        <ErrorMessage name="street" class="text-danger" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline w-50">
                        <label class="form-label" for="formNumber">Nº</label>
                        <Field type="text" name="number" id="formNumber" class="form-control" v-model="number" />
                        <ErrorMessage name="number" class="text-danger" />
                    </div>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="formState">Estado</label>
                        <Field type="text" name="state" id="formState" class="form-control" v-model="state" />
                        <ErrorMessage name="state" class="text-danger" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="formCity">Cidade</label>
                        <Field type="text" name="city" id="formCity" class="form-control" v-model="city" />
                        <ErrorMessage name="city" class="text-danger" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="formCEP">Bairro</label>
                        <Field type="text" name="neighborhood" id="formCEP" class="form-control" v-model="neighborhood" />
                        <ErrorMessage name="neighborhood" class="text-danger" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="FormLogradouro">Complemento</label>
                        <Field type="text" name="complement" id="FormLogradouro" class="form-control"
                            v-model="complement" />
                        <ErrorMessage name="complement" class="text-danger" />
                    </div>
                </div>
            </div>
            <div class="pt-5">
                <button type="submit" class="btn btn-success btn-block mb-4">Cadastre-se</button>
                <button type="button" @click="returnRegisters" class="btn btn-warning btn-block mb-4 mx-2">Voltar</button>
            </div>

        </div>
    </Form>
</template>

<script>
import axios from 'axios';
import { Form, Field, ErrorMessage, } from 'vee-validate'
import * as yup from 'yup'

export default {
    name: "RegisterNewStudent",

    data() {
        return {
            name: "",
            email: "",
            contact: "",
            date_birth: "",
            cep: "",
            street: "",
            number: "",
            neighborhood: "",
            city: "",
            state: "",
            complement: "",

            errorMessage: "",

            validateSchema: yup.object().shape({
                name: yup.string().required('Campo obrigatório *'),
                email: yup.string().optional().email('O email informado não é valido'),
                contact: yup.string().required('Campo obrigatório *'),
                cep: yup.string().min(8, 'O CEP deve conter 8 dígitos.*').required('O CEP é obrigatório.*'),
                street: yup.string().required('Campo obrigatório *'),
                number: yup.string().required('Campo obrigatório *'),
                neighborhood: yup.string().required('Campo obrigatório *'),
                city: yup.string().required('Campo obrigatório *'),
                state: yup.string().required('Campo obrigatório *'),
            })
        }
    },

    components: {
        Form,
        Field,
        ErrorMessage,
    },

    methods: {
        registerNewStudent() {
            axios({
                url: 'http://localhost:3000/students',
                method: 'POST',
                data: {
                    name: this.name,
                    email: this.email,
                    contact: this.contact,
                    date_birth: this.date_birth,
                    cep: this.cep,
                    street: this.street,
                    number: this.number,
                    neighborhood: this.neighborhood,
                    city: this.city,
                    province: this.state,
                    complement: this.complement,

                }

            })


                .then(() => {
                    alert('Cadastrado com sucesso!')
                    this.$router.push('/aluno')
                })
                .catch(() => {
                    alert('Não foi possível cadastrar o usuário')
                })
        },

        returnRegisters() {
            this.$router.push('aluno')
        },

        getInfoCEP() {
            const cep = this.cep.replace('-', '')
            if (cep.length === 8) {
                axios
                    .get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(({ data }) => {
                        if (data.erro) return
                        this.street = data.logradouro
                        this.neighborhood = data.bairro
                        this.city = data.localidade
                        this.state = data.uf
                        this.addressRequested = true

                    })
                    .catch((error) => {
                        this.errorMessage = `Erro ao consultar o CEP: ${cep}`

                    })
            }
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 50%;
}
</style>