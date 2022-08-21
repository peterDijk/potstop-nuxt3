<template>
  <div class="w-screen h-screen bg-white overflow-hidden absolute">
    <img
      :src="headerData['header-image'].url"
      class="object-cover h-full w-full absolute"
    />
    <div
      class="container mx-auto h-full relative flex-row justify-center overflow-scroll"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
    props: {
    headerData: {
      type: Object,
      required: true,
    }
  }
}
</script>
