import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Импорт Pinia

const pinia = createPinia(); // Создание инстанса Pinia
const app = createApp(App);

app.use(pinia); // Добавление Pinia в приложение

app.mount('#app'); // Монтирование приложения
