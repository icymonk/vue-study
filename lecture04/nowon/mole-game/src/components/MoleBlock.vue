<template>
  <div :class="{ show: block.show, block: true }" :style="blockStyle" @click="$emit('click')">
    <mole-image v-if="block.hasMole" v-show="block.show"/>
  </div>
</template>

<script>
import MoleImage from "./MoleImage.vue"

export default {
  name: "mole-block",
  components: { MoleImage },
  props: {
    block: {
      type: Object,
      default() {
        return {}
      },
    },
    col: {
      type: Number,
    },
    row: {
      type: Number,
    },
    blockStyle: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="less" scoped>
.block {
  background: #ddd;
  border: 1px solid black;
}
.show {
  background: white !important;
}
</style>
