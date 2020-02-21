<template>
  <div id="gamepad-axes">
    <div v-for="(value, index) of axes" :key="index">
      <span>{{ `Axis ${index}` }}</span>
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GamePadAxes",
  data() {
    return {
      axes: null
    };
  },
  computed: mapGetters(["gamepad"]),
  methods: {
    update() {
      if (this.gamepad) {
        const gp = navigator.getGamepads()[this.gamepad.index];
        this.axes = gp.axes;
      }
    },
    tick() {
      this.update();
      window.requestAnimationFrame(this.tick);
    }
  },
  created() {
    window.requestAnimationFrame(this.tick);
  }
};
</script>

<style lang="stylus" scoped>
// #gamepad-axes
//   display flex
//   flex-flow row nowrap
//   justify-content space-between
//   div
//     display flex
//     flex-flow column wrap
//     background-color lighten($dark, 5%)
//     padding 14px 10px
//     margin 2px 1px
//     box-shadow 0 1px 6px 0 darken($dark, 30%)
//     width 100%
//     span
//       color white
//       &:last-child
//         text-align right
</style>
