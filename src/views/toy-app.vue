<template>
    <section class="toy-app">
        <toy-list v-if="toys" :toys="toys"/>
    </section>
</template>

<script>
import toyList from '../components/toy-list.vue'
export default {
    name: 'toy-app',
    computed:{
     toys(){
        return this.$store.getters.toys
     },
    },
    components: {
        toyList,
    }
}

</script>