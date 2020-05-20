<template>
     <div class="row">
            <app-quote v-for="(quote,i) in quotes" :key="i" @click.native="removeQuote(quote)" class="mt-3 mr-4">
                {{quote}}
            </app-quote>

    </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
    props:{
        quotes:Array,
        removeQuote:Function
    },
    components:{
        appQuote:Quote
    }
}
</script>