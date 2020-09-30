/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
<template>
<edit-text text="jack" @ok="ok" @cancel="cancel"></edit-text>
<br>
<edit-text text="jack"></edit-text>
<br>
<edit-text text="tom"></edit-text>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
import {
    message
} from "ant-design-vue"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {}

export default defineComponent({
    name: "",
    components: {},
    props: {},
    emits: ['ok', 'cancel'],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({})
        const ok = () => {
            message.success('点击了确定')
        }
        const cancel = () => {
            message.info('点击了取消')
        }
        return {
            ...toRefs(data),
            ok,
            cancel
        }
    }
})
</script>

<style scoped lang="scss"></style>
