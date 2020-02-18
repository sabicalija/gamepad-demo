import Vue from "vue";
import Vuex from "vuex";

import * as getters from "@/plugins/store/getters";
import * as mutations from "@/plugins/store/mutations";

Vue.use(Vuex);

const state = {
  gamepads: [],
  selection: 0
};

const store = new Vuex.Store({
  state,
  getters,
  mutations
});

export default store;
