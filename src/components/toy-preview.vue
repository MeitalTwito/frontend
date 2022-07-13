
<template>
    <li class="toy-preview">
        <h3>{{ toy.name }}</h3>
        <span>{{formatedPrice}}</span>
        <div class="labels-holder"><span class="label" v-for="(label, index) in toy.labels" :key="label">{{label}}</span></div>
        <div>Added on: {{formatedDate}}</div>
        <div class="stock"><span :class="SetStockClass">{{stockMsg}}</span></div>
        <div class="btn-group">
          <el-button @click="goToEdit" type="primary" plain>Edit</el-button>
          <el-button @click="goToDetails" type="info" plain>Details</el-button>
          <el-button @click="removeToy(toy._id)" type="danger" plain>Delete</el-button>
          <!-- <button @click="goToEdit">edit</button>
          <button @click="goToDetails">details</button>
          <button @click="removeToy(toy._id)">delete</button> -->
        </div>
    </li>
</template>

<script>
export default {
    name: 'toy-preview',
    props: {
        toy: Object,
    },
    computed: {
        formatedPrice() {
            const currency = 'ILS'
            const {price} = this.toy
            return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price);
        },
        formatedDate(){
            return new Date(this.toy.createdAt).toDateString()
        },
        stockMsg(){
            if (this.toy.inStock) return 'In Stock'
            else return 'Sold Out'
        },
        SetStockClass(){
            if (this.toy.inStock) return 'in-stock'
            else return 'sold-out'
        }
        
    },
    components: {

    },
    methods: {
        removeToy(toyId){
            this.$emit('removeToy', toyId)
        },
        goToEdit(){
            this.$router.push(`/toy/edit/${this.toy._id}`)
        },
        goToDetails(){
            this.$router.push(`/toy/${this.toy._id}`)
        }
    },
}
</script>
