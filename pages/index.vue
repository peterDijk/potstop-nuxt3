<template>
  <div>
    <ContentContainer>
      <Content :data="homepage.data" />
    </ContentContainer>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: homepage } = await useAsyncData('homepage', () => client.getSingle('homepage'));
</script>