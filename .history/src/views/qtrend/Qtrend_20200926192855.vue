<template>
<div>
    <h2>趋势组件</h2>
    <a-divder>正常颜色</a-divder>
    <div class="flex al-center trend">
        <trend type="up">

        </trend>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
import {
    types
} from 'node-sass';
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

<style scoped lang='scss'>

</style>
