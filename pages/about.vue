<template>
  <div>
    <Seo/>
    <ContainerBgImage :headerData="header.data">
      <Header :headerData="{...header.data, title: about.data.title}" />
      <Content :data="about.data" />
    </ContainerBgImage>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: header } = await useAsyncData('header', () => client.getSingle('header'));
  const { data: about } = await useAsyncData('about', () => client.getSingle('about'));
</script>

