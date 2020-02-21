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

<style lang="stylus" scoped></style>
