var GrumblrCollection = Backbone.Collection.extend({
	model: GrumbleModel
});

var grumbles = new GrumblrCollection([grumble])

grumbles.on('add', function( model ){
	console.log('adding model', model )
})