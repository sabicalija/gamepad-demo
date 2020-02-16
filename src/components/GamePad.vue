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
        <li v-for="(button, i) of buttons" :key="i">
          Button {{ i }}: {{ button.value }}
        </li>
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
import { mapState } from "vuex";
export default {
  name: "GamePad",
  data() {
    return {
      gamepad: null,
      axes: null,
      buttons: null,
      vActuator: null
    };
  },
  computed: mapState(["gamepads", "selection"]),
  methods: {
    updateGamePad() {
      const gamepads = navigator.getGamepads();
      this.gamepad = gamepads[this.gamepads[this.selection].index];
      if (this.gamepad) {
        this.axes = this.gamepad.axes;
        this.buttons = this.gamepad.buttons;
        this.vActuator = this.gamepad.vibrationActuator;
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
