<template>
  <div id="header-text">
    <!-- <Slide>
      <a id="home" href="/">
        <span>home</span>
      </a>
      <a id="about" href="/about">
        <span>over potstop</span>
      </a>
    </Slide> -->
    <div class="pt-48" />
    <div class="p-4 pt-2">
      <div class="flex-row">
        <img 
          :src="headerData['logo_image'].url"
          class="pl-6 p-3 inline object-scale-down"
        />
        <h1
          class="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl text-white pl-6 p-3 text-right w-full"
        >
          {{headerData['title'][0].text }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    headerData: {
      type: Object,
      required: true,
    }
  }
}
</script>

