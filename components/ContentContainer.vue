<template>
  <div>
    <Seo />
    <div class="w-screen h-screen bg-white overflow-hidden absolute">
      <img
        :src="header.data['header-image'].url"
        class="object-cover h-full w-full absolute"
      />
      <div
        class="container mx-auto h-full relative flex-row justify-center overflow-scroll"
      >
        <Header :headerData="{...header.data, title: title }" />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  const { client } = usePrismic();
  const { data: header } = await useAsyncData('header', () => client.getSingle('header'));

  const props = defineProps({
    title: String
  })
</script>
