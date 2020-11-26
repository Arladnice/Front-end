import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./pages/MainPage";
import PhotosPage from "./pages/PhotosPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/photo',
        component: PhotosPage,
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})