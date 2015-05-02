$(function(){
	xmlhttp.open("POST","http://bdill12.github.io/blog/posts",true);
	xmlhttp.send();
	function AppViewModel() {
	this.posts = ko.observableArray([xmlhttp.responseText]);
}

ko.applyBindings(new AppViewModel());
});