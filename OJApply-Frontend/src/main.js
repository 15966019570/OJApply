import './assets/main.css'

import { createApp } from 'vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const app = createApp(App)

app.use(ElementPlus)

app.use(router)

// app.use(vuetify)

app.mount('#app')
