import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Leaderboards from '../components/Leaderboards.vue';
import Rules from '../components/Rules.vue';
import Registration from '../components/Registration';

const routes = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component:Home},
        {path:'/Leaderboards', component:Leaderboards},
        {path:'/Rules', component:Rules},
        {path:'/Registration', component:Registration}
    ],
    linkActiveClass: "router-link-active",
});

export default routes;
