<template>
<div class="box">
    <div class="fz-20">鼠标移动坐标</div>
    <div>{{ x }} --- {{ y }}</div>
    <div class="fz-20">时间</div>
    <div>{{ date._value }}</div>
    <div class="fz-20">本地存储</div>
    <div class="">
        <h2>{{ getMessage() }}</h2>
        <a-button type="danger" ghost @click="setMessage">
            储存localStorage
        </a-button>
        <a-button type="danger" ghost @click="clearMessage">
            清除localStorage
        </a-button>

        <a-button type="danger" ghost> sessionStorage同理 </a-button>
    </div>
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
    useMouse
} from "@/components/hooks/useMouse";
import {
    useTime
} from "@/components/hooks/useTime";
import {
    useLocalStorage,
    useSessionStorage,
} from "../../components/hooks/useStorage";

interface Data {
    username: string;
}
export default defineComponent({
    name: "",
    props: {},
    components: {
        //  countdown
    },
    setup(props, ctx: SetupContext) {
        const {
            x,
            y
        } = useMouse();
        const {
            date
        } = useTime();
        let {
            getMessage,
            setMessage,
            clearMessage
        } = useLocalStorage("user-obj", {
            name: "Hello~",
        });
        const data: Data = reactive < Data > ({
            username: "",
        });
        return {
            ...toRefs(data),
            x,
            y,
            getMessage,
            setMessage,
            clearMessage,
            date,
        };
    },
});
</script>

<style lang="scss" scoped>
.box {
    padding: 30px;
}
</style>
