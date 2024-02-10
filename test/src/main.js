import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { routers } from '@/router'
import './assets/style/main.scss'
import App from './App.vue'

// Делаем компонент глобальным
import BtnMore from '@/components/UI/BtnMore.vue'


const app = createApp(App)
const pinia = createPinia()


app.use(routers)
app.use(pinia)
app.component('BtnMore', BtnMore)

app.mount('#app')
