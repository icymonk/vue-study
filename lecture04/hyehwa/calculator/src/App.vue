<template>
  <div id="calculator">
    <input class="screen" type="text" :value="input" readonly>
    <v-button v-for="button in buttonList" :key="button.text" :button="button" @click="onClick"></v-button>
  </div>
</template>

<script>
import VButton from "./components/VButton.vue"

export default {
  name: "calculator",
  components: { VButton },
  mounted() {
    window.onkeypress = this.onKeypress
  },
  data() {
    return {
      input: "",
      buttonList: [
        { text: "0", type: "number" },
        { text: "1", type: "number" },
        { text: "2", type: "number" },
        { text: "3", type: "number" },
        { text: "4", type: "number" },
        { text: "5", type: "number" },
        { text: "6", type: "number" },
        { text: "7", type: "number" },
        { text: "8", type: "number" },
        { text: "9", type: "number" },
        { text: "+", type: "operator" },
        { text: "-", type: "operator" },
        { text: "*", type: "operator" },
        { text: "/", type: "operator" },
        { text: "=", type: "result" },
        { text: "C", type: "clear" },
      ],
    }
  },
  methods: {
    onKeypress(e) {
      this.addKey({ text: e.key })
    },
    onClick(key) {
      if (key.type == "result") return this.calc()
      if (key.type == "clear") return this.clear()

      this.addKey(key)
    },
    addKey(key) {
      this.input += key.text
    },
    calc() {
      this.input = eval(this.input)
    },
    clear() {
      this.input = ""
    },
  },
}
</script>

<style lang="less" scoped>
@primary: #2c3e50;
#calculator {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @primary;
}
.screen {
  width: 100%;
  height: 5rem;
  text-align: right;
  font-size: 40px;
}
</style>
