// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
    el: '#app',
    data:{
        hp_you:100,
        hp_monster:100,
        game_started:false,
        end:false,
        messages:[]
    },
    watch: {
        game_started: function(value){
            if (value)
            {
                this.hp_you = 100
                this.hp_monster =100
                this.end =false
                this.messages = []
            }
        },
        hp_you: function(){
            if (this.hp_you <= 0)
                this.end =true
        },
        hp_monster: function(){
            if (this.hp_monster <= 0)
                this.end =true
        }
    },
    computed:{
        actualWidthM: function(){
            return {
                width: this.hp_monster*0.198+'em'
            }
        },
        actualWidthY: function(){
            return {
                width:  this.hp_you*0.198+'em'
            }
        },
        
    },
    methods: {
        attack: function(){
            const MAttack = Math.floor(Math.random()*Math.floor(10))
            this.hp_you -= MAttack
            this.messages.push({type:'monster', value:'Monster hits monster for '+MAttack})

            const YAttack = Math.floor(Math.random()*Math.floor(10))
            this.hp_monster -= YAttack
            this.messages.push({type:'you', value:'Player hits player for '+YAttack})
           
            console.log(this.messages)
        },
        specialAttack: function(){
            const MAttack = Math.floor(Math.random()*Math.floor(10))
            this.hp_you -= MAttack
            this.messages.push({type:'monster', value:'Monster hits monster for '+MAttack})

            const YAttack = Math.floor(Math.random()*Math.floor(15))
            this.hp_monster -= YAttack
            this.messages.push({type:'you', value:'Player hits player for '+YAttack})
           
        },
        heal: function(){
            const MAttack = Math.floor(Math.random()*Math.floor(10))
            this.hp_you -= MAttack
            this.messages.push({type:'monster', value:'Monster hits monster for '+MAttack})
            
            const heal = Math.floor(Math.random()*Math.floor(10))
            this.hp_you += heal
            this.messages.push({type:'you', value:'Player heals himself for '+heal})

        },
    },
})