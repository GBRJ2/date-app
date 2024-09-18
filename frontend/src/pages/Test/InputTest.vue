<template>
    <div class="card-container">
      <base-card
        title="Amazing Card Title"
        content="This is a brief description of the card content. It provides some interesting information."
        image="https://via.placeholder.com/300"
      >
        <template v-slot:actions>
          <button @click="handlePrimaryAction">Primary Action</button>
          <button @click="handleSecondaryAction">Secondary Action</button>
        </template>
      </base-card>
      
      <base-card
        title="Another Card Title"
        content="Another brief description of the card content, providing additional details."
      />
    </div>
  </template>
  
  <script>
  import BaseCard from '../../components/UI/BaseCard.vue';
  
  export default {
    components: {
      BaseCard
    },
    methods: {
      handlePrimaryAction() {
        console.log('Primary action clicked!');
        // 여기에 주요 버튼 클릭 시 처리할 로직을 추가합니다.
      },
      handleSecondaryAction() {
        console.log('Secondary action clicked!');
        // 여기에 보조 버튼 클릭 시 처리할 로직을 추가합니다.
      }
    }
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  </style>
  