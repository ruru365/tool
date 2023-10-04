import './style.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './core/router/index.ts'


const app = createApp(App)
app.use(router)
app.mount('#app')