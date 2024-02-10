import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

export const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/movie', name: 'movie', component: () => import('@/pages/MoviesPage.vue')},
        {path: '/tv', name: 'tv', component: () => import('@/pages/TvsPage.vue')},
        {path: '/search', name: 'search', component: () => import('@/pages/SearchPage.vue')},
    ]
})