<template>
<div class="box">
    <div class="flex al-center m-b2">
        <a-button type="danger" class="m-r2" ghost>打开内嵌网页</a-button>
        <a-button type="danger" class="m-r2" ghost>关闭内嵌网页</a-button>
    </div>
</div>
<webpage :src="src" v-if="flag"></webpage>
</template>

<script lang="ts">
import webpage from '@/components/webpage/webpage.vue'
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
interface Data {
    flag: boolean;
    src: string;
}
export default defineComponent({
    name: '',
    props: {},
    components: {
        webpage
    },
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({
            flag: false,
            src: 'https://www.baidu.com'
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
