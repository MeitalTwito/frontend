<template>
    <section v-if="toy">
        <button @click="close">close</button>
        <pre>{{ toy }}</pre>
    </section>

</template>


<script>
import { toyService } from '../services/toy-service.js'

export default {
    name: 'toy-details',
    data() {
        return {
            toy: null,
        }
    },
    methods: {
        close() {
            this.toy = null
            this.$router.push('/toy')
        },
    },
    watch: {
        '$route.params.toyId': {
            handler: function (toyId) {
                if (toyId) {
                    toyService.getById(toyId).then(toy => {
                        this.toy = toy
                    })
                } 
            },
            deep: true,
            immediate: true
        }
    }
}
</script>