
<template>
  <div class="app">
    <header>
      <the-header @click="goBack"> </the-header>
      <!-- <progress id="progress" value="33" min="0" max="100"></progress> -->
    </header>
    <main>
      <h2 class="title">당신의 MBTI는?</h2>
      <base-btn
        variant="primary"
        :selected="selectedGender === 'male'"
        @click="selectGender('male')"
        >남자에요 🙋‍♂️</base-btn
      >
      <base-btn
        variant="primary"
        :selectedFemale="selectedGender === 'female'"
        @click="selectGender('female')"
        >여자에요 🙋‍♀️</base-btn
      >

      <h2 class="title">당신의 주량은? 🍺</h2>

    </main>

    <footer>
      <base-btn variant="primary" class="next-btn" @click="handleNext">
        완료!
      </base-btn>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedGender: null,
    };
  },
  methods: {
    selectGender(gender) {
      this.selectedGender = gender;
      console.log(this.selectedGender);
    },
    handleNext() {
      if (this.selectedGender) {
        this.$router.push("/signup/success");
      } else {
        alert("성별을 선택해주세요!");
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

header {
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-button {
  font-size: 14px;
}

.status-bar {
  font-size: 12px;
}

.progress-bar {
  height: 4px;
  background-color: rgb(154, 53, 69);
  margin-bottom: 10px;
}

.title {
  font-family: "pretendard";
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}


footer {
  display: flex;
  flex-direction: row-reverse;
  justify-self: start;
  bottom: 0;
}


#progress {
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background: #f0f0f0;
  position: relative;
  overflow: hidden;
  border: none;
}

#progress::-webkit-progress-bar {
  background: transparent;
}

#progress::-webkit-progress-value {
  background: rgb(154, 53, 69);
  border-radius: 10px;
  animation: progressBarAnimation .5s ease-out forwards;
}

@keyframes progressBarAnimation {
  from {
    width: 0%;
  }
  to {
    width: 33%; 
  }
}

</style>
