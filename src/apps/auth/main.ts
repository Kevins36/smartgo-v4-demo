import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './LoginApp.vue'
import router from './router/auth-router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
