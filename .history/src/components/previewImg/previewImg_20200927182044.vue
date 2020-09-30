<template>
<template v-if="Array.isArray(imgUrl)">
    <div class="flex al-center">
        <div @click="previewImgs(item, index)"></div>
    </div>
</template>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
interface Data {}
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    setup(props, ctx: SetupContext) {

        //const data: Data = reactive<Data>({
        //})
        return {
            //...toRefs(data),
        }
    },
})
</script>

<style scoped lang='scss'>

</style>
