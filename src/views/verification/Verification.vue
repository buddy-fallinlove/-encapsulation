<template>
<div class="box">
    <h2>倒计时按钮</h2>
    <br>
    <verification></verification>
</div>
</template>

<script lang="ts">
import verification from '@/components/verification/verification.vue'
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
interface Data {
    username: string;
}
export default defineComponent({
    name: '',
    props: {},
    components: {
        verification
    },
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({
            username: ''
        })
        return {
            ...toRefs(data),
        }
    },
})
</script>

<style lang="scss" scoped>
.box {
    padding: 20px;
    width: 100%;
}
</style>
