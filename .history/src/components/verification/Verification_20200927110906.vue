<template>
<div>
    <a-button type="danger" ghost> </a-button>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    onMounted,
} from "vue";

interface Data {
    time: number;
    text: string;
}
export default defineComponent({
    name: "",
    props: {

    },
    components: {},
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            text: '',
            time: 0
        });
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style scoped lang='scss'>
</style>
