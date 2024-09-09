<template>
    <div class="header">
      <h3>
        <font-awesome-icon icon="chevron-left" @click="handleClick" />
      </h3>
      <h3></h3>
      <h3>
        <font-awesome-icon icon="ellipsis-vertical" />
      </h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    methods: {
      handleClick(event) { 
        window.history.back();
        this.$emit('click', event);
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 20px 0px;
    padding-bottom: 0;
  }
  </style>