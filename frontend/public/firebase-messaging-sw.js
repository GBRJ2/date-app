// /public/firebase-messaging-sw.js
importScripts(
    "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
);

self.addEventListener("install", function (e) {
    console.log("fcm service worker가 설치되었습니다.");
    self.skipWaiting();
});

self.addEventListener("activate", function (e) {
    console.log("fcm service worker가 실행되었습니다.");
});

const firebaseConfig = {
    apiKey: 'AIzaSyAz48XJS3ePYa3e0mchQ1M4faY6g-pwMCw',
    authDomain: 'date-app-4d575.firebaseapp.com',
    projectId: 'date-app-4d575',
    storageBucket: 'date-app-4d575.appspot.com',
    messagingSenderId: '101255708',
    appId: '1:1085809036400:web:d7a2ef60b3b9f44c12b8b5',
    measurementId: 'G-0FNK9S81LT',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.title;
    const notificationOptions = {
        body: payload.body
        // icon: payload.icon
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});