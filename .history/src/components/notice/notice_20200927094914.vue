<template>
<div class="cur-p">
    <a-popover v-if="$slots.content" style="width: 500px" v-model:visible="visible" trigger="click" :placement="placement">
        <a-badge :count="count">
            <BellOutlined class="icon" />
        </a-badge>
        <template v-slot:content>
            <slot name="content"></slot>
        </template>
    </a-popover>

    <template v-if="!$slots.content">
        <a-badge :count="count">
            <BellOutlined class="icon" />
        </a-badge>
    </template>
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
    visible: boolean
}

export default defineComponent({
    name: "NoticeIcon",
    components: {},
    props: {
        count: {
            type: [Number, String],
            default: 0
        },
        placement: {
            type: String,
            default: 'top'
        }
    },
    setup(props: Props, ctx: SetupContext) {
        let data: Data = reactive < Data > ({
            visible: false
        })
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style lang="scss" scoped>
.icon {
    font-size: 22px;
}
</style>
