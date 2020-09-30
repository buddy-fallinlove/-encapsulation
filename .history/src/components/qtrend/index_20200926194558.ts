import qtrend from  "@/qtrend.vue"
import {App} from "vue"

qtrend.instal =(app:App)=>{
    app.component(qtrend.name! ,qtrend)
}

export default qtrend