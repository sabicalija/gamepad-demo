<template>
  <div id="gamepad">
    <div id="axes">
      <span>Axes:</span>
      <ul>
        <li v-for="(axe, i) of axes" :key="i">{{ axe }}</li>
      </ul>
    </div>
    <div id="buttons">
      <span>Buttons:</span>
      <ul>
        <li v-for="(button, i) of buttons" :key="i">Button {{ i }}: {{ button.value }}</li>
      </ul>
    </div>
    <div id="vibration">
      <span>Vibration Actuator:</span>
      <div v-if="vActuator">
        <span>Type: {{ vActuator.type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GamePad",
  data() {
    return {
      axes: null,
      buttons: null,
      vActuator: null
    };
  },
  computed: mapGetters(["gamepad"]),
  methods: {
    updateGamePad() {
      if (!this.gamepad) {
        this.axes = [];
        this.buttons = [];
        this.vActuator = null;
      } else {
        const { index } = this.gamepad;
        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[index];
        this.axes = gamepad.axes;
        this.buttons = gamepad.buttons;
        this.vActuator = gamepad.vibrationActuator;
      }
    },
    tick() {
      this.updateGamePad();
      window.requestAnimationFrame(() => this.tick());
    }
  },
  watch: {
    selection() {
      this.updateGamePad();
    }
  },
  created() {
    window.requestAnimationFrame(() => this.tick());
  }
};
</script>

<style lang="stylus" scoped></style>
