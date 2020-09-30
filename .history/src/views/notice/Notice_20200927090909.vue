<template>
<div class="box">
    <h2>通知图标</h2>
    <br>
    <h3>普通通知</h3>
    <notice></notice>
</div>
</template>

<script lang="ts">
import notice from "../../components/notice/notice.vue"
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
interface Data {
    username: string;
}
export default defineComponent({
    name: "",
    props: {},
    components: {
        notice,
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

<style lang="scss" scoped>
.box {
    width: 100%;
    padding: 20px;
}
</style>
