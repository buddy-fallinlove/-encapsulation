<template>
<div></div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
import {
    message
} from "ant-design-vue";
import editable from "../../components/editable/editable.vue";
interface Data {}
export default defineComponent({
    name: "",
    props: {},
    components: {
        editable,
    },
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            username: "",
        });
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style scoped lang='scss'>
</style>
