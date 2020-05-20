// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		counter1: 0,
		counter2: 0,
		link:'http://google.com'
	},
	computed: {
		output : function(){
			console.log('computed')

			return this.counter1 > 5 ? 'Greater than 5' : 'Smaller than 5'
		}
	},
	watch: {
		counter1: function(){
			var vm = this
			setTimeout(function(){
				vm.counter1 = 0
			},2000)
		}
	},
	methods: {
		result : function() {
			console.log('method')
			return this.counter1 > 5 ? 'Greater than 5' : 'Smaller than 5'
		},
		changeLink: function(){
			this.link = 'http://apple.com'
		}
	}
})