import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Store from './store'
import axios from 'axios'

const app = createApp(App)

app.use(router, axios)
app.use(Store)
app.use(PrimeVue)
app.use(ToastService)

app.mount('#app')
