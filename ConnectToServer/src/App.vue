<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="from-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="from-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit()">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <button class="btn btn-primary" @click="fetchData()">Fetch data</button>
                <br><br>
                <ul class="list-goup">
                    <li class="list-group-item" v-for="u in users" :key="u.username">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user:{
                    username:'',
                    email:'',
                    users:[],
                    resource: {},
                    node:"data"
                }
            }
        },
        methods: {
            submit(){
                // this.$http.post("data.json", this.user)
                //     .then(response => {
                //         console.log(response)
                //     }, error => {
                //         console.log(error)
                //     })
                // this.resource.save({}, this.user)
                this.resource.saveAlt(this.user)
            },
            fetchData(){
                // this.$http.get("data.json")
                //     .then(response => {
                //         return response.json()
                //     }).then(data => {
                //         const resultArray = []
                //         for (let key in data)
                //             resultArray.push(data[key])
                //         this.users = resultArray
                //         console.log(this.users[0].username)
                //     })
                this.resource.getData({node:this.node})
                .then(response => {
                        return response.json()
                    }).then(data => {
                        const resultArray = []
                        for (let key in data)
                            resultArray.push(data[key])
                        this.users = resultArray
                        console.log(this.users[0].username)
                    })
            }
        },
        created() {
            const customActions = {
                saveAlt: {method:'POST', url:"alternative.json"},
                getData: {method:'GET'}

            }
            this.resource = this.$resource('{node}.json', {}, customActions)
        },
    }
</script>

<style>
</style>
