import { createStore } from "vuex";
import usersStore from "./users";
import paymentStore from "./payments";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    usersStore,
    paymentStore,
  },
});
