<template>
  <div id="selection">
    <label for="gamepads">Choose a gamepad:</label>
    <select name="gamepads" id="gamepads" autofocus v-model="selection">
      <option v-for="(gamepad, i) of gamepads" :key="gamepad.index" :value="i">{{
        gamepad.id
      }}</option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GamePadSelection",
  data() {
    return {};
  },
  computed: {
    ...mapState(["gamepads"]),
    selection: {
      get() {
        return this.$store.state.selection;
      },
      set(value) {
        this.$store.commit("select", value);
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>
