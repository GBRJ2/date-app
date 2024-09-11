// import Vue from 'vue';
// import Router from 'vue-router';
import InputTest from './pages/InputTest.vue'
import BtnTest from './pages/BtnTest.vue';
import MainForm from './pages/MainForm.vue';
import SignUp1 from './pages/Login/SignUp1.vue';
import SignUp2 from './pages/Login/SignUp2.vue';
import SignUp3 from './pages/Login/SignUp3.vue';
import SuccessSignup from './pages/Login/SuccessSignup.vue';
import MakeTeam from './pages/Post/MakeTeam.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/input',
      name: 'InputTest',
      component: InputTest
    },
    {
      path: '/btn',
      name: 'BtnTest',
      component: BtnTest
    },
    {
      path: '/mainform',
      name: 'Main',
      component: MainForm
    },
    {
      path: '/signup/1',
      name: 'SignUp',
      component: SignUp1
    },
    {
      path: '/signup/2',
      name: 'SignUp2',
      component: SignUp2
    },
    {
      path: '/signup/3',
      name: 'SignUp3',
      component: SignUp3
    },
    {
      path: '/signup/success',
      name: 'Success',
      component: SuccessSignup
    },
    {
      path: '/maketeam',
      name: 'MakeTeam',
      component: MakeTeam
    }
  ]
});

export default router;
