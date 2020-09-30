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
#components-layout-demo-basic {
    text-align: center;
}

#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
}

#components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
}

#components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    line-height: 120px;
}

#components-layout-demo-basic .ant-layout-content {
    background: rgba(16, 142, 233, 1);
    color: #fff;
    min-height: 120px;
    line-height: 120px;
}

#components-layout-demo-basic>.ant-layout {
    margin-bottom: 48px;
}

#components-layout-demo-basic>.ant-layout:last-child {
    margin: 0;
}
</style>
