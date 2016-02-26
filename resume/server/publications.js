Meteor.publish('jobs', function() {
	return Jobs.find();
});
Meteor.publish('edu', function() {
	return Edu.find();
});
Meteor.publish('online', function() {
	return Online.find();
});
Meteor.publish('projects', function() {
	return Projects.find();
});
Meteor.publish('contacts', function() {
	return Contacts.find();
});
Jobs.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});
Contacts.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});
Edu.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});
Online.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});
Projects.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});