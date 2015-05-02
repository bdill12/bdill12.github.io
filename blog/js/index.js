$(function(){
	function AppViewModel() {
			var self = this;
			self.posts = ko.observableArray();
		}
	var viewModel = new AppViewModel();

	$.get("http://bdill12.github.io/blog/posts.xml", function(response, textStatus, jqXHR){
		viewModel.posts(response);
	}, 'xml');

	ko.applyBindings(viewModel);

});