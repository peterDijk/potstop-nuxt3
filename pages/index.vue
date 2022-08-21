<template>
  <div>
    <!-- <Seo :seoData="seo.data" /> -->
    <ContainerBgImage :headerData="header.data">
      <Header :headerData="header.data" />
      <!-- <Content :data="homepage.data" /> -->
    </ContainerBgImage>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: header } = await useAsyncData('header', () => client.getSingle('header'));
  const { data: homepage } = await useAsyncData('homepage', () => client.getSingle('homepage'));
  const { data: seo } = await useAsyncData('seo', () => client.getSingle('seo'));

</script>