<template>
  <div />
</template>

<script lang="ts">
export default {
    props: {
    seoData: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: this.seoData.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoData.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seoData.keywords.map(item => item.keyword),
        }
      ],
    }
}
}
</script>
