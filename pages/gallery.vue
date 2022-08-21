<template>
  <div>
    <ContentContainer>
      <!-- {{ gallery.data.body[0].items }} -->
      <GalleryContainer :items="gallery.data.body[0].items" />
    </ContentContainer>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: gallery } = await useAsyncData('gallery', () => client.getSingle('gallery'));
</script>