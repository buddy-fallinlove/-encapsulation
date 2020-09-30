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
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {}
export default defineComponent({
    name: "",
    props: {},
    components: {
        editable,
    },
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            const ok = () => {
                message.success('点击了确定')
            }
            const cancel = () => {
                message.info('点击了取消')
            }
        });
        return {
            ...toRefs(data),
            ok,
            cancel
        };
    },
});
</script>

<style scoped lang='scss'>
</style>
