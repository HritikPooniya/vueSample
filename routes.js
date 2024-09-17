import Homepage from './src/components/Homepage.vue'
import SignUp from './src/components/SignUp.vue';
import logIn from './src/components/LogIn.vue';
import updateRestaurant from './src/components/UpdateRestaurant.vue';
import AddrestaurantComponent from './src/components/AddrestaurantComponent.vue';
import { createRouter,createWebHistory } from 'vue-router';

const routes = [
    {
        name:"HomepageComponent",
        component:Homepage,
        path:'/'
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/signUp'
    },
    {
        name:"logIn",
        component:logIn,
        path:'/logIn'
    },
    {
        name:"add",
        component:AddrestaurantComponent,
        path:'/AddrestaurantComponent'
    },
    {
        name:"update",
        component:updateRestaurant,
        path:'/updateRestaurant'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;