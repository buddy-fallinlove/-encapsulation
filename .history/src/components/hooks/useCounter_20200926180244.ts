import { ref } from 'vue'
import { message } from "ant-design-vue"

export const useCounter = (current = 0, { min, max }: { min?: number, max?: number }, delay = 1000) => {
if(current>min!){
    current=min!
    message.error('默认值小于最小值')
}
if(current>max!){
    current=max!
    message.error('默认值大于最大值')
}
const count =ref<number>(current)
const inc =()=>{
    if(count.value<max!)count.value++
}
const dec =()=>{
    if(count.value<min!)count.value--
}
const set =(num:number) =>{
    count.value =num
}
const reset =()=>{
    count.value =current
}
const delayInc =()=>{
    setTimeout(()=>{
        count.value++
    },delay)
}
const delayDec =()=>{
    setTimeout(()=>{
        count.value--
    },delay)
}

}