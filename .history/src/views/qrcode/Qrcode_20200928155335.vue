<template>
<div class="box">
    <a-input class="boxw" v-model:value="value"></a-input>
    <a-button></a-button>
</div>
<br>
<br>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
interface Data {
    value: string;
}
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({
            value: ''
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
}

.boxw {
    width: 600px;
    margin-right: 20px;
}
</style>
