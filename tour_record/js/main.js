var ViewModel = function() {
	var self = this;

	self.showToursMenu = ko.observable(false);

	self.toursMenu = function() {
		self.showToursMenu(!self.showToursMenu());
	};

	self.editMenu = function() {

	};

	self.optionsView = function() {

	};
};

ko.applyBindings(new ViewModel());