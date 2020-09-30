<template>
<div>

</div>
</template>

<script lang="ts">
import {
    message
} from "ant-design-vue"
import cotytext from "@/components/hooks/cotytext"
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
interface Data {
    username: string;
}
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({
            username: ''
        })
        return {
            ...toRefs(data),
        }
    },
})
</script>

<style scoped lang='scss'>

</style>
