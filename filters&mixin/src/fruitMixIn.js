export const fruitMixIn = {
    data() {
        return {
            fruits: ['pomme', 'poire', 'fraise', 'banane'],
            filterText:''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((elem) => {
                return elem.match(this.filterText)
            })
        }
    },
}