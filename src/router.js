import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/public/Home.vue';
import Login from './views/login/Login.vue';
import HostDashboard from './views/host/HostDashboard';
import DashHome from './views/host/modules/home/Home';
import Customers from './views/host/modules/customers/Customers';
import Tutorials from './views/host/modules/tutorials/Tutorials';
import Settings from './views/host/modules/settings/Settings';
import Products from './views/host/modules/products/Products';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home.vue',
            component: Home,
        },
        {
            path: '/host/login',
            name: 'host login',
            component: Login,
        },
        {
            path: '/host/',
            name: 'host dashboard',
            component: HostDashboard,
            children: [
                {
                    path: 'home',
                    component: DashHome,
                },
                {
                    path: 'customers',
                    component: Customers,
                },
                {
                    path: 'tutorials',
                    component: Tutorials,
                },
                {
                    path: 'settings',
                    component: Settings,
                },
                {
                    path: 'products',
                    component: Products,
                },
            ],
        },
    ],
})
