import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import store from './store/index';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// 컴포넌트 등록
import BaseBtn from './components/UI/BaseBtn.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheHeader from './components/UI/TheHeader.vue';
import BaseInput from './components/UI/BaseInput.vue';
import BottomNav from './components/UI/BottomNav.vue';

//services
import { requestFCMPermission }from './service/notificationPermission';
import './registerServiceWorker';

library.add(fas);

const app = createApp(App);
app.use(router);
app.use(store);

app.component('BaseBtn', BaseBtn);
app.component('TheHeader', TheHeader);
app.component('BaseInput', BaseInput);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('BaseCard', BaseCard);
app.component('BaseInput', BaseInput);
app.component('BottomNav', BottomNav);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js") 
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }

app.mount('#app');

requestFCMPermission();
