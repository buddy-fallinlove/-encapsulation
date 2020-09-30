<template>
<div>
<h2>趋势组件</h2>
<a-divider>正常颜色</a-divider>
<div class="flex al-center">
    <trend type="up">
        <template v-slot:text>营业额</template>
        5%
    </trend>
    <trend type="down" class="m-l2">
        <template v-slot:text>利润</template>
        5%
    </trend>
</div>
<br>
<a-divider>颜色反转</a-divider>
<div class="flex al-center">
    <trend type="up" :is-reserve="true">
        <template v-slot:text>营业额</template>
        5%
    </trend>
    <trend type="down" :is-reserve="true" class="m-l2">
        <template v-slot:text>利润</template>
        5%
    </trend>
</div>

</div>
</template>

<script lang="ts">
import trend from '@/components/trend/trend.vue'
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
    components: {
        trend

    },
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
