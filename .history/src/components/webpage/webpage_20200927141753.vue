<template>
<div class=" container">

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

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
}

.iframe {
    width: 100%;
    height: 100%;
}
</style>
