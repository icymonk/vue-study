<template>
  <div id="app">
    <div id="calculator">
      <div id="screen">
        <input type="text" v-model="screenValue">
      </div>
      <div id="body">
        <button v-for="key in keyList" :key="key" @click="inputKey(key)">{{ key }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      screenValue: "",
      keyList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    };
  },
  methods: {
    inputKey(key) {
      this.screenValue += key;
    }
  }
};
</script>

<style scoped lang="less">
#calculator {
  display: flex;
  flex-direction: column;
  #screen > input {
    width: 100%;
    height: 60px;
    text-align: right;
    font-size: 40px;
  }
  #body {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    .row {
      display: flex;

      justify-content: space-around;
    }
  }
}
button {
  float: left;
  width: 25%;
  font-size: 24px;
  height: 120px;
  background: none;
  border: 1px solid grey;
  &:focus {
    outline: none;
  }
}
</style>
