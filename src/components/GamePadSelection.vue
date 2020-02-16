<template>
  <div id="selection">
    <label for="gamepads">Choose a gamepad:</label>
    <select name="gamepads" id="gamepads" @input="onInput">
      <option
        v-for="gamepad of gamepads"
        :key="gamepad.index"
        :value="gamepad.index"
      >{{ gamepad.id }}</option>
    </select>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "GamePadSelection",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["register", "updateSelection"]),
    onInput(e) {
      const index = e.srcElement.selectedIndex;
      this.updateSelection(index);
    }
  },
  computed: mapState(["gamepads", "selection"]),
  created() {
    window.addEventListener("gamepadconnected", e => {
      this.register(e.gamepad);
    });
    this.register({
      id: "Demo",
      index: 99,
      connected: false,
      timestamp: 0,
      mapping: "default"
    });
  }
};
</script>

<style lang="stylus" scoped>
#selection {
  display: flex;
  flex-flow: row wrap;

  & > * {
    width: 100%;
    padding: 12px 8px;
  }

  select {
    font-size: 1.4rem;
    font-family: 'Ubuntu Light';
  }
}
</style>
