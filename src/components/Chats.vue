<template>
  <div>
    <Header />
    <div v-for="(chat, i) in chats" :key="i">
      <router-link to="/Message">
        <List :data="chat" />
      </router-link>
    </div>
  </div>
</template>
<script>
import Header from "./chats/header"
import List from "./chats/list"
export default {
    components:{
        Header,
        List
    },
    data(){
        return{
            chats:[
                {
                    image:"https://images.unsplash.com/photo-1554276329-c4fee827c444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name:"Bernard Hermant",
                    message : " How are you?",
                    time:"Yesterday",
                    count:3
                
                },
                {
                    image:"https://images.unsplash.com/photo-1530821232314-604f58821dd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    name:"Jusdevoyage",
                    message : " Nice Meet you",
                    time:"22:00",
                     count:0
                },
                {
                    image:"https://images.unsplash.com/photo-1530649086554-384d94853246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
                    name:"Bernard Hermant",
                    message : "Where Are you ",
                    time:"10:10",
                     count:0
                },
                {
                    image:"https://images.unsplash.com/photo-1551385159-fee06cfebf8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                    name:"Bernard Hermant",
                    message : " How are you?",
                    time:"15:05",
                     count:3
                },
                {
                    image:"https://images.unsplash.com/photo-1533846844060-d733374cd664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
                    name:"Bernard Hermant",
                    message : " How are you?",
                    time:"Yesterday",
                     count:0
                },
                {
                    image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
                    name:"Bernard Hermant",
                    message : " How are you?",
                    time:"Yesterday",
                     count:0
                }
            ]
        }
    }
    
}
</script>