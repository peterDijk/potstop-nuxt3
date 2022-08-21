<template>
    <ContentContainer>
      <Content :data="homepage.data" />
    </ContentContainer>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: homepage } = await useAsyncData('homepage', () => client.getSingle('homepage'));
</script>