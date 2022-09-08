<template>
  <div class="inline-block w-full group">
    <img :src="item.image.url" />
    <div class="font-bold">{{ item.title[0].text }}</div>
    <div class="text-slate-800 mb-4">{{ item.description }}</div>
  </div>  
</template>

<script>
export default {
  props: {
    item: Object,
    required: false,
  }
}
</script>
