<template>
<template v-if="Array.isArray(imgUrl)">
    <div class="flex al-center">
        <div @click="previewImgs(item, index)" class="m-r1 m-l1 cur-p" v-for="(item, index) in imgUrl" :key="index">
            <img :src="item" alt="" width="200" height="200">
        </div>
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
