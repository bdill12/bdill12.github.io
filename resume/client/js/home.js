Template.main.onRendered(function() {
    this.$(".dropdown-button").dropdown({
        hover: true
    });
    this.$(".button-collapse").sideNav();
});
Template.resume.onRendered(function() {
	this.$('.collapsible').collapsible();

});
