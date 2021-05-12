<template>
  <div>
    <div>
      <MessageHeader :date="chatt" />
    </div>
    <section
      class="h-screen"
      :style="{ backgroundImage: `url(${require('@/assets/download.jpeg')})` }"
    >
      <article
        v-for="(msg, i) in chatt"
        :key="i"
        class="p-3 flex"
        :class="msg.name == 'You' ? 'justify-end' : 'justify-start'"
      >
        <div
          class="rounded px-3 w-9/12 shadow"
          :class="msg.name == 'You' ? 'bg-green-50' : 'bg-white'"
        >
          <span
            class="material-icons text-5xl absolute -mt-5 -ml-3"
            :class="
              msg.name == 'You' ? '-right-2 text-green-50' : 'left-0 text-white'
            "
            >arrow_drop_down</span
          >
          <h1 class="text-red-400">{{ msg.name }}</h1>
          <div class="flex justify-between">
            <p>{{ msg.message }}</p>
            <p class="text-xs text-gray-500 py-2">{{ msg.time }}</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import MessageHeader from "./messages/messagesheader";
export default {
    components:{
        MessageHeader
    },
    data() {
        return {
            
            chatt:[
                {
                    image:"https://images.unsplash.com/photo-1554276329-c4fee827c444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name:"Bernard Hermant",
                    message :"How are you?",
                    time:"Yesterday",
                    count:3
                },
                {
                    image:"https://images.unsplash.com/photo-1554276329-c4fee827c444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name:"You",
                    message :"How are you?",
                    time:"Yesterday",
                    count:3
                },
                {
                    image:"https://images.unsplash.com/photo-1554276329-c4fee827c444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name:"Bernard Hermant",
                    message :"How are you?",
                    time:"Yesterday",
                    count:3
                },
                {
                    image:"https://images.unsplash.com/photo-1554276329-c4fee827c444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name:"You",
                    message :"How are you?",
                    time:"Yesterday",
                    count:3
                }      
                
            ]
        }
    },
}
</script>