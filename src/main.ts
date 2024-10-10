import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-pink/theme.css'

createApp(App)
    .use(PrimeVue)
    .mount('#app');
