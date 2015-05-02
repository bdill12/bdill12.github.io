$(function(){
var data = "";
$.get("http://bdill12.github.io/blog/posts.xml", function(response, textStatus, jqXHR){
	data = response;
}, 'xml');
setTimeout(function(){
	function AppViewModel() {
		var self = this;
		self.posts = ko.observableArray([]);
		for (var i = 0; i < data.firstElementChild.children.length; i++) {
			var myTitle = data.firstElementChild.children[i].children[0].textContent;
			var myContent = data.firstElementChild.children[i].children[1].textContent;
			var myNum = data.firstElementChild.children[i].children[2].textContent;
			self.posts.push({title: myTitle, content: myContent, postNum: myNum});
		}
		console.log("1. " + self.posts()[0]);
	}
	var viewModel = new AppViewModel();
	ko.applyBindings(viewModel);
}, 1000);
});