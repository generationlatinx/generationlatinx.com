import Vue from 'vue';
import Vuex from 'vuex';
import ui from './core/ui';
import performers from './core/performers';
import shows from './core/shows';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    ui
  },
  strict: debug
});
