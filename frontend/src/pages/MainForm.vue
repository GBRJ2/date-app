<template>
  <div class="app">
    <header>
      <div class="vertical">
        <img src="../assets/logo.png" alt="logo" />
        <h2 class="title">title</h2>
      </div>
      <h3><font-awesome-icon icon="bell" /></h3>
    </header>
    <base-card :content="'현재 매칭 중인 방: ' + this.roomNum"> </base-card>
    <div class="main-action">
      <h2>빠른 시작</h2>
      <button class="click-btn" @click="createRoom">Click</button>
      <p>주의 사항</p>
    </div>

    <nav>
      <bottom-nav :active-item="currentNavItem" @nav-click="handleNavClick" />
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapState("users", {
      studentNum: (state) => state.studentNum,
      emailVerified: (state) => state.emailVerified,
      userGender: (state) => state.userGender,
      userDepartment: (state) => state.userDepartment,
    }),
    ...mapGetters("users", [
      "studentNum",
      "emailVerified",
      "userGender",
      "userDepartment",
    ]),
  },
  methods: {
    createRoom() {
      // 방 만들기 로직 구현
      console.log("방 만들기 버튼 클릭됨");
    },
  },
};
</script>

<style scoped>
.app {
  height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  margin: 0px 0px 0px 15px;
}
p {
  margin: 0;
}

img {
  width: 25px;
  height: 25px;
}

.status-bar {
  background-color: black;
  color: white;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
}

.content {
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
}

.vertical {
  display: flex;
}
h3 {
  right: 10px;
  text-align: right;
}

.stats p {
  margin: 5px 0;
}

.main-action {
  text-align: center;
  margin-top: 50px;
}

.click-btn {
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  font-size: 24px;
  cursor: pointer;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.bottom-nav button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
</style>
