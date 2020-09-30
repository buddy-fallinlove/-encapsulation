<template>
<div>
    <div v-if="beets === false" @click="onclick">{{ value }}</div>
    <div v-else>
        <input type="text" v-model="values" class="input" />
        <button class="buts m-left1" @click="onOk">确认</button>
        <button class="bus m-left1" @click="onClose">取消</button>
    </div>
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
    beets: boolean;
    values: string;
}
export default defineComponent({
    name: "",
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    components: {},
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            beets: false,
            values: "",
        });
        onMounted(() => {
            data.values = props.value;
        });
        //
        const onclick = (): void => {
            data.beets = true;
        };
        //取消
        const onClose = (): void => {
            data.beets = false;
        };
        //确定
        const onOk = (): void => {
            ctx.emit("onChir", data.values);
            ctx.emit("update:value", data.values);
            data.beets = false;
        };
        return {
            ...toRefs(data),
            onclick,
            onOk,
            onClose,
        };
    },
});
</script>

<style lang="scss" scoped>
.buts {
    padding: 4px 16px;
    background: rgb(24, 144, 255);
    color: #fff;
    border: 1px solid #ccc;
    outline: none;
}

.bus {
    padding: 4px 16px;
    background: #fff;
    border: 1px solid #ccc;
    outline: none;
}

.bus:hover {
    color: rgb(64, 169, 255);
    border: 1px solid rgb(64, 169, 255);
}

.input {
    width: 300px;
    height: 32px;
    border: 1px solid #ccc;
    outline: none;
    padding-left: 10px;
}
</style>
