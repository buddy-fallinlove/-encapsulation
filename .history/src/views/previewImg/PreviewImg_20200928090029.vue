<template>
<div class="box">
    <div>
        <h2>图片预览</h2>
        <br />
        <h3>单图片预览,点击遮罩层可关闭</h3>
        <previewImg :img-url="imgUrl" @clickPreviewImg="clickPreviewImg"></previewImg>
        <br />
        <h3>单图片预览,点击遮罩层不可关闭</h3>
        <previewImg :is-mark="false" :img-url="imgUrl" @clickPreviewImg="clickPreviewImg"></previewImg>
        <br />
    </div>
    <div>
        <br />
        <br />

        <br />

        <br />

        <br />

        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br /><br />

        <br /><br />

        <h3>多图片预览,点击遮罩层可关闭</h3>
        <previewImg :img-url="imgs" @clickPreviewImgs="clickPreviewImgs"></previewImg>
        <br />
        <h3>多图片预览,点击遮罩层不可关闭</h3>
        <previewImg :is-mark="false" :img-url="imgs" @clickPreviewImgs="clickPreviewImgs"></previewImg>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs
} from "vue";
import {
    message
} from "ant-design-vue";
import previewImg from "@/components/previewImg/previewImg.vue";
interface Data {
    imgUrl: string;
    imgs: string[];
}

export default defineComponent({
    name: "",
    components: {
        previewImg,
    },
    props: {},
    setup() {
        let data: Data = reactive < Data > ({
            imgUrl: require("../../assets/logo.png"),
            imgs: [
                require("../../assets/1.jpg"),
                require("../../assets/2.jpeg"),
                require("../../assets/3.jpg"),
            ],
        });
        let clickPreviewImg = () => {
            message.success("您点击了预览的图片");
        };
        let clickPreviewImgs = (item: string) => {
            message.success(`您点击了${item}这一张图片`);
        };
        return {
            ...toRefs(data),
            clickPreviewImg,
            clickPreviewImgs,
        };
    },
});
</script>

<style lang="scss" scoped>
.mask {
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.trend {
    height: 60px;
    border: 1px solid #ccc;
    padding-left: 35px;
}

.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
</style>
