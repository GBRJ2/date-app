<template>
  <div class="app">
    <header>
      <the-header @click="goBack"></the-header>
    </header>
    <main>
      <h2 class="title">성별을 알려주세요</h2>
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

      <div v-if="selectedGender" class="second">
        <h2 class="title">학과를 알려주세요</h2>

        <!-- 단과 대학 버튼 -->
        <base-btn
          v-for="major in majors"
          :key="major.id"
          variant="primary"
          :selected="selectedMajor === major.id"
          @click="selectMajor(major.id)"
        >
          {{ major.name }}
        </base-btn>
      </div>

      <!-- 선택된 단과 대학에 따라 세부 과목 버튼 표시 -->
      <div v-if="selectedMajor" class="detail">
        <h3 v-if="selectedDepartment">'{{ koreanName }}' 가 맞나요?</h3>
        <h3 v-else>학과를 선택해주세요</h3>

        <base-btn
          v-for="department in filteredDepartments"
          :key="department.id"
          :selected="selectedDepartment === department.id"
          variant="primary"
          @click="selectDepartment(department)"
        >
          {{ department.name }}
        </base-btn>
      </div>
    </main>

    <footer>
      <base-btn variant="primary" @click="handleNext" v-if="selectedDepartment">
        다음으로
      </base-btn>
    </footer>
  </div>
</template>

<script>
import Data from "../../assets/data/Mokwon.json";

export default {
  name: "App",
  data() {
    return {
      selectedGender: null,
      selectedMajor: null,
      selectedDepartment: null,
      koreanName: null,
      majors: Data.majors,
      departments: Data.departments,
    };
  },
  computed: {
    filteredDepartments() {
      return this.departments.filter(
        (department) => department.majorId === this.selectedMajor
      );
    },
  },
  methods: {
    selectMajor(majorId) {
      this.selectedMajor = majorId;
      this.selectedDepartment = null; // Major 선택 시 department 초기화
      console.log(this.selectedMajor);
    },
    selectDepartment(departmentId) {
      this.selectedDepartment = departmentId.id;
      this.koreanName = departmentId.name;
      console.log(this.selectedDepartment);
    },
    selectGender(gender) {
      this.selectedGender = gender;
      console.log(this.selectedGender);
    },
    handleNext() {
      if (this.selectedMajor) {
        this.$router.push("/signup/success");
      } else {
        alert("단과 대학을 선택해주세요!");
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
  margin: 20px;
}

.second {
  margin-top: 50px;
  animation: fadeInUp 0.5s;

}

h3 {
  font-family: "pretendard";
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

footer {
  display: flex;
  margin-top: 30px;
  flex-direction: row-reverse;
  justify-self: start;
  bottom: 0;
}

button {
  color: rgb(121, 121, 121);
  background: transparent;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 5%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}

.detail {
  position: relative;
  animation: fadeInUp 0.5s;
  margin-top: 50px;
}
</style>
