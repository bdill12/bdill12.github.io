## Website Performance Optimization portfolio project
As a part of Project 4 for Udacity's Nanodegree in Front End Development -
Site can be found at bdill12.github.io.
Pizzas can be found at Pizza Hut, not at the Pizzaria on the page, sadly.
I was unsure as to how much we should change the css, etc. to "make it our own". I just changed the text. 


####Part 1: Optimize PageSpeed Insights score for index.html
In order to reach a PageSpeed Insights score of 90 or above for the portfolio:
	1. Inlined all CSS except print-specfic, removing unused classes.
	2. Added Media="print" to the print-specific CSS so it would not block rendering.
	3. Removed the Google Font, as it wasn't particularly special in any way. . .
	4. Added window.onload to the Google Analytics script
	5. Added "async" attribute to other .js files
	6. Compressed and resized other images on the page with Photoshop so the browser would not need to resize them.

####Part 2: Optimize Frames per Second in pizza.html
	A. Moved constant calculations outside of for loops.
		1. var scrollTop = (document.body.scrollTop / 1250);
  			for (var i = 0; i < items.length; i++) {
    			var phase = Math.sin(scrollTop + (i % 5));
    			items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    		}
    B. Reduced amount of pizzas from the overwhelming 200 to 48.
    	1. document.addEventListener('DOMContentLoaded', function() {
  			var cols = 8;
  			var s = 256;
  			for (var i = 0; i < 48; i++) {
   			 var elem = document.createElement('img');
   			 elem.className = 'mover';
   			 elem.src = "images/pizza.png";
   			 elem.basicLeft = (i % cols) * s;
   			 elem.style.top = (Math.floor(i / cols) * s) + 'px';
   			 document.querySelector("#movingPizzas1").appendChild(elem);
   			 }
   			 updatePositions();
   			 });

####Part 3: Resize Pizzas in under 5ms.
	A. Moved all constant calculations outside of for loops.
		1. function changePizzaSizes(size) {
    		var dx = determineDx(document.getElementsByClassName("randomPizzaContainer")[0], size);
    		var newwidth = (document.getElementsByClassName("randomPizzaContainer")[0].offsetWidth + dx) + 'px';
    		for (var i = 0; i < document.getElementsByClassName("randomPizzaContainer").length; i++) {
    			document.getElementsByClassName("randomPizzaContainer")[i].style.width = newwidth;
    		}
    		}
	B. Changed all querySelectors to getElementsByClassName instead.


As a side note... I also capitalized all the nouns and adjectives instead of having the browser do it each time the page was loaded. I don't think it had any real affect on anything, but I did it nonetheless with the code found in views/js/capitalize.js.