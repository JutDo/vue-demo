import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Form, Field, CellGroup } from 'vant';

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app')

