<template>
  <header class="bg-wa-dark flex justify-between text-white py-1 fized w-full">
    <div class="flex">
      <router-link to="/">
        <i class="fas fa-arrow-left text-white py-5 px-1 w-5 h-5"></i>
      </router-link>

      <div class="w-2/12 py-2 px-1">
        <img
          src="https://images.unsplash.com/photo-1554276329-c4fee827c444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          class="w-12 h-12 rounded-full bg-center bg-no-repeat"
          alt=""
        />
      </div>

      <div class="py-2">
        <h1>Alice</h1>
        <p>Alice, Frice, Selcuk, Veysell</p>
      </div>
    </div>
    <div class="flex py-4 px-1">
      <span class="material-icons px-2">attach_file</span>
      <span class="material-icons">more_vert</span>
    </div>
  </header>
</template>

<script>
export default {
    data(){return{
        veysel:"asdasd",
    }},
    props:['date']
}
</script>