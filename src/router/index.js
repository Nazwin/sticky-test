import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
      return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'index-page',
            component: () => import('../views/pages/main/Main.vue'),
            meta: {
                pageTitle: 'Welcome - Sticky',
                resource: 'Auth'
            },
        },
        {
            path: '/home',
            name: 'home-page',
            component: () => import('../views/pages/account/Home.vue'),
            meta: {
                pageTitle: 'Your account - Sticky',
                layout: 'main',
                resource: 'Auth'
            },
        },
        {
            path: '/settings',
            name: 'settings-page',
            component: () => import('../views/pages/settings/Settings.vue'),
            meta: {
                pageTitle: 'Settings - Sticky',
                layout: 'main',
                resource: 'Auth'
            },
        },
        {
            path: '/login',
            name: 'login-page',
            component: () => import('../views/pages/auth/Login.vue'),
            meta: {
                pageTitle: 'Login - Sticky',
            },
        },
    ]
})

router.beforeEach(async (to, _, next) => {
    try {
        const {meta} = to;
        const withuotAuth = ['login-page', 'index-page'];

        document.title = meta && meta.pageTitle ? meta.pageTitle : 'Coming Soon';

        if (withuotAuth.includes(to.name)) {
            return next();
        }

        const token = localStorage.getItem('access_token');
        
        // Send request to API for check access token

        if(!token){
            return next({name: 'login-page'});
        }

        return next();
    } catch (e) {
        return next({name: 'login-page'});
    }
})

export default router