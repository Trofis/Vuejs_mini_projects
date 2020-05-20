// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data:{
		attachRed:false,
		color:'green',
		width:100
	},
	watch: {
		attachRed:function(value){
			console.log(value)
		}
	},
	computed: {
		divClasses: function(){
			return {
				red: this.attachRed,
				blue: !this.attachRed
			}
		},
		myStyle:function(){
			return{
				backgroundColor:this.color,
				width: this.width+ 'px'
			}
		}
	},
})