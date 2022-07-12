<template>
    <section v-if="toyToEdit">
        <button @click="close">close</button>
        <form @submit.prevent>
            <div><input type="text" v-model="toyToEdit.name" required/></div>
            <div><input type="number" v-model="toyToEdit.price"></div>
            <div><input type="checkbox" v-model="toyToEdit.inStock"/> Item in Stock</div>
            <div>
                <select v-model="toyToEdit.labels" multiple>
                    <option v-for="(label, index) in labels" :key="label" :value="label">{{label}}</option>
                </select>
            </div>
            <button @click="saveToy">Save</button>
        </form>
    </section>

</template>


<script>
import { toyService } from '../services/toy-service.js'

export default {
    name: 'toy-edit',
    data() {
        return {
            toyToEdit: null,
            labels: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor']
        }
    },
    methods: {
        close() {
            this.$router.push('/toy')
        },
        saveToy(){
            this.toyToEdit.createdAt = Date.now()
            this.$store.dispatch({type: 'saveToy', toy: this.toyToEdit}).then(()=>{
                this.$router.push('/toy')
            })
        }

    },
    watch: {
        '$route.params.toyId': {
            handler: function (toyId) {
                if (toyId) {
                    toyService.getById(toyId).then(toy => {
                        this.toyToEdit = toy
                    })
                } else this.toyToEdit = toyService.getEmptyToy()
            },
            deep: true,
            immediate: true
        }
    }
}
</script>