<template>
  <div id="mole">
    <mole-block
      v-for="(block, index) in blockList"
      :key="block.id"
      :block="block"
      :blockStyle="blockStyle"
      @click="onClick(index)"
    ></mole-block>
    <mole-config-box
      v-bind="{ col, row, mole, currentMole, found, time, isReversible }"
      @update="update"
      @init="init"
    ></mole-config-box>
  </div>
</template>

<script>
import MoleBlock from "./components/MoleBlock.vue"
import MoleConfigBox from "./components/MoleConfigBox.vue"
import { getRandom, shuffle, delay, setAll } from "./utils/index.js"

export default {
  name: "app",
  components: { MoleBlock, MoleConfigBox },
  data() {
    return {
      col: 5,
      row: 5,
      mole: 5,
      currentMole: 5,
      found: 0,
      time: 0,
      isEnd: false,
      isReversible: false,
      timer: null,
      blockList: [],
      blockStyle: {},
    }
  },
  methods: {
    update(key, value) {
      this[key] = value
    },
    async init() {
      this.stopTimer()
      this.reset()
      this.makeBlockStyle()
      this.makeBlockList()
      await this.preview()
      this.startTimer()
    },
    reset() {
      this.isEnd = false
      this.found = 0
      this.time = 0
      this.currentMole = this.mole
    },
    end() {
      this.isEnd = true
      this.stopTimer()
      const accuracy = Math.round(
        (this.currentMole / this.blockList.filter(block => block.show).length) *
          100,
      )
      alert(`성공 걸린시간: ${this.time / 1000}초, 정확도: ${accuracy}%`)
    },
    startTimer() {
      this.stopTimer()
      const start = Date.now()
      this.timer = setInterval(_ => {
        this.time = Date.now() - start
      }, 91)
    },
    stopTimer() {
      this.timer && clearInterval(this.timer)
    },
    preview() {
      this.isReversible = false
      setAll(this.blockList, "show", true)
      return delay(_ => {
        setAll(this.blockList, "show", false)
        this.isReversible = true
      }, 3000)
    },
    makeBlockList() {
      const buildBlock = (_, index) => ({
        id: index,
        hasMole: index < this.mole,
        show: false,
      })
      this.blockList = Array(this.col * this.row)
        .fill()
        .map(buildBlock)
      this.blockList = shuffle(this.blockList)
    },
    onClick(index) {
      if (this.isEnd) return
      if (!this.isReversible) return

      this.blockList[index].show = true
      this.blockList[index].hasMole && this.found++
      if (this.found === this.currentMole) delay(this.end, 100)
    },
    makeBlockStyle() {
      this.blockStyle = {
        width: `calc((100% - ${(this.col - 1) * 2}px - 2px) / ${this.col})`,
        height: `calc((100vw - ${(this.col - 1) * 2}px - 2px) / ${this.col})`,
      }
    },
  },
  mounted() {
    this.init()
  },
}
</script>

<style lang="less" scoped>
#mole {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
