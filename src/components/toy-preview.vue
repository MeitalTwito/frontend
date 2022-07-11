
<template>
    <li class="toy-preview">
        <h3>{{ toy.name }}</h3>
        <span>{{formatedPrice}}</span>
        <div class="labels-holder"><span class="label" v-for="(label, index) in toy.labels" :key="label">{{label}}</span></div>
        <div>Added on: {{formatedDate}}</div>
        <div v-if="toy.inStock">In Stock</div>
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
    },
    components: {

    },
    methods: {
    },
}
</script>
