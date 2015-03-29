var pizzaIngredients = {
	"meats" : ["Pepperoni", "Sausage", "Fennel Sausage", "Spicy Sausage", "Chicken", "BBQ Chicken", "Chorizo", 
	"Chicken Andouille", "Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto", "Italian Sausage", "Ground Beef", 
	"Anchovies", "Turkey", "Ham", "Venison", "Lamb", "Duck", "Soylent Green", "Carne Asada", "Soppressata Picante", 
	"Coppa", "Pancetta", "Bresola", "Lox", "Guanciale", "Chili", "Beef Jerky", "Pastrami", "Kielbasa", "Scallops", 
	"Filet Mignon"], 
	"nonMeats" : ["White Onions", "Red Onions", "Sauteed Onions", "Green Peppers", "Red Peppers", "Banana Peppers",
	"Ghost Peppers", "Habanero Peppers", "Jalapeno Peppers", "Stuffed Peppers", "Spinach", "Tomatoes", "Pineapple",
	"Pear Slices", "Apple Slices", "Mushrooms", "Arugula", "Basil", "Fennel", "Rosemary", "Cilantro", "Avocado",
	"Guacamole", "Salsa", "Swiss Chard", "Kale", "Sun Dried Tomatoes", "Walnuts", "Artichoke", "Asparagus",
	"Caramelized Onions", "Mango", "Garlic", "Olives", "Cauliflower", "Polenta", "Fried Egg", "Zucchini", "Hummus"],
	"cheeses" : ["American Cheese", "Swiss Cheese", "Goat Cheese", "Mozzarella Cheese", "Parmesean Cheese",
	"Velveeta Cheese", "Gouda Cheese", "Muenster Cheese", "Applewood Cheese", "Asiago Cheese", "Bleu Cheese",
	"Boursin Cheese", "Brie Cheese", "Cheddar Cheese", "Chevre Cheese", "Havarti Cheese", "Jack Cheese",
	"Pepper Jack Cheese", "Gruyere Cheese", "Limberger Cheese", "Manchego Cheese", "Marscapone Cheese", "Pecorino Cheese",
	"Provolone Cheese", "Queso Cheese", "Roquefort Cheese", "Romano Cheese", "Ricotta Cheese", "Smoked Gouda"],
	"sauces" : ["Red Sauce", "Marinara", "BBQ Sauce", "No Sauce", "Hot Sauce"],
	"crusts" : ["White Crust", "Whole Wheat Crust", "Flatbread Crust", "Stuffed Crust"],
	"makeAPizza" : function() {
		var pizza = '';
		var numberOfMeats = Math.floor((Math.random() * 4));
		var numberOfNonMeats = Math.floor((Math.random() * 3));
		var numberOfCheeses = Math.floor((Math.random() * 2));

		for (var i = 0; i <= numberOfMeats; i++) {
			pizza += '<li>' + pizzaIngredients.meats[Math.floor(Math.random() * pizzaIngredients.meats.length)] + '</li>';
		}
		for (var j = 0; j <= numberOfNonMeats; j++) {
			pizza += '<li>' + pizzaIngredients.nonMeats[Math.floor(Math.random() * pizzaIngredients.nonMeats.length)] + '</li>';
		}
		for (var k = 0; k <= numberOfCheeses; k++) {
			pizza += '<li>' + pizzaIngredients.cheeses[Math.floor(Math.random() * pizzaIngredients.cheeses.length)] + '</li>';
		}
		pizza += '<li>' + pizzaIngredients.sauces[Math.floor(Math.random() * pizzaIngredients.sauces.length)] + '</li>';
		pizza += '<li>' + pizzaIngredients.crusts[Math.floor(Math.random() * pizzaIngredients.crusts.length)] + '</li>';
		return pizza;
	},
	'pizzaElementGenerator' : function(i) {
	var pizzaContainer,             // contains pizza title, image and list of ingredients
	pizzaImageContainer,        // contains the pizza image
    pizzaImage,                 // the pizza image itself
    pizzaDescriptionContainer,  // contains the pizza title and list of ingredients
    pizzaName,                  // the pizza name itself
    ul;                         // the list of ingredients

    pizzaContainer  = document.createElement("div");
  	pizzaImageContainer = document.createElement("div");
  	pizzaImage = document.createElement("img");
  	pizzaDescriptionContainer = document.createElement("div");

  	pizzaContainer.classList.add("randomPizzaContainer");
  	pizzaContainer.id = "pizza" + i;                // gives each pizza element a unique id
  	pizzaImageContainer.classList.add("col-md-6");

  	pizzaImage.src = "images/pizza.png";
  	pizzaImage.classList.add("img-responsive");
  	pizzaImageContainer.appendChild(pizzaImage);
  	pizzaContainer.appendChild(pizzaImageContainer);

  	pizzaDescriptionContainer.classList.add("col-md-6");

  	pizzaName = document.createElement("h4");
  	pizzaName.innerHTML = randomName();
  	pizzaDescriptionContainer.appendChild(pizzaName);

  	ul = document.createElement("ul");
  	ul.innerHTML = pizzaIngredients.makeAPizza();
  	pizzaDescriptionContainer.appendChild(ul);
  	pizzaContainer.appendChild(pizzaDescriptionContainer);

  console.log(pizzaContainer);
}
};

	pizzaIngredients.pizzaElementGenerator();