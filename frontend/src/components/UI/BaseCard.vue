<!-- BaseCard.vue -->
<template>
    <div class="card">
      <img v-if="image" :src="image" class="card-img-top" alt="Card image" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ content }}</p>
        <slot name="actions"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    max-width: 300px;
    margin: 10px;
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
  }
  
  .card-body {
    padding: 15px;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 1rem;
    color: #333;
  }
  </style>
  