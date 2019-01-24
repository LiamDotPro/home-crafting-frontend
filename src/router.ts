import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/login/Login.vue';
import HostDashboard from '@/views/host/HostDashboard.vue';
import Settings from '@/views/host/modules/settings/Settings.vue';
import Customers from "@/views/host/modules/customers/Customers.vue";
import Tutorials from "@/views/host/modules/tutorials/Tutorials.vue";

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
                    component: Home
                },
                {
                    path: 'customers',
                    component: Customers
                },
                {
                    path: 'tutorials',
                    component: Tutorials
                },
                {
                    path: 'settings',
                    component: Settings,
                },
            ],
        },

    ],
});
