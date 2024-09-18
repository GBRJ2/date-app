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
    background-color: #FFF;
    border-radius: 15px;
    overflow: hidden;
    margin: 15px;
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
  }
  
  .card-body {
    padding: 0px 8px 8px 15px;
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
  
