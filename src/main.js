import Vue from 'vue'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageKit from "imagekitio-vue"

Vue.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/ipcfzmxad/", // Required. Default URL-endpoint is https://ik.imagekit.io/your_imagekit_id
  publicKey: "your_public_api_key", // optional
  authenticationEndpoint: "https://www.your-server.com/auth" // optional
  // transformationPosition: "path" // optional
})

import App from './App.vue'
import './registerServiceWorker'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
