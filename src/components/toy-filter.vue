<template>
  <section class="toy-filter">

  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        name: '',
        stock: '',
        label: '',
        sortBy: ''
        },
    }
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', this.filterBy)
    },
  },
}
</script>
