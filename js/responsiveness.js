window.onload = function() {
	resize();
};

var resize = function() {
	var width = $(document).width();
	if (width <= 480) {
		$('#experience').after($('#experience-caption'));
		$('#education').after($('#education-caption'));
		$('#writing').after($('#writing-caption'));
		$('#webdev').after($('#webdev-caption'));
	}
};

window.onresize = function() {
	reload();
};

var reload = function() {
	var width = $(document).width();
	console.log(width);
	if (width <= 480) {
		$('#experience').after($('#experience-caption'));
		$('#education').after($('#education-caption'));
		$('#writing').after($('#writing-caption'));
		$('#webdev').after($('#webdev-caption'));
	}
	if (width >= 480 && width <= 600) {
		$('#experience').after($('#education'));
		$('#education').after($('#experience-caption'));
		$('#experience-caption').after($('#education-caption'));
		$('#writing').after($('#webdev'));
		$('#webdev').after($('writing-caption'));
		$('#writing-caption').after($('webdev-caption'));
	}
};