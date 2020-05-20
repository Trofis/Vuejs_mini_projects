<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUpperCase | to-lowercase}}</p>
                <input type="text" v-model="filterText">

                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>

                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue'
    import {fruitMixIn}from './fruitMixIn'
    export default {
        data() {
            return {
                text:'Hello there'
            }
        },
        filters:{
            toUpperCase(value){
                return value.toUpperCase()
            }
        },
        components:{
            appList:List
        },
        mixins: [fruitMixIn]
    }
</script>

<style>

</style>
