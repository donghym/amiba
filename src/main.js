// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,
	Select,
 	Container,
 	Header} from 'element-ui'
Vue.config.productionTip = false

/* eslint-disable no-new */

 Vue.use(Button)
 Vue.use(Select)
 Vue.use(Container)
 Vue.use(Header)

Vue.directive('title', {
	inserted: function(el, binding) {
		document.title = binding.value
	}
});


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
