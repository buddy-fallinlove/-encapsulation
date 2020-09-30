<template>
<div class="flex al-center">
    <slot name="text">
        <div class="icon" :class="[is]"></div>
    </slot>

</div>
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

        const data: Data = reactive < Data > ({})
        return {
            ...toRefs(data),
        }
    },
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
