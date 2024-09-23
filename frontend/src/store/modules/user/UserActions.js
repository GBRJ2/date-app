import axios from "axios";
export default {
  submitForm({ state }) {
    return new Promise((resolve, reject) => {
      axios
        .post("https://date-app-4d575-default-rtdb.firebaseio.com/user.json", {
          studentNum: state.studentNum,
          userGender: state.userGender,
          userDepartment: state.userDepartment,
          userPassword: state.userPassword,
        })
        .then((response) => {
          console.log("성공");
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateField({ commit }, payload) {
    commit("SET_FIELD", payload);
  },

  setStudentNum({ commit }, studentNum) {
    commit("SET_STUDENT_NUM", studentNum);
  },

  setEmailVerified({ commit }, emailVerified) {
    commit("SET_EMAIL_VERIFIED", emailVerified);
  },

  setGender({ commit }, userGender) {
    commit("SET_GENDER", userGender);
  },

  setDepartment({ commit }, userDepartment) {
    commit("SET_DEPARTMENT", userDepartment);
  },

  setPassword({ commit }, userPassword) {
    commit("SET_PASSWORD", userPassword);
  },
};
