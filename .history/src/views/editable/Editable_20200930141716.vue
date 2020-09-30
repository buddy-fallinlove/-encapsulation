<template>
<div class="box">
    <edittexts v-model:value="value" />
    <br>
    <edittexts v-model:value="value" />
    <br>
    <edittexts v-model:value="value" />
    <br>
    <edittexts v-model:value="value" />
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    nextTick
} from "vue";
import edittexts from "../../components/editable/editable.vue";
interface Data {
    value: string;
}
export default defineComponent({
    name: "",
    props: {},
    components: {
        edittexts,
    },
    setup(props, ctx: SetupContext) {
        // const puts = ref();
        const data: Data = reactive < Data > ({
            value: "小小",
        });
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    padding: 20px;
}
</style>
