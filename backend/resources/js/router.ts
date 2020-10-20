import Vue from 'vue';
import VueRouter from 'vue-router';
// @ts-ignore
import IndexPage from './views/Index';
// @ts-ignore
import AboutPage from './views/About';
// @ts-ignore
import TablesPage from './views/Tables';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/tables',
            name: 'tables',
            component: TablesPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
    ],
    linkActiveClass: 'active',
})
