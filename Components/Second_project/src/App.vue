<template>
    <div class="container">
        <div>
            <h1>Quotes added</h1>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{width:widthP+ '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{nbQuotes}}/{{maxQuotes}}</div>
            </div>
        </div>

        <div class="mx-auto w-50 p-3">
            <h2>Quote</h2>
            <textarea style="width:100%;height:100%;" v-model="text"></textarea>
            <div class="text-center mt-3">
                <button class="btn btn-primary" @click="addQuote()">Add quote</button>
            </div>
        </div>

        <app-quote-grid :quotes="quotes" :removeQuote="removeQuote"></app-quote-grid>

        <div class="alert alert-primary mt-3" role="alert">
            Info: click on a quote to delete it
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'

    export default {
        data() {
            return {
                nbQuotes:0,
                maxQuotes:10,
                widthP:0,
                text:'',
                quotes:[]
            }
        },
        components:{
            appQuoteGrid:QuoteGrid
        },
        watch: {
            nbQuotes: function(){
                this.widthP = this.nbQuotes/this.maxQuotes*100
            }
        },
        methods: {
            addQuote(){
                if (this.nbQuotes == this.maxQuotes)
                    return alert('Max already reached')
                this.nbQuotes++
                this.quotes.push(this.text)
            },
            removeQuote(quote){
                console.log(quote)
                this.nbQuotes--
                const index = this.quotes.indexOf(quote)
                if (index > -1) {
                    this.quotes.splice(index, 1);
                }
                console.log(this.quotes)
            }
        }
    }
</script>

<style>
</style>
