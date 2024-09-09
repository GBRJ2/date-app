import { createStore } from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import userModule from './modules/user/UserIndex';

const store = createStore({
  modules: {
    users: userModule,
  },
  plugins: [createPersistedState()],
});

export default store;
