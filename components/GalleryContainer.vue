<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title[0].text">
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