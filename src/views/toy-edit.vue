<template>
    <section class="toy-edit" v-if="toyToEdit">

        <div class="form-holder">
            <el-form :model="toyToEdit" label-width="100px" style="width: 400px">

                <el-form-item label="Toy Name">
                    <el-input v-model="toyToEdit.name" />
                </el-form-item>

                <el-form-item label="Price">
                    <el-input-number v-model="toyToEdit.price" :min="1" />
                </el-form-item>

                <el-form-item label="Labels">
                    <el-select v-model="toyToEdit.labels" multiple placeholder="Select Labels">
                        <el-option v-for="label in labels" :key="label" :label="label" :value="label" />
                    </el-select>
                </el-form-item>

                <el-form-item label="In Stock">
                    <el-switch v-model="toyToEdit.inStock" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="saveToy">Save</el-button>
                    <el-button @click="close">Cancel</el-button>
                </el-form-item>
            </el-form>

        </div>

        <!-- <button @click="close">close</button>
        <form @submit.prevent="saveToy">
            <div><input type="text" v-model="toyToEdit.name" required /></div>
            <div><input type="number" v-model="toyToEdit.price"></div>
            <div><input type="checkbox" v-model="toyToEdit.inStock" /> Item in Stock</div>
            <div>
                <select v-model="toyToEdit.labels" multiple>
                    <option v-for="(label, index) in labels" :key="label" :value="label">{{ label }}</option>
                </select>
            </div>
            <button>Save</button>
        </form> -->
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
        saveToy() {
            this.toyToEdit.createdAt = Date.now()
            this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit }).then(() => {
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