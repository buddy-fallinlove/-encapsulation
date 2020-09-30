<template>
<div class="box">
    <h2>底部工具栏</h2>
    <foottoolbar>
        <template v-slot:left>
            这是一段内容
        </template>
        <template v-slot:right>
            <a-button class="m-r1">取消</a-button>
            <a-button type="primary">确定</a-button>
        </template>
    </foottoolbar>
</div>
</template>

<script lang="ts">
import foottoolbar from "../../components/footToolBar/FootToolBar.vue"
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
