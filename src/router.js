import {createWebHistory,createRouter} from "vue-router"

import Message from "./components/Messages.vue";
import Chats from "./components/Chats.vue";

const routes = [
    {
        path:"/",
        name:"Home",
        component:Chats,
    },

    {
        path:"/Message",
        name:"Message",
        component:Message,
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
