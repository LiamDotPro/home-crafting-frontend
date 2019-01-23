import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/login/Login.vue';
import HostDashboard from '@/views/host/HostDashboard.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/host/login',
            name: 'host login',
            component: Login,
        },
        {
            path: '/host',
            name: 'host dashboard',
            component: HostDashboard,
        },
        {
            path: '/host/dashboard',
            name: 'host dashboard',
            component: HostDashboard,
        },
    ],
});
