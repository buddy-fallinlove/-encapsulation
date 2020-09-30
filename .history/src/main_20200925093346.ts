import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
const icons: any = Icons
// console.log(icons)
for(const i in icons ){
    app.component(i,icons[i])
}
app.use(store)
// app.use(Antd)
app.use(router)
app.mount('#app')
