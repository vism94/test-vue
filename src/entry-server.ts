import { createSSRApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createMemoryHistory } from 'vue-router';
import routes from './routes';

export function createApp() {
    const app = createSSRApp(App);
    const pinia = createPinia();
    const router = createRouter({
        history: createMemoryHistory(),
        routes,
    });

    app.use(pinia);
    app.use(router);

    return { app, router, pinia };
}
