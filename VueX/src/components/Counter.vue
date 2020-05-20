<template>
    <div>
        <button class="btn btn-primary" @click="increment(5)">Increment</button>
        <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>