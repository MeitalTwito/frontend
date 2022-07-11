<template>
  <ul class="toy-list">
    <toy-preview v-for="toy in toys" :toy="toy" :key="toy.id" />
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    toyPreview,
  },
  methods: {
  },
}
</script>
