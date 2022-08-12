import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@nice/components/icon';
console.log("🚀 ~ file: main.ts ~ line 5 ~ Icon", Icon)

const plugins = [Icon];

const app = createApp(App);
plugins.forEach((plugin) => app.use(plugin));

createApp(App).mount('#app')
