<template>
<div class="box">
    <a-input class="boxw" v-model:value="value" placeholder="请输入文字或者网址"></a-input>
    <a-button type="danger" ghost @click="handleClick">生成二维码</a-button>
</div>
<br>
<br>
<div v-if="qrcodeUrl">
    <h2>不设置宽高</h2>
    <qrcode :qrcodeUrl="qrcodeUrl"></qrcode>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
import qrcode from '@/components/qrcode/qrcode.vue'
interface Data {
    value: string;
    qrcodeUrl: string;
}
export default defineComponent({
    name: '',
    props: {},
    components: {
        qrcode
    },
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({
            value: '',
            qrcodeUrl: '',
        })
        const handleClick = () => {
            data.qrcodeUrl = data.value
            console.log(data.qrcodeUrl)
        }
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
