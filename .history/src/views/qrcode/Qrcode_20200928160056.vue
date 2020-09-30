<template>
<div class="box">
    <a-input class="boxw" v-model:value="value" placeholder="请输入文字或者网址"></a-input>
    <a-button type="danger" ghost @click="handleClick">生成二维码</a-button>
</div>
<br>
<br>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
interface Data {
    value: string;
}
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({
            value: ''
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

.boxw {
    width: 600px;
    margin-right: 20px;
}
</style>
