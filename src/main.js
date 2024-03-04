import { createApp } from 'vue'
import App from './App.vue'

// mitt 라이브러리 세팅
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

// vuex
import store from './store.js'

import './registerServiceWorker'

app.use(store).mount('#app') 
