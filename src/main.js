import { createApp } from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import appConfig from './aws-exports';

Amplify.configure(appConfig);
createApp(App).mount('#app')
