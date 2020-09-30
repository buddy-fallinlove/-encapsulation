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
    <div>
        <a-button type="danger" ghost size="small" @click="inc">添加</a-button>
        <a-button type="danger" ghost size="small" @click="dec">减少</a-button>
        <a-button type="danger" ghost size="small" @click="set(30)">设置</a-button>
        <a-button type="danger" ghost size="small" @click="reset">重置</a-button>
        <a-button type="danger" ghost size="small" @click="delayInc(1000)"></a-button>
        <a-button type="danger" ghost size="small" @click="delayDec(1000)"></a-button>
        <a-button type="danger" ghost size="small"></a-button>
        <a-button type="danger" ghost size="small"></a-button>
    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    ref
} from "vue";
import {
    useMouse
} from "@/components/hooks/useMouse";
import {
    useTime
} from "@/components/hooks/useTime";
import {
    useCounter
} from "@/components/hooks/useCounter";
import {
    useLocalStorage,
    useSessionStorage,
} from "@/components/hooks/useStorage";

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
        const current = ref < number > (0);
        const {
            getMessage,
            setMessage,
            clearMessage
        } = useLocalStorage(
            "user-obj", {
                name: "Hello~",
            }
        );
        const {
            count,
            inc,
            dec,
            set,
            reset,
            delayInc,
            delayDec,
            stepDec,
            stepInc,
        } = useCounter(current.value, {
            min: 0,
            max: 100,
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
            count,
            inc,
            dec,
            set,
            reset,
            delayInc,
            delayDec,
            stepDec,
            stepInc
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
