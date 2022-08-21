<template>
  <div class="p-6 inline-block max-w-md">
    <img :src="item.image.url" />
    <div><span>{{ item.title[0].text }}</span></div>
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
