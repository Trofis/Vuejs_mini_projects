// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		counter: 0,
		x:0,
		y:0,
		name:""
	},
	methods: {
		increase : function(step) {
			this.counter +=step
		},
		updateCoord: function(event) {
			this.x = event.clientX
			this.y = event.clientY
		},
		alertMe: function(){
			alert('Alert me')
		}
	},
})