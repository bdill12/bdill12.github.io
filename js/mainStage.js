var fadeSlow = function() {
    	setTimeout(function() {
    		$('.loader').fadeOut("slow");
    	}, 1500);
    };
    fadeSlow();
var gayerthan = function() {
	$('.loader').fadeIn("slow", function() {
		var secret = new TheaterJS();
		secret.describe("Gay", 1, "#gay");
		secret.describe("Gay2", 1, "#gay2");
		secret.write("Gay: The volleyball scene in <i>Top Gun</i> is based on my life.", 2000);
		secret.write("Gay: Gimme a G!");
		cheet('g', function() {
			secret.write("Gay2: G!");
			secret.write("Gay: Gimme an A!");
			cheet('a', function() {
				secret.write("Gay2: A!");
				secret.write("Gay: Gimme a Y!");
				cheet('y', function() {
					secret.write("Gay2: Y!", 500, "Gay2: ");
					secret.write("Gay: This is the new gayest thing I've ever done.", function() {
						$('#pressEnter').fadeIn("fast");
					});
					cheet("enter", function() {
						$('#pressEnter').fadeOut("fast");
						secret.write("Gay: Get over it, bitches.", 500, function() {
							$('#gay').fadeOut("slow", function() {
								$('.loader').fadeOut('fast', function() {
									$('#gay').fadeIn("fast", function() {
										secret.write("Gay: ");
									});
								});
							});
						});
					});
				});
			});
		});
	});
};
var egg = new Konami(gayerthan);