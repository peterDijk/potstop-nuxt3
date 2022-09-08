<template>
  <div class="bg-white text-sky-900 mt-16 mb-4 p-6 columns-3xs gap-8">
    <GalleryItem v-for="item in items" :key="item.title[0].text" :item="item" />
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      }
    }
  }
</script>
