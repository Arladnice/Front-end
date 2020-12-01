import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Dashboard from "../components/Dashboard";
import EditContact from "../components/EditContact";
import NewContact from "../components/NewContact";
import ViewContact from "../components/ViewContact";

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'new-contact',
    component: NewContact
  },
  {
    path: '/edit/:contact_id',
    name: 'edit-contact',
    component: EditContact
  },
  {
    path: '/:contact_id',
    name: 'view-contact',
    component: ViewContact
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
