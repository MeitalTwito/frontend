<template>
    <section class="toy-app">
        <router-view/>
        <toy-filter @setFilter="setFilter" />
        <div class="actions"><el-button @click="goToAddToy" type="primary" plain>Add New Toy</el-button></div>
        <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
        
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


