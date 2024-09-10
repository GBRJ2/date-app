<template>
  <base-card>
    <div class="members">
      <base-card class="member-card">
        <div class="member">
          <div class="member-info">
            <p class="member-name">명재휘 {{ userName }}</p>
            <p class="member-department">로봇학과{{ userDepartment }}</p>
          </div>
        </div>
      </base-card>
      <base-card class="member-card" v-for="card in cards" :key="card">
      </base-card>
    </div>

    <base-btn class="add-member-btn" @click="addMember">
      + 추가하기
    </base-btn>

    <base-card class="location-card">
      <div class="location">
        <span>만나고 싶은 지역</span>
        <span class="location-value">{{ meetingLocation }}</span>
      </div>
    </base-card>

    <base-card class="visibility-card">
      <div class="visibility">
        <span>우리 학교 사람들에게 보이지 않기</span>
        <label class="switch">
          <input type="checkbox" v-model="isPrivate" />
          <span class="slider round"></span>
        </label>
      </div>
    </base-card>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      cards:[],
      teamName: "",
      isPrivate: false,
    };
  },
  methods: {
    addMember() {
      this.cards.push(this.cards.length + 1); 
      console.log("새 멤버 추가");
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin: 5px 0;
}

.team-name-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
}

.members {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

.member-card {
  padding: 10px;
}

.member {
  display: flex;
  align-items: center;
}

.member-info p {
  margin: 2px 0;
}

.member-name {
  font-weight: bold;
}

.member-school,
.member-department,
.member-year {
  font-size: 14px;
  color: #666;
}
.add-member-btn {
  width: 100%;
  padding: 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin: 10px 0;
}

.location-card,
.visibility-card {
  margin-top: 15px;
}

.location,
.visibility {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location-value {
  color: #ff6b6b;
}

/* Toggle switch styling */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}
</style>

<!-- <template>
    <div>
      <button @click="addCard">카드 추가</button>
      <div v-for="(card, index) in cards" :key="index">
        <base-card>Card</base-card>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        cards: [1], // 기본으로 한 개의 카드가 보임
      };
    },
    methods: {
      addCard() {
        this.cards.push(this.cards.length + 1); // 카드를 추가할 때 배열에 항목 추가
      }
    }
  };
  </script>
  
  <style>
  button {
    margin-bottom: 20px;
  }
  </style>
   -->