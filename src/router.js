import Vue from 'vue';
import Router from 'vue-router';
import Webview from './components/Webview.vue';
import Home from './views/index/Index.vue';

Vue.use(Router);
const isDev = process.env.NODE_ENV !== 'production';
export default new Router({
	mode: isDev ? 'history' : 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: '开发小助手'
			}
		},
		{
			path: '/filewatcher',
			name: 'filewatcher',
			component: () => import(/* webpackChunkName: "file-watcher" */ './views/file-watcher/Index.vue'),
			meta: {
				title: '目录监听器'
			}
		},
		{
			path: '/filewatcher/add',
			name: 'filewatcher.add',
			component: () => import(/* webpackChunkName: "file-watcher" */ './views/file-watcher/Add.vue'),
			meta: {
				title: '添加监听目录'
			}
		},
		{
			path: '/filewatcher/detail',
			name: 'filewatcher.detail',
			component: () => import(/* webpackChunkName: "file-watcher" */ './views/file-watcher/Detail.vue'),
			meta: {
				title: '文件变化详情'
			}
		},
		{
			path: '/hosts',
			name: 'hosts',
			component: () => import(/* webpackChunkName: "hosts" */ './views/hosts/Index.vue'),
			meta: {
				title: '微信小程序转换助手'
			}
		},
		{
			path: '/weapp_trsanform',
			name: 'weapp_trsanform',
			// route level code-splitting
			// this generates a separate chunk (weapp_trsanform.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "weapp_trsanform" */ './views/weapp-transform/Index.vue'),
			meta: {
				title: '微信小程序转换助手'
			}
		},
		{
			path: '/webview',
			name: 'webview',
			component: Webview,
			meta: {
				title: ''
			},
			props: true
		},
	]
})
