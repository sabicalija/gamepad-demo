<template>
  <div id="gamepad-info">
    <div v-for="(value, name) in { index, connected, mapping, timestamp }" :key="name">
      <span>{{ name }}</span
      ><span>{{ value }}</span>
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
  computed: {
    ...mapGetters(["gamepad"])
  },
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

<style lang="stylus" scoped>
#gamepad-info
  display flex
  flex-flow row nowrap
  justify-content space-between
  & > div
    background-color #2c333a
    display flex
    flex-flow column wrap
    padding 10px
    margin 2px 1px
    box-shadow 0 1px 6px 0 rgba(32, 33, 36, .28)
    width 100%
    & > span
      color white
      &:first-child
        text-transform uppercase
      &:last-child
        text-align right
</style>
