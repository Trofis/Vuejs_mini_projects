<template>
    <div>
        <h1>The User Page</h1>
        <!-- <p>Loaded id : {{id}}</p> -->
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    // props:{
    //     id:{
    //         type:Number,
    //         default:0
    //     }
    // },
    // data() {
    //     return {
    //         id:this.$route.params.id
    //     }
    // },
    // watch: {
    //     '$route'(to,from){
    //         this.id = to.params.id
    //     }
    // },
    methods:{
        navigateToHome(){
            this.$router.push({name:'home'})
        }
    }
}
</script>