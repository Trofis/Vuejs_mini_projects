// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		show: true,
		ingredients:['meat', 'fruit', 'cookies'],
		persons:[
			{name:'Thomas', age:22, color:'red'},
			{name:'Pierre', age:18, color:'green'}

		]

	}
})