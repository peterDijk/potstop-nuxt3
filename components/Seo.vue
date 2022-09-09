<template>
  <div>
      <Head>
        <Title>{{ seo.data.title[0].text }}</Title>
        <Meta name="description" :content="seo.data.description" />
        <Meta name="keywords" :content="seo.data.keywords.map((item) => item.keyword).toString()"/>
      </Head>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: seo } = await useAsyncData('seo', () => client.getSingle('seo'));
</script>
