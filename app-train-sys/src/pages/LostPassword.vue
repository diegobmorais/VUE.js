<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <Form class="h-100 p-5 bg-light border rounded-3" @submit="sendEmail" :validation-schema="validateSchema">
                    <h2 class="bi bi-award-fill text-success"> Esqueci minha senha</h2>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <Field type="text" name="email" class="form-control"
                                    placeholder="Email cadastrado" v-model="email" />
                                <div class="msg-error campo-error">
                                    <ErrorMessage name="email" />
                                </div>
                                <small class="form-text text-muted">Caso não tenha mais acesso ao e-mail entre em contato
                                    com o administrador.
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-outline-dark mt-2" type="submit">Enviar</button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Form, Field, ErrorMessage, } from 'vee-validate'
import * as yup from 'yup';

export default {
    name: 'LostPassword',

    data() {
        return {
            email: "",
            menssageErro: "",

            validateSchema: yup.object().shape({
                email: yup.string().required("Entre com seu email cadastrado *"),
            })
        }
    },

    components: {

        Form,
        Field,
        ErrorMessage,
    },
    methods: {
        sendEmail() {

            alert("Enviado email de recuperação de senha")
            this.$router.push("/")
        }

    },

}
</script>
  
<style scoped>
.msg-error {
    color: #dc3545;
    font-size: 14px;
    margin-top: 4px;
}

/* Exemplo de estilo para borda vermelha no campo de erro */
.campo-error.is-invalid {
    border-color: #dc3545;
}
</style>
  