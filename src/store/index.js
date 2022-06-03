import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // object: {
    //   [pageNum]: Array<Object>,
    //   numberOfPages: Number
    // }
    starships: {},
    // films: Array<Film>
    films: [],
    // object: {
    //   [id]: Object
    // }
    starship: {},
    film: {}
  },
  actions,
  mutations,
  getters
});
