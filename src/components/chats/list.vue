<template>
  <section class="m-2 flex">
    <div class="w-2/12 py-2">
      <img class="w-12 h-12 rounded-full pr-1" :src="data.image" alt="" />
    </div>
    <article class="w-10/12 py-2 border-b-2 border-gray-200">
      <div class="flex justify-between">
        <h2>{{ data.name }}</h2>
        <p
          class="text-sm"
          :class="data.count > 0 ? 'text-green-500' : 'text-gray-500'"
        >
          {{ data.time }}
        </p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-500">{{ data.message }}</p>
        <p
          class="
            bg-green-500
            text-white
            w-5
            h-5
            text-center
            rounded-full
            text-sm
          "
          v-if="data.count > 0"
        >
          {{ data.count }}
        </p>
      </div>
    </article>
  </section>
</template>
<script>
export default {
    props:['data']
    
}
</script>