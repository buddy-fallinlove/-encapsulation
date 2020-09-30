<template>
<div class="box">
    <h2>通知图标</h2>
    <br>
    <h3>普通通知</h3>
    <!-- :count控制数字大小 -->
    <notice :count="5" class="m-r2"></notice>
    <br>
    <h3>消息超过99</h3>
    <notice :count="190" class="m-r2"></notice>
    <br>
    <h3>默认弹出菜单</h3>
    <notice :count="108" class="m-r2"></notice>
    <br>
    <h3>控制菜单方向</h3>
    <notice :count="10" class="m-r2"></notice>
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
