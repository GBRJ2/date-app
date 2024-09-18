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
    },

    setStudentNum({ commit }, studentNum) {
      commit('SET_STUDENT_NUM', studentNum);
    },

    setEmailVerified({ commit }, emailVerified) {
      commit('SET_EMAIL_VERIFIED', emailVerified);
    },

    setGender({ commit }, userGender) {
      commit('SET_GENDER', userGender);
    },

    setDepartment({ commit }, userDepartment) {
      commit('SET_DEPARTMENT', userDepartment);
    }
}