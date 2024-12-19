import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// vue-fullpage.js
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

// github calendar contributions
import VueCalendarHeatmap from 'vue3-calendar-heatmap'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.use(VueFullPage)
app.use(VueCalendarHeatmap)
app.mount('#app')
