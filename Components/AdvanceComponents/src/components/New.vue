<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase counter</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter:0
        }
    },
    destroyed() {
        console.log("destroyed")
    },
    deactivated() {
        console.log("deactivated")
    },
    activated() {
        console.log("activated")
    },
}
</script>

<style scoped>

</style>