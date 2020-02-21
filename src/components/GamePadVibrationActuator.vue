<template>
  <div id="gamepad-vibration-actuator">
    <div v-if="actuator">
      <span>Type</span>
      <span>{{ actuator.type }}</span>
      <button @click="vibrate" :disabled="active">Start</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GamePadVibrationActuator",
  data() {
    return {
      actuator: null,
      active: false
    };
  },
  computed: mapGetters(["gamepad"]),
  methods: {
    update() {
      if (this.gamepad) {
        const gp = navigator.getGamepads()[this.gamepad.index];
        this.actuator = gp.vibrationActuator;
      }
    },
    tick() {
      this.update();
      window.requestAnimationFrame(this.tick);
    },
    vibrate() {
      if (this.gamepad) {
        const gp = navigator.getGamepads()[this.gamepad.index];
        this.active = true;
        const duration = 400;
        gp.vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration,
          weakMagnitude: 0.45,
          strongMagnitude: 0.75
        });
        setTimeout(() => {
          this.active = false;
        }, duration);
      }
    }
  },
  created() {
    window.requestAnimationFrame(this.tick);
  }
};
</script>

<style lang="stylus" scoped></style>
