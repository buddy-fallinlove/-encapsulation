<template>
<div class="content flex">
    <div class="box">
        <div v-for="(item, index) in titel" :key="index" @click="add(item, index)" class="flex text al-center cur-p" :class="{ dv: item.path === $router.currentRoute.value.path }">
            <component :is="item.icon"></component>
            <div class="mar-l">{{ item.name }}</div>
        </div>
    </div>
    <div class="boxring">
        <router-view></router-view>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
import {
    useRouter
} from "vue-router";
interface Data {
    titel: object[];
}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    setup(props, ctx: SetupContext) {
        const router = useRouter();
        const data: Data = reactive < Data > ({
            titel: [{
                    name: "首页",
                    icon: "HomeOutlined",
                    path: "/"
                },
                {
                    name: "常用hooks",
                    icon: "DeploymentUnitOutlined",
                    path: "/hooks"
                },
                {
                    name: "图片预览",
                    icon: "MonitorOutlined",
                    path: "/previewImg"
                },
                {
                    name: "趋势",
                    icon: "AreaChartOutlined",
                    path: "/trend"
                },
                {
                    name: "底部工具栏",
                    icon: "ToolOutlined",
                    path: "/foottool"
                },
                {
                    name: "通知图标",
                    icon: "BellOutlined",
                    path: "/notice"
                },
                {
                    name: "内嵌网页",
                    icon: "FundOutlined",
                    path: '/webpage'
                },
                {
                    name: "验证码按钮",
                    icon: "MessageOutlined",
                    path: '/verification'
                },
                {
                    name: "进度条",
                    icon: "PaperClipOutlined",
                    path: '/progress'
                },
                {
                    name: "二维码",
                    icon: "QrcodeOutlined",
                    path: '/qrcode'
                },
                {
                    name: "复制文本",
                    icon: "CopyrightCircleOutlined",
                    path: '/copytext'
                },
                {
                    name: "生成水印",
                    icon: "BorderTopOutlined",
                    path: '/watermark'
                },
                {
                    name: "可编辑文字",
                    icon: "EditOutlined",
                    path: '/editable'
                },
            ],
        });
        const add = (item: any, index: number): void => {
            console.log(item);
            router.push(item.path);
        };
        return {
            ...toRefs(data),
            add,
        };
    },
});
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    background: rgb(240, 242, 245);
}

.box {
    width: 220px;
    height: 100vh;
    background: white;
}

.text {
    width: 100%;
    height: 40px;
    margin: 5px 0;
    padding: 0 25px;
}

.dv {
    background: rgb(230, 247, 255);
    border-right: 3px solid rgb(24, 144, 255);
    color: rgb(24, 144, 255);
}

.mar-l {
    margin-left: 13px;
}

.boxring {
    margin-top: 25px;
    margin-left: 15px;
    width: 100%;
    background: white;
}
</style>
