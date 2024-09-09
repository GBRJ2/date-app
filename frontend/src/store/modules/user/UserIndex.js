import createPersistedState from 'vuex-persistedstate';

import mutations from './UserMutations';
import getters from './UserGetters';
import actions from './UserActions';
import state from './UserState';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
  plugins: [createPersistedState()],
};
