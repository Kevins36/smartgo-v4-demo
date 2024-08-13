import './assets/main.css'
import '@fontsource-variable/onest';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getTheme, setTheme } from './shared/utils/theme/ThemeToggle';

import App from './App.vue'
import router from './router'


const app = createApp(App)
const theme = getTheme();
setTheme(theme);

app.use(createPinia())
app.use(router)

app.mount('#app')
