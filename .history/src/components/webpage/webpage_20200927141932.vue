<template>
<div class=" container">
    <iframe class="iframe" :src="src"></iframe>
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
    props: {
        src: {
            type: String,
            required: true
        }
    },
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
