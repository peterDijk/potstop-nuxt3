<template>
  <div>
    <ContentContainer :title="header.data.title[0].text">
      <Content :data="homepage.data" />
    </ContentContainer>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: homepage } = await useAsyncData('homepage', () => client.getSingle('homepage'));
  const { data: header } = await useAsyncData('header', () => client.getSingle('header'));

</script>