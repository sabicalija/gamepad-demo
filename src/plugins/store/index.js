import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gamepads: [],
    selection: 0
  },
  mutations: {
    register(state, gamepad) {
      const positionIndex = state.gamepads.findIndex(
        ({ index }) => index === gamepad.index
      );
      const { id, index, connected, timestamp, mapping } = gamepad;
      state.gamepads.splice(
        positionIndex > 0 ? positionIndex : state.gamepads.length,
        1,
        { id, index, connected, timestamp, mapping }
      );
    },
    updateSelection(state, selection) {
      state.selection = selection;
    }
  },
  actions: {},
  getters: {}
});
