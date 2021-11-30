import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootswatch/dist/cyborg/bootstrap.min.css'

import axios from 'axios';
import VueAxios from 'vue-axios'




createApp(App).use(router).use(VueAxios,axios).mount('#app')
