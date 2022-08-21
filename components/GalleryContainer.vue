<template>
  <div class="bg-white text-sky-900 mt-16 mb-4 p-6">
    <ul>
      <li 
        v-for="item in items" :key="item.title[0].text"
        class="inline"
        >
        <GalleryItem :item="item" />
      </li>
    </ul>
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
