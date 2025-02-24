import Tetikus from '@namchee/tetikus' // mouse effects
import { createApp } from 'vue'
import VueFullPage from 'vue-fullpage.js'
import VueKinesis from 'vue-kinesis'

// rough-notation styling
import VueRoughNotation from 'vue-rough-notation'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import VueWriter from 'vue-writer'
// github calendar contributions
import VueCalendarHeatmap from 'vue3-calendar-heatmap'

import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// vue-fullpage.js
import 'vue-fullpage.js/dist/style.css'
import '@namchee/tetikus/dist/tetikus.css'
import 'vue3-typer/dist/vue-typer.css'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.use(VueFullPage)
app.use(Tetikus) // mouse effects
app.use(VueCalendarHeatmap)
app.use(VueRoughNotation)
app.use(VueKinesis)
app.use(VueWriter)
app.mount('#app')
