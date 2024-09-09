<template>
  <div class="app">
    <header>
      <the-header @click="goBack"></the-header>
    </header>
    <main>
      <form class="email" @submit.prevent="submitEmail">
        <h3>학교 인증이 필요해요</h3>
        <p>학교 명을 입력해주세요</p>
        <input type="text" placeholder="목원대학교" />
        <p>학교 이메일 주소를 입력해주세요</p>
        <div class="vertical">
          <input type="email" placeholder="1958012@mokwon.ac.kr" />
          <base-btn type="submit" variant="primary" @click="sendEmail" v-if="!response"
            >인증하기</base-btn>
        </div>
        <div v-if="response">
          <p>인증번호</p>
          <input type="text" />
          <base-btn type="submit" variant="primary"
          >인증하기</base-btn>
        </div>
      </form>
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

export default {
  data() {
    return {
      studentNum: null,
      email: null,
      response: false,
      isEmailVerified: true,
    };
  },
  methods: {
    handleSuccess() {
      if (this.isEmailVerified) {
        this.$router.push("/signup/2");
      } else {
        alert("모두 작성되지 않았습니다");
      }
    },
    sendEmail() {
      this.response = true;
    },
    submitEmail() {
      if (this.email) {
        axios
          .post("fuck 주소가 없어", {
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

input {
  font-size: 15px;
  color: #222222;
  width: 250px;
  height: 21px;
  border: none;
  padding: 5px 0px 5px 10px;
  margin: 10px 10px 10px 0px;
  border-radius: 8px;
  background-color: #eeeeee;
}

.vertical {
  display: flex;
}

input::placeholder {
  color: #aaaaaa;
}

footer {
  display: flex;
  margin-top: 50px;
  flex-direction: row-reverse;
}
</style>
