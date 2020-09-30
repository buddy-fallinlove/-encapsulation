<template>
<div class="flex al-center">
    <slot name="text"></slot>
    <div class="icon" :class="[isReserve? 'down' : 'up']" v-if="type==='up'">
        <CaretUpOutlined />
    </div>
    <div class="icon" :class="[isReserve? 'up' : 'down']" v-if="type==='down'">
        <CaretDownOutlined />
    </div>
    <slot></slot>
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
    name: "Trend",
    components: {},
    props: {
        type: {
            type: String,
            default: 'up'
        },
        isReserve: {
            type: Boolean,
            default: false
        }
    },
    setup(props: Props, ctx: SetupContext) {
        let data: Data = reactive < Data > ({})
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style lang="scss" scoped>
.icon {
    font-size: 16px;
    margin: 0 5px;
    height: 100%;
}

.up {
    color: #f5222d;
}

.down {
    color: #52c41a;
}
</style>
