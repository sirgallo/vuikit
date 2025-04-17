import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VUIKitLoader from './uikit.loader.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VUIKitLoader)

app.mount('#app')
