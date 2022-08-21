<template>
  <div class="bg-white text-sky-900 mt-16 mb-4 p-6">
    <prismic-rich-text :field="data['body']" wrapper="div" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

