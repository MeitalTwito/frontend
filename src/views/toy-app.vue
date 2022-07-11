<template>
    <section class="toy-app">
        <toy-filter @setFilter="setFilter" />
        <toy-list v-if="toys" :toys="toys" />
    </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
    name: 'toy-app',
    computed: {
        toys() {
            return this.$store.getters.toysToShow
        },

    },
    methods: {
        setFilter(filterBy) {
            this.$store.commit({type: 'setFilter', filterBy})
        }
    },
    components: {
        toyList,
        toyFilter
    }
}

</script>


