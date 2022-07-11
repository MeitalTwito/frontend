<template>
    <section class="toy-filter">
        <pre>{{ filterBy }}</pre>
        <input type="search" v-model="filterBy.name" placeholder="Search by Name" @input="setFilter">
        <div><input  v-model="filterBy.inStock" type="checkbox" @change="setFilter"><span> Show only items in stock </span></div>
        <div>
            <span> Sort by </span>
            <select v-model="filterBy.sortBy" @change="setFilter">
                <option v-for="(opt, index) in sortOptions" :key="opt" :value="opt">
                    {{ opt }}
                </option>
            </select>
        </div>
        <div>
            <select @change="setFilter" v-model="filterBy.label" multiple>
                <option value="">All</option>
                <option v-for="(label, index) in labels" :key="label" :value="label">{{label}}</option>
            </select>
        </div>
    </section>
</template>

<script>
export default {
    name: 'toy-filter',
    data() {
        return {
            filterBy: {
                name: '',
                inStock: false,
                label: [],
                sortBy: ''
            },
            sortOptions: ['', 'name', 'price', 'date'],
            labels: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor']   
        }
    },
    methods: {
        setFilter() {
            const filterBy = JSON.parse(JSON.stringify(this.filterBy))
            this.$emit('setFilter', filterBy)
        },
    },
}
</script>
