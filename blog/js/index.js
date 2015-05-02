$(function(){
	$.get("http://bdill12.github.io/blog/posts.xml", function(response){
		console.log(response());
		function AppViewModel() {
			this.posts = ko.observableArray([response.getElementsByTag('posts')]);
			ko.applyBindings(new AppViewModel());
	}
}, 'xml');
});