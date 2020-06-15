/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '../pages/index.vue'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
    routes: [
        //   {
        //     path: '/',
        //     name: 'Hello',
        //     component: Hello
        // },
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
