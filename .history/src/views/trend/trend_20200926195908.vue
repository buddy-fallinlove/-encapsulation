<template>
<h2>趋势组件</h2>
<a-divider>正常颜色</a-divider>
<div class="flex a-center qtrend">
    <qtrend type="up">
        <template v-slot:text>营业额</template>
        5%
    </qtrend>
    <qtrend type="down" class="ml-2">
        <template v-slot:text>利润</template>
        5%
    </qtrend>
</div>
<br>
<a-divider>颜色反转</a-divider>
<div class="flex a-center qtrend">
    <qtrend type="up" :is-reserve="true">
        <template v-slot:text>营业额</template>
        5%
    </qtrend>
    <qtrend type="down" :is-reserve="true" class="ml-2">
        <template v-slot:text>利润</template>
        5%
    </qtrend>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'

interface Props {

}

interface Data {

}

export default defineComponent({
    name: "",
    components: {},
    props: {},
    setup(props: Props, ctx: SetupContext) {
        let data: Data = reactive < Data > ({})
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style scoped lang="scss"></style>
