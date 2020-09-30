<template>
<div class="box flex">
    <a-button class="m-r2" type="danger" ghost @click="addWatermark('23333')">添加水印</a-button>
    <a-button @click="addWatermark('')" type="danger" ghost>取消水印</a-button>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
import {
    useWatermark
} from "@/components/hooks/wateRmark";
interface Data {}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    setup(props, ctx: SetupContext) {
        const {
            setWatermark
        } = useWatermark();
        const data: Data = reactive < Data > ({});
        const addWatermark = (str: string) => {
            setWatermark(str)
        }
        return {
            ...toRefs(data),
            addWatermark
        };
    },
});
</script>

<style lang="scss" scoped>
.box {
    padding: 20px;
}
</style>
