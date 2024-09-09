<template>
  <div>
    <!-- 버튼 클릭 시 selected 상태를 변경 -->
    <base-btn 
      :selected="isButtonSelected"
      variant="primary"
      @click="toggleSelected">
      기본값
    </base-btn>

    <base-btn variant="primary" selected>
      선택됨
    </base-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isButtonSelected: false // selected 상태를 관리
    };
  },
  methods: {
    toggleSelected() {
      console.log('toggleSelected');
      this.isButtonSelected = !this.isButtonSelected; // 클릭 시 selected 상태 토글
    }
  }
};
</script>
