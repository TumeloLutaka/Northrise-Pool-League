import { createApp } from 'vue'
import App from './App.vue'
import routes from './javascript/routes.js';
import store from './javascript/store.js';

const app = createApp(App);
app.use(routes);
app.use(store);
app.mount('#app');

