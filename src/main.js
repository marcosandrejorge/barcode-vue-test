import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueBarcodeScanner from 'vue-barcode-scanner'

// inject vue barcode scanner
Vue.use(VueBarcodeScanner);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
