<template>
    <div>
        <h3>Edit the User</h3>
        <p>Local : {{$route.query.locale}}</p>
        <p>q : {{$route.query.q}}</p>
        <button class="btn btn-primary" @click="confirmed = !confirmed">Confirm</button>
        <div style="height: 700px">
        </div>
        <p id="data">Some extra data</p>

    </div>

</template>

<script>
export default {
    data() {
        return {
            confirmed:false    
        }
    },
    beforeRouteLeave (to, from, next) {
        if(this.confirmed)
            next()
        else if (confirm('Are you sure ?'))
            next()
        else
            next(false)
    }
}
</script>