<template>
  <div class="app">
    <header>
      <the-header @click="goBack"></the-header>
    </header>
    <main>
      <!--
        학교 명 입력받기
      -->
      <form class="email" @submit.prevent="submitEmail">
        <h3>학교 인증이 필요해요</h3>
        <p>학교 명을 입력해주세요</p>
        <base-input
          type="text"
          placeholder="목원대학교"
          v-model="schoolName"
          :required="true"
        />
        <!--
        학교 이메일 입력받기
        -->
        <p>학교 이메일 주소를 입력해주세요</p>
        <div class="vertical">
          <base-input
            type="email"
            placeholder="1958012@mokwon.ac.kr"
            v-model="email"
            :required="true"
          />
          <base-btn type="submit" variant="primary" v-if="!response"
            >인증하기</base-btn
          >
        </div>
        <!--
        인증 번호 인증하기
        -->
        <div v-if="response">
          <p>인증번호</p>
          <div class="vertical">
            <base-input type="text" />
            <base-btn type="submit" variant="primary" @click="successResponse"
              >인증하기</base-btn
            >
          </div>
        </div>
      </form>
      <div v-if="isEmailVerified">
        <p>비밀번호를 입력해주세요</p>
        <base-input
          type="password"
          v-model="password"
          :required="true"
          @input="validatePassword"
        />

        <p v-if="passwordError" style="color: red">{{ passwordError }}</p>

        <p>다시 한 번 비밀번호를 입력해주세요</p>
        <base-input
          type="password"
          v-model="passwordCheck"
          :required="true"
          @input="validatePasswordMatch"
        />
        <p v-if="passwordCheckError" style="color:red">{{ passwordCheckError }}</p>

      </div>
      <h2 class="title">학번을 알려주세요</h2>
      <select v-model="studentNum" name="num">
        <option value="" disabled>학번 선택</option>
        <option value="25">25학번</option>
        <option value="24">24학번</option>
        <option value="23">23학번</option>
        <option value="22">22학번</option>
        <option value="21">21학번</option>
        <option value="20">20학번</option>
        <option value="19">19학번</option>
      </select>

      <footer>
        <base-btn variant="primary" class="next-btn" @click="handleSuccess">
          다음으로
        </base-btn>
      </footer>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import BaseInput from "@/components/UI/BaseInput.vue";

export default {
  components: { BaseInput },
  data() {
    return {
      studentNum: null,
      email: null,
      response: false,
      isEmailVerified: false,
      schoolName: null,

      password: "",
      passwordCheck: "",
      passwordError: "",
      passwordCheckError: "",
    };
  },
  methods: {
    /*
     * 비밀번호 유효성 검사
     */
    validatePassword() {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!this.password.match(passwordRegex)) {
        this.passwordError =
          "비밀번호는 최소 8자 이상, 숫자, 특수 문자가 포함되어야 합니다.";
      } else {
        this.passwordError = "";
      }
    },

    /*
     * 비밀번호가 맞는지 확인
     */

    validatePasswordMatch() {
      if (this.password !== this.passwordCheck) {
        this.passwordCheckError = "비밀번호가 일치하지 않습니다.";
      } else {
        this.passwordCheckError = "";
      }
    },

    /*
     * 다음 페이지로 이동
     */
    handleSuccess() {
      // if (this.isEmailVerified) {
      //   this.$router.push("/signup/2");
      // } else {
      //   alert("모두 작성되지 않았습니다");
      // }
      this.$router.push("/signup/2");
    },

    /*
     * 이메일 인증번호 확인하는 메서드 일단 true로 설정
     */
    successResponse() {
      this.isEmailVerified = true;
    },

    /*
     * 이메일 인증번호 전송하는 메서드 (현재 주소 임시 파베에 저장)
     */
    submitEmail() {
      this.response = true;
      if (this.email) {
        axios
          .post("https://fir-project-6b9e1-default-rtdb.firebaseio.com/user.json", {
            schoolName: this.schoolName,
            email: this.email,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("이메일 저장 중 오류:", error);
            alert("이메일 저장 실패");
          });
      }
    },

    // TODO: 서버에서 인증번호 받아와서 유저가 입력한거랑 매칭 하는 메서드 만들어야댐
  },
};
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 0 auto;
  height: calc(100vh - 40px);
  padding: 20px;
}

.title {
  font-family: "pretendard";
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 40px;
}

h3 {
  font-family: "pretendard";
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

p {
  margin: 0;
  color: rgb(122, 122, 122);
  font-size: 14px;
  margin-top: 10px;
}

button {
  color: rgb(121, 121, 121);
}

.vertical {
  display: flex;
}

/* input::placeholder {
  color: #aaaaaa;
} */

footer {
  display: flex;
  margin-top: 50px;
  flex-direction: row-reverse;
}
</style>
