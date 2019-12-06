import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyA9g8ocYIQD_Uh997ww1gl1UxQRfxuGgps',
  authDomain: 'fnit-commu.firebaseapp.com',
  databaseURL: 'https://fnit-commu.firebaseio.com',
  projectId: 'fnit-commu',
  storageBucket: 'fnit-commu.appspot.com',
  messagingSenderId: '950510864668',
  appId: '1:950510864668:web:bd6cef3543130db2',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
