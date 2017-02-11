Template.home2.events({
	'mousedown circle' : function(event) {
		var original = "rgba(33,33,33,1)";
		thisCircle = event.currentTarget;
		thisCircle.siblings.setAttribute('r', '0');
		thisCircle.setAttribute('r', '5000');
		setTimeout(function() {
			$('body').css('background-color', event.currentTarget.getAttribute('fill'));
		}, 300);

	},
	"mouseup circle" : function(event) {
		event.currentTarget.setAttribute('r', '80');
	}
});
