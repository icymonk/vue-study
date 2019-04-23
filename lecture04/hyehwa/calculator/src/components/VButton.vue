<template>
  <button @click="onClick(button)">{{ button.text }}</button>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      default: () => ({ text: "버튼" }),
    },
  },
  methods: {
    onClick(button) {
      this.$emit("click", button)
    },
  },
}
</script>

<style lang="less" scoped>
@cols: 8;
button {
  width: calc(100% / @cols);
  height: calc(100rem / @cols);
  font-size: 40px;
  background: none;
  margin: 0;
  &:focus {
    outline: none;
  }
}
</style>
