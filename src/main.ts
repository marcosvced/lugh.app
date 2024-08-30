import 'virtual:uno.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import provideDependencies from '@/provider'

provideDependencies()

createApp(App)
  .use(router)
  .mount('#app')
