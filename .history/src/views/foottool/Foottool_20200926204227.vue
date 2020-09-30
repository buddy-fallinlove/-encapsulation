<template>
<div class="box">
    <h2>底部工具栏</h2>
</div>
</template>

<script lang="ts">
import foottoolbar from "../../components/footToolBar/FootToolBar.vie"
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
        foottoolbar
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

<style lang="scss" scoped>
.box {
    padding: 20px;
}
</style>
