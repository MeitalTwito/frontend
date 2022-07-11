<template>
  <section class="app-container">
    <router-view />
  </section>
</template>
<script>
  export default{
    name: 'App',
    created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  }
</script>