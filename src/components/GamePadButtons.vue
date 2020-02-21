<template>
  <div id="gamepad-buttons">
    <div v-for="({ value, pressed }, index) of buttons" :key="index">
      <span>{{ `Button ${index}` }}</span>
      <span>{{ value }}</span>
      <span>{{ pressed }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GamePadButtons",
  data() {
    return {
      buttons: null
    };
  },
  computed: mapGetters(["gamepad"]),
  methods: {
    update() {
      if (this.gamepad) {
        const gp = navigator.getGamepads()[this.gamepad.index];
        this.buttons = gp.buttons;
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
// #gamepad-buttons
//   display flex
//   flex-flow row wrap
//   justify-content space-between
//   div
//     display flex
//     flex-flow column wrap
//     flex-growth 1
//     background-color lighten($dark, 15%)
//     padding 14px 10px
//     margin 5px
//     box-shadow 3px 3px 6px 2px darken($dark, 30%)
//     width 22%
//     span
//       color white
//       text-align right
//       &:first-child
//         white-space nowrap
//         text-align left
</style>
