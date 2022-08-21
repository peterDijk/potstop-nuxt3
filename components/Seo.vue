<template>
<div>
    <Head>
      <Title>{{ seoData.title[0].text }}</Title>
      <Meta name="description" :content="seoData.description" />
      <Meta name="keywords" :content="allKeywords"/>
    </Head>
</div>
</template>

<script>
export default {
  props: {
    seoData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      allKeywords: this.seoData.keywords.map((item) => item.keyword).toString(),
    }
  }
}
</script>
