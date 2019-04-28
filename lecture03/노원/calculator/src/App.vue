<template>
  <div id="app">
    <div id="calculator">
      <div id="screen">
        <input type="text" v-model="screenValue">
      </div>
      <div id="body">
        <calc-button
          v-for="button in buttonList"
          :key="button"
          :button="button"
          @click="onClick(button)"
        ></calc-button>
      </div>
    </div>
  </div>
</template>

<script>
import CalcButton from "./components/CalcButton.vue"

export default {
  name: "app",
  components: {
    CalcButton,
  },
  data() {
    return {
      screenValue: "",
      buttonList: [
        { text: "7", type: "number" },
        { text: "8", type: "number" },
        { text: "9", type: "number" },
        { text: "+", type: "operator" },
        { text: "4", type: "number" },
        { text: "5", type: "number" },
        { text: "6", type: "number" },
        { text: "-", type: "operator" },
        { text: "1", type: "number" },
        { text: "2", type: "number" },
        { text: "3", type: "number" },
        { text: "*", type: "operator" },
        { text: "0", type: "number" },
        { text: "=", type: "result" },
        { text: "/", type: "operator" },
      ],
    }
  },
  methods: {
    onClick(button) {
      if (button.type == "result") return this.calc()

      this.inputKey(button.text)
    },
    inputKey(key) {
      this.screenValue += key
    },
    calc() {
      this.screenValue = eval(this.screenValue)
    },
  },
}
</script>

<style scoped lang="less">
#screen > input {
  width: 100%;
  height: 60px;
  text-align: right;
  font-size: 40px;
}
@cols: 4;
#body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  // button:focus{
  //   outline: none;
  // }
}
</style>
