<template>
<div>
    <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout>
            <a-layout-sider>Sider</a-layout-sider>
            <a-layout-content>Content</a-layout-content>
        </a-layout>
        <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
// interface Data {
// }
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

<style scoped lang="scss">

</style>
