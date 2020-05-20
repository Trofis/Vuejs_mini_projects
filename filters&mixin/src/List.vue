<template>
    <div class="container">
        <input type="text" v-model="filterText">
        <button @click="fruits.push('raisins')">Add new item</button>
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixIn} from './fruitMixIn'
    export default {
        mixins: [fruitMixIn]
    }
</script>

<style>

</style>
