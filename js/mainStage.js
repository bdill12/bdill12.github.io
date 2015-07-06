
    var theater = new TheaterJS();

    theater.describe("Loader", 0.9, "#loader");
    theater.write("Loader: Welcome...");

    var fadeSlow = function() {
    	setTimeout(function() {
    		$('.loader').fadeOut("slow");
    	}, 1500);
    };
    fadeSlow();
