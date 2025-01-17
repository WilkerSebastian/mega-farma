import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import "@/assets/styles/globals.css"
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');