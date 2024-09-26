import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Импорт Pinia

const pinia = createPinia(); // Создание инстанса Pinia
const app = createApp(App);

app.use(pinia); // Добавляем Pinia к приложению

app.mount('#app'); // Монтируем приложение
