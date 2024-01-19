import { createApp } from 'vue';

// import './style.css'
import '@unocss/reset/tailwind.css';
import 'uno.css';
import router from './router.ts';
import App from './App.vue';

const app = createApp(App);

app.use(router).mount('#app');
