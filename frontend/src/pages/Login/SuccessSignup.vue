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
    <base-btn point> 홈으로</base-btn>
    <p>{{ emailVerified }}</p>
  </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState('users', { 
      studentNum: state => state.studentNum,
      emailVerified: state => state.emailVerified,
      userGender: state => state.userGender,
      userDepartment: state => state.userDepartment,
    }),
    ...mapGetters('users', [
      'studentNum',
      'emailVerified',
      'userGender',
      'userDepartment',
    ]),
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);
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

