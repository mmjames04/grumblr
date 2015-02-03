var GrumblrView = Backbone.View.extend({
	initialize: function(){
		this.render()
	},
	render: function(){
		_.each(this.collection.models, function(grumble){
			$('#grumble-list').append("<div class='grumble'><img src='"+grumble.get('avatar')+"'><br><h5>"+grumble.get('title') +" | "+ grumble.get('author') +"</h5><br><p>"+ grumble.get('content')+"</p>")
		});
		},
	el: '#grumble-form',
	events: {
		'click .new-grumble':'add'
	},
	add: function(){
		var grumble = new GrumbleModel({
			title: $("[name='title']").val(),
			author: $("[name='author']").val(),
			avatar: $("[name='avatar']").val(),
			content: $("[name='content']").val()
		})
		console.log('new g was clicked')
		console.log(grumble)
		this.collection.add(grumble)
	}
})

var grumbleView = new GrumblrView({
	collection: grumbles
})

