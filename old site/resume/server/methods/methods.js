Meteor.methods({
	'insertThing': function(thingType, thing) {
		if (thingType == "job") {
			Jobs.insert(thing);
		} else if (thingType == "edu") {
			Edu.insert(thing);
		} else if (thingType == "online") {
			Online.insert(thing);
		} else if (thingType == "project") {
			Projects.insert(thing);
		} else {
                  Contacts.insert(thing);
                }
	},
	'removeThing': function(thingType, thing) {
		if (thingType == "job") {
			Jobs.remove(thing._id);
		} else if (thingType == "edu") {
			Edu.remove(thing._id);
		} else if (thingType == "online") {
			Online.remove(thing._id);
		} else if (thingType == "project") {
			Projects.remove(thing._id);
		} else {
                  Contacts.remove(thing._id);
                }
	},
	'updateThing': function(thingType, thing, change) {
		if (thingType == "job") {
			Jobs.update(thing._id, change);
		} else if (thingType == "edu") {
			Edu.update(thing._id, change);
		} else if (thingType == "online") {
			Online.update(thing._id, change);
		} else if (thingType == "project") {
			Projects.update(thing._id, change);
		} else {
                  Contacts.update(thing._id, change);
                }
	}
});
/*Meteor.methods({
  'chargeCard': function(stripeToken) {
    var Stripe = StripeAPI('SECRET_KEY');

    Stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});*/