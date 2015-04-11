window.onload = function() {
	resize();
};

var resize = function() {
	var width = $(document).width();
	if (width <= 480) {
		oneColumn();
		removeIt();
	}
};

window.onresize = function() {
	reload();
};

var reload = function() {
	var width = $(document).width();
	console.log(width);
	if (width <= 480) {
		oneColumn();
		removeIt();
	}
	if (width >= 480) {
		$('#experience').after($('#edupic'));
		$('#edupic').after($('#experience-caption'));
		$('#experience-caption').after($('#education-caption'));
		$('#writing-caption').after($('#webdev-caption'));
		$('#webdev-caption').after($('#writing'));
		$('#writing').after($('#webdev'));
		$('#choice1').after($('#instructions'));
		addIt();
	}
};

var removeIt = function(){
	console.log('well, the function is getting called.');
	$('#experience').removeClass( "sb-toggle-left" );
	$('#edupic').removeClass( "sb-toggle-right" );
	$('#writing').removeClass( "sb-toggle-left2" );
	$('#webdev').removeClass( "sb-toggle-right2" );
};

var addIt = function() {
	$('#experience').addClass("sb-toggle-left");
	$('#edupic').addClass("sb-toggle-right");
	$('#writing').addClass("sb-toggle-left2");
	$('#webdev').addClass("sb-toggle-right2");
};

var oneColumn = function(){
	$('#experience').after($('#experience-caption'));
	$('#edupic').after($('#education-caption'));
	$('#writing').after($('#writing-caption'));
	$('#webdev').after($('#webdev-caption'));
	$('#name').after($('#instructions'));
};