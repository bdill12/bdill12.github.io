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
		secret.write("Gay: The volleyball scene in Top Gun is based on my life.", 2000);
		secret.write("Gay: Get over it, bitches.", function() {
			$('#gay').fadeOut("slow", function() {
				$('.loader').fadeOut('fast', function() {
					$('#gay').fadeIn("fast", function() {
						secret.write("Gay: ");
					});
				});
			});
		});
	});
};
var egg = new Egg("up,up,down,down,left,right,left,right,b,a", gayerthan).listen();