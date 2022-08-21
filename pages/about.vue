<template>
  <div>
    <ContentContainer>
      <Content :data="about.data" />
    </ContentContainer>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: about } = await useAsyncData('about', () => client.getSingle('about'));
</script>

