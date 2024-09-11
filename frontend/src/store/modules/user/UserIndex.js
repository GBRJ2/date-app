import createPersistedState from 'vuex-persistedstate';

import mutations from './UserMutations';
import getters from './UserGetters';
import actions from './UserActions';

export default {
  state: {
      studentNum: null,
      emailVerified: false,
      userGender: null,
      userDepartment: null,
  },
  namespaced: true,
  mutations,
  getters,
  actions,
  plugins: [createPersistedState()],
  
}