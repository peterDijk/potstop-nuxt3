<template>
  <div>
    <ContentContainer title="Gallery">
      <GalleryContainer :items="gallery.data.body[0].items" />
    </ContentContainer>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: gallery } = await useAsyncData('gallery', () => client.getSingle('gallery'));
</script>