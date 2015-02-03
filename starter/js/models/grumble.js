var GrumbleModel = Backbone.Model.extend({
	defaults: {
		author:'',
		content:'',
		avatar:'',
		title:''
	}
})

var grumble = new GrumbleModel({
	avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6Kj-N_C-WrxK68cvuTHSAYNTR_gdrzsBD-9VOEE2bxYr3-y6K',
	author: 'james',
	title: 'smelly cat',
	content: 'what are they feeding you'
})
