// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import iView from 'iview';
import install from './install';
import App from './App';

import 'vue2-animate/dist/vue2-animate.min.css';
import './assets/less/app.less';

Vue.config.productionTip = false;
Vue.use(iView);Vue.use(install);

router.afterEach(() => {
	iView.LoadingBar.finish();
});

window.__ROUTER__ = router;
window.__VUE__ = new Vue({
	el: '#app',
	router,
	components: {App},
	template: '<App/>'
});
