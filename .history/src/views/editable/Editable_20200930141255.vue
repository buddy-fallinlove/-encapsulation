<template>
  <div>
    <edittexts v-model:value="value" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, nextTick } from "vue";
import edittexts from "../../components/edittexts/edittexts.vue";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    edittexts,
  },
  setup(props, ctx: SetupContext) {
    // const puts = ref();
    const data: Data = reactive<Data>({
      value: "小小",
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang="scss">
</style>
