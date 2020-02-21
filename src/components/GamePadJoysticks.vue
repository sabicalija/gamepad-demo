<template>
  <div id="gamepad-axes-graph">
    <div v-for="(joystick, i) of joysticks" :key="i">
      <svg viewBox="-1 -1 2 2">
        <circle id="boundary" />
        <line x1="-1" y1="0" x2="1" y2="0" />
        <line x1="0" y1="-1" x2="0" y2="1" />
        <!-- <rectangle width="1" height="1" stroke="white" /> -->
        <circle id="pointer" :cx="joystick.x" :cy="joystick.y" />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GamePadJoysticks",
  data() {
    return {
      joysticks: null
    };
  },
  computed: mapGetters(["gamepad"]),
  methods: {
    update() {
      if (this.gamepad) {
        const gp = navigator.getGamepads()[this.gamepad.index];
        this.joysticks = gp.axes.reduce((total, value, index, axes) => {
          if (index % 2 == 0) {
            total.push({ x: axes[index], y: axes[index + 1] });
          }
          return total;
        }, []);
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
