import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { routers } from '@/router'
import VueLazyload from 'vue-lazyload'
import './assets/style/main.scss'
import App from './App.vue'

import BtnMore from '@/components/UI/BtnMore.vue'
import Loader from "@/components/UI/Loader.vue";

import errorimage from '@/assets/img/nophoto.jpg'

const app = createApp(App)
const pinia = createPinia()

app.use(VueLazyload, {
    error: errorimage
})
app.use(routers)
app.use(pinia)
app.component('BtnMore', BtnMore)
app.component('Loader', Loader)
app.mount('#app')
