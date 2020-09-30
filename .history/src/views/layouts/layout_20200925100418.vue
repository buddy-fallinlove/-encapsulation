<template>
<div id="components-layout-demo-basic">
    <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
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

<style lang="scss" scoped>

</style>
