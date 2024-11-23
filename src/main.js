import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Import i18n
import i18n from './i18n'; // Asegúrate de que i18n.js esté configurado correctamente

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(router);  // Usar el router
app.use(vuetify); // Usar Vuetify
app.use(i18n);    // Usar i18n para las traducciones

app.mount('#app');
