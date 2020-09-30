<template>
<div v-if="flag">
    <input type="text" ref="iptRef" style="width: 300px;" v-model="text" @blur="handBlur">
    <!-- <a-input ref="iptRef" style="width: 300px;" v-model:value="text" @blur="handBlur"></a-input> -->
    <a-button class="mr-1 ml-1" type="primary" @click="ok" style="z-index: 99">确定</a-button>
    <a-button @click="cancel" style="z-index: 99">取消</a-button>
</div>
<div v-else @click="handleClick">
    {{text}}
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    ref,
    nextTick,
    watch
} from 'vue'
interface Data {
    flag: boolean;
}

export default defineComponent({
    name: "EditText",
    components: {},
    props: {
        text: {
            type: String,
            required: true
        }
    },
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            flag: false
        })
        const iptRef = ref < any > (null)
        const handleClick = () => {
            data.flag = true
            nextTick(() => {
                iptRef.value.focus()
            })
        }
        const handBlur = () => {
            setTimeout(() => {
                data.flag = false
            }, 80)
        }
        const ok = () => {
            ctx.emit('ok')
            data.flag = false
        }
        const cancel = () => {
            ctx.emit('cancel')
            data.flag = false
        }
        return {
            ...toRefs(data),
            handleClick,
            handBlur,
            ok,
            cancel,
            iptRef
        }
    }
})
</script>

<style scoped lang="scss"></style>
