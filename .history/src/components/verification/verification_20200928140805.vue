<template>
<div>
    <a-button type="danger" :disabled="false" ghost @click="handleClick">
        {{text}}
    </a-button>
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
    ison: boolean;
}
export default defineComponent({
    name: "",
    props: {
        time: {
            type: Number,
            default: 60,
        },
        text: {
            type: String,
            default: "发送验证码",
        },
        sendText: {
            type: String,
            default: "后重新发送",
        },
        endText: {
            type: String,
            default: "重新发送",
        },
    },
    components: {},
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            text: "",
            time: 0,
            ison: false
        });
        const handleClick = () => {
            const timer = setInterval(() => {
                data.time--
                data.text = `${data.time}秒${props.sendText}`
                data.ison = true
                if (data.time === 0) {
                    clearInterval(timer)
                    data.text = props.endText
                    data.time = props.time
                    data.ison = false
                }
            }, 1000)
        }
        onMounted(() => {
            data.text = props.text
            data.time = props.time
        })
        return {
            ...toRefs(data),
            handleClick
        };
    },
});
</script>

<style scoped lang='scss'>
</style>
