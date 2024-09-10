import axios from 'axios';
export default {
    submitForm({ state }) {
      return new Promise((resolve, reject) => {
        axios.post('/api/submit', state.formData)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    updateField({ commit }, payload) {
      commit('SET_FIELD', payload);
    }
  };
  