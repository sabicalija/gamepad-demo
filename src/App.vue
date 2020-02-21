<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "App",
  created() {
    window.addEventListener("gamepadconnected", e =>
      this.register({ id: e.gamepad.id, index: e.gamepad.index })
    );
    window.addEventListener("gamepaddisconnected", e =>
      this.unregister({ id: e.gamepad.id, index: e.gamepad.index })
    );
  },
  methods: mapMutations(["register", "unregister"])
};
</script>

<style lang="stylus">
@import "~@/style/index.styl"
</style>
