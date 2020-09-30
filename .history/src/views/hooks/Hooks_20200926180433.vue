<template>
<div class="box">
    <div class="fz-20">鼠标移动坐标</div>
    <div>{{ x }} --- {{ y }}</div>
    <br />
    <div class="fz-20">时间</div>
    <div>{{ date._value }}</div>
    <br />
    <div class="fz-20">本地存储</div>
    <div class="box1">
        <div>{{ getMessage() }}</div>
        <a-button type="danger" ghost @click="setMessage">
            储存localStorage
        </a-button>
        <a-button type="danger" ghost @click="clearMessage">
            清除localStorage
        </a-button>
        <a-button type="danger" ghost> sessionStorage同理 </a-button>
    </div>
    <br />
    <h2>计数器</h2>
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
    useCounter
} from "@/hooks/useCounter";
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

.box1 {
    display: flex;
    justify-content: space-around;
    width: 600px;
}
</style>
