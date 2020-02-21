<template>
  <div id="gamepad-buttons">
    <div v-for="({ value, pressed }, index) of buttons" :key="index" :class="{ active: pressed }">
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

<style lang="stylus" scoped></style>
