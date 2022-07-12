<template>
    <section class="toy-app">
        <toy-filter @setFilter="setFilter" />
        <button @click="goToAddToy">Add New Toy</button>
        <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
        <router-view/>
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
        },
        removeToy(toyId){
            this.$store.dispatch({type:'removeToy', toyId})
        },
        goToAddToy(){
            this.$router.push('/toy/edit')
        }
    },
    components: {
        toyList,
        toyFilter
    }
}

</script>


