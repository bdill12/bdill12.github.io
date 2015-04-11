$(document).ready(function() {
		var controller = $.superscrollorama({
			triggerAtCenter: true,
			playoutAnimations: true
		});
		
		controller.pin($('#tv'), 1000000, {pushFollowers: false});
		controller.addTween('#name', 
	    	TweenMax.to($('#name'), 0.5, {css:{opacity:0}}));

		controller.pin($('#head1'), 1500, {anim: (new TimelineLite())
		.append(
			TweenMax.to($('#head1'), 0.5, {css:{opacity: 1}})
			)
		.append(
				TweenMax.to($('head1'), 0.5, {css:{opacity:0}})
				)
	});

		controller.pin($('#head2'), 1500, {anim: (new TimelineLite())
			.append(
				TweenMax.to($('#head2'), 0.5, {css:{opacity:1}})
				)
			.append(
				TweenMax.to($('head2'), 0.5, {css:{opacity:0}})
				)
		});

		controller.pin($('#head3'), 1500, {anim: (new TimelineLite())
			.append(
				TweenMax.to($('#head3'), 0.5, {css:{opacity:1}})
				)
			.append(
				TweenMax.to($('head3'), 0.5, {css:{opacity:0}})
				)
		});

		controller.pin($('#head4'), 1500, {anim: (new TimelineLite())
			.append(
				TweenMax.to($('#head4'), 0.5, {css:{opacity:1}})
				)
			.append(
				TweenMax.to($('head4'), 0.5, {css:{opacity:0}})
				)
		});
	});