<template>
  <button @click="$emit('click', button)">{{ button.text }}</button>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      default: function() {
        return { text: "버튼", type: "number" }
      },
    },
  },
}
</script>

<style lang="less" scoped>
@cols: 4;
button {
  width: calc(100% / @cols);
  height: calc(100vw / @cols);
  font-size: 40px;
  background: none;
  margin: 0;
  &:focus {
    outline: none;
  }
}
</style>
