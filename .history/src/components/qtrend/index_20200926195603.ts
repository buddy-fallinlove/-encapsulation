import trend from "@/components/qtrend/qtrend.vue"
import {App} from "vue"

trend.install = (app: App) => {
  app.component(trend.name!, trend)
}


export default trend
