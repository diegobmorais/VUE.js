import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
//importe mitt
import mitt from 'mitt'

const emitter = mitt()

const vue = createApp(App)

vue.config.globalProperties.emitter = emitter

vue.use(router)
vue.mount('#app')

