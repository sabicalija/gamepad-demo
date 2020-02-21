<template>
  <div id="gamepad-info">
    <div v-for="(value, name) in { index, connected, mapping, timestamp }" :key="name">
      <span>{{ name }}</span>
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GamePadInfo",
  data() {
    return {
      index: -1,
      connected: false,
      mapping: "",
      timestamp: ""
    };
  },
  computed: mapGetters(["gamepad"]),
  methods: {
    update() {
      if (this.gamepad) {
        const gp = navigator.getGamepads()[this.gamepad.index];
        this.index = gp.index;
        this.connected = gp.connected;
        this.mapping = gp.mapping;
        this.timestamp = gp.timestamp;
      }
    },
    tick() {
      this.update();
      window.requestAnimationFrame(this.tick);
    }
  },
  mounted() {
    window.requestAnimationFrame(this.tick);
  }
};
</script>

<style lang="stylus" scoped></style>
