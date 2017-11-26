// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueMaterial from 'vue-material'
import PageHeader from './PageHeader'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/default-theme.css'

Vue.use(VueMaterial)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#header',
  router,
  components: {
    'page-header': PageHeader
  }
})
