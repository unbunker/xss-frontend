/* eslint-disable import/order */
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import { createApp } from 'vue'
import '@/scss/style.scss';
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.config.devtools = true;
app.use(pinia)



app.use(vuetify)
app.use(router)
app.mount('#app')
