import createPersistedState from 'vuex-persistedstate';

import mutations from './UserMutations';
import getters from './UserGetters';
import actions from './UserActions';

export default {
  state: {
    formData: {
      name: '',
      email: '',
      password: ''
    }
  },
  namespaced: true,
  mutations,
  getters,
  actions,
  plugins: [createPersistedState()],
};


