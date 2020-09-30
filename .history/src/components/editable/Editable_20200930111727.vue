<template>
<div v-if="flag">
    <a-input></a-input>
    <a-button></a-button>
    <a-button></a-button>
</div>
<div v-else>
    {{}}
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    ref,
    nextTick,
    watch
} from 'vue'
interface Data {
    flag: boolean;
}
export default defineComponent({
    name: '',
    props: {
        text: {
            type: String,
            required: true
        }

    },
    components: {},
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({
            flag: false,
        })
        return {
            ...toRefs(data),
        }
    },
})
</script>

<style scoped lang='scss'>

</style>
