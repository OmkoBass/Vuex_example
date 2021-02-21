import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5,
    users: [],
  },
  getters: {
    getEven: state => state.count % 2 === 0,
    getUsers: state => state.users
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    async getUsers(state, users) {
      state.users = users;
    },
    async removeUser(state, payload) {
      state.users = state.users.filter(user => user.id !== payload)
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    getUsers: async ({ commit }) => {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');

      await commit('getUsers', users.data)
    },
    removeUser: async ({ commit }, payload) => await commit('removeUser', payload)
  },
  modules: {
  }
})
