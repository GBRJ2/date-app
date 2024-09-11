<template>
  <div class="app">
      <header>
        <img src="../assets/logo.png" alt="logo" />
        <h2 class="title">목원대 과팅 어플</h2>
        <base-btn class="notification-btn">🔔</base-btn>
      </header>

      <font-awesome-icon icon="comments" size="lg" style="color: #B197FC;" />
      <base-card>
        <p>현재 배정 중인 방 수 : 99 <span>자세히 보기 ></span></p>
      </base-card>

      <base-card>
        <p>현재 이용 중인 유저 수 : 99 <span>자세히 보기 ></span></p>
      </base-card>
      
      <div class="main-action">
        <h2>방 만들기</h2>
        <button class="click-btn" @click="createRoom">Click</button>
        <p>주의 사항</p>
      </div>
      
      <nav>
        <bottom-nav :active-item="currentNavItem" @nav-click="handleNavClick" />
      </nav>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    createRoom() {
      // 방 만들기 로직 구현
      console.log('방 만들기 버튼 클릭됨');
    }
  }
}
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
p{
  margin: 0;
}

img{
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