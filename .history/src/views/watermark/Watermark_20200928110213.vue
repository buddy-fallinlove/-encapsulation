<template>
<div class="box">
    <a-button></a-button>
    <a-button></a-button>
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

        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.box {
    padding: 20px;
}
</style>
