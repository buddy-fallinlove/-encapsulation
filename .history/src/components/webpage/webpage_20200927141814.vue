<template>
<div class=" container">
<iframe src="" frameborder="0"></iframe>
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
.container {
    width: 100%;
    height: 100%;
}

.iframe {
    width: 100%;
    height: 100%;
}
</style>
