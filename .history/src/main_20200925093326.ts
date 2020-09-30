import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

app.use(store)
// app.use(Antd)
app.use(router)
app.mount('#app')
