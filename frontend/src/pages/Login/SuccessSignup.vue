<template>
  <main>
    <div class="app">
    <dotlottie-player
      src="https://lottie.host/b96df5db-aaeb-47a1-bdf4-725faa90616e/DuA8DHVoA1.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></dotlottie-player>
    <h3>회원가입을 완료했습니다!</h3>
    <base-btn point @click="handleSuccess"> 홈으로</base-btn>
  </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('users', [
      'studentNum',
      'emailVerified',
      'userGender',
      'userDepartment',
      'userPassword',
    ]),
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);
  },
  methods: {
    handleSuccess() {
      this.$router.push('/mainform');
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 120px
}

h3{
  font-family: "pretendard";
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 0px;
  /* text-align: center; */
  color: rgb(0, 0, 0);
}
</style>

