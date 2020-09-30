<template>
<div class="box">
    <a-input style="width: 600px" placeholder="输入的内容会被复制" v-model:value="value"></a-input>
    <a-button class="m-l1" @click="copyStr" type="danger">复制</a-button>
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
    message
} from "ant-design-vue";
import {
    useCopy
} from "@/components/hooks/cotytext";

interface Data {
    value: string;
}

export default defineComponent({
    name: "",
    components: {},
    props: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const {
            copy
        } = useCopy();
        const data: Data = reactive < Data > ({
            value: "",
        });
        const copyStr = () => {
            copy(data.value);
            message.success("复制成功");
        };
        return {
            ...toRefs(data),
            copyStr,
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
