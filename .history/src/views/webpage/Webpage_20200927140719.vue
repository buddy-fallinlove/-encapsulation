<template>
<div class="flex al-center m-b2">
    <a-button type="danger" class="m-r2" ghost>打开内嵌网页</a-button>
    <a-button type="danger" class="m-r2" ghost>关闭内嵌网页</a-button>
</div>
</template>

<script lang="ts">
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

<style scoped lang="scss">

</style>
