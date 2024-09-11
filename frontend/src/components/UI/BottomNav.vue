<template>
    <nav class="bottom-nav">
      <button
        v-for="item in navItems"
        :key="item.name"
        @click="$emit('nav-click', item.name)"
        :class="{ active: activeItem === item.name }"
      >
        <i :class="item.icon"></i>
        {{ item.name }}
      </button>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'BottomNav',
    props: {
      activeItem: {
        type: String,
        default: '매칭'
      }
    },
    data() {
      return {
        navItems: [
          { name: '매칭', icon: 'fas fa-users' },
          { name: '친구', icon: 'fas fa-user-friends' },
          { name: '소통', icon: 'fas fa-comments' },
          { name: '나', icon: 'fas fa-user' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    border-top: 1px solid #e0e0e0;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .bottom-nav button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    font-size: 12px;
    color: #757575;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .bottom-nav button i {
    font-size: 20px;
    margin-bottom: 4px;
  }
  
  .bottom-nav button.active {
    color: #d32f2f;
  }
  </style>