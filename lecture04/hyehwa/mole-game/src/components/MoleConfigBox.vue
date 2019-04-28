<template>
  <div id="configuation">
    <div>
      <label for="col">col</label>
      <input id="col" type="number" v-model.number="_col">
    </div>
    <div>
      <label for="row">row</label>
      <input id="row" type="number" v-model.number="_row">
    </div>
    <div>
      <label for="mole">mole</label>
      <input id="mole" type="number" v-model.number="_mole">
    </div>
    <div>
      <button @click="isReversible && $emit('init')">START</button>
      found: {{ this.found }} / {{ this.currentMole }}
      time: {{ this.time | millisecondToSecond | toFixed(2) }}s
    </div>
  </div>
</template>

<script>
export default {
  props: {
    col: Number,
    row: Number,
    mole: Number,
    currentMole: Number,
    found: Number,
    time: Number,
    isReversible: Boolean,
  },
  filters: {
    millisecondToSecond(ms) {
      return ms / 1000
    },
    toFixed(value, num = 0) {
      return value.toFixed(num)
    },
  },
  computed: {
    _col: {
      get() {
        return this.col
      },
      set(value) {
        this.$emit("update", "col", value)
      },
    },
    _row: {
      get() {
        return this.row
      },
      set(value) {
        this.$emit("update", "row", value)
      },
    },
    _mole: {
      get() {
        return this.mole
      },
      set(value) {
        this.$emit("update", "mole", value)
      },
    },
  },
}
</script>

<style lang="less" scoped>
#configuation {
  width: 100%;
  font-size: 24px;
  input {
    margin-left: 20px;
    display: inline-block;
    text-align: right;
    width: 50px;
    font-size: inherit;
  }
}
</style>

