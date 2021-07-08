import Vue from 'vue'
import App from './App'
import Popup from './components/popup/popup'
Vue.prototype.$popup = Popup.install

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
