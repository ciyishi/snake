<template>
  <div id="main">
    <div class="stage">
      <div id="snake">
        <div></div>
      </div>
      <div id="foot">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="score-panel">
      <div>SCORE:<span id="score">0</span></div>
      <div>LEVEL:<span id="level">1</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineExpose } from "vue";
import GameControl from './moduls/GameControl'

onMounted(() => {
  new GameControl()
});



defineExpose({});
// export default defineComponent({
//   setup(props, ctx) {

//   },
// })
</script>

<style lang="less">
@bg-color: #b7d4a9;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: bold 20px "Courier";
}

#main {
  width: 360px;
  height: 420px;
  background-color: @bg-color;
  margin: 100px auto;
  border: 10px solid black;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  .stage {
    width: 304px;
    height: 304px;
    border: 2px solid black;
    position: relative;
    #snake {
      & > div {
        width: 10px;
        height: 10px;
        border: 1px solid @bg-color;
        background-color: black;
        position: absolute;
        top: 30px;
        left: 30px;
      }
    }
    & > #foot {
      width: 10px;
      height: 10px;
      position: absolute;
      top: 140px;
      left: 140px;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-content: space-between;
      & > div {
        width: 4px;
        height: 4px;
        // border-radius: 50%;
        background-color: white;
        rotate: 45deg;
      }
    }
  }
  .score-panel {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
