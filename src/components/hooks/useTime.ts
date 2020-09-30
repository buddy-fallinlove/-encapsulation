import {ref,onUnmounted ,onMounted} from 'vue'
import datjs from 'dayjs'
export const useTime = () => {
     const date = ref<any>(datjs().format('YYYY-MM-DD HH:mm:ss'))
     let timer: any = null
     onMounted( () => {
        timer = setInterval( () => {
            date.value = ref<any>(datjs().format('YYYY-MM-DD HH:mm:ss'))
         },1000)
     })
     onUnmounted( () => {
         clearInterval(timer)
     })
     return{
        date
     }
}