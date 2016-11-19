Jobs = new Meteor.Collection('jobs');
Edu = new Meteor.Collection('edu');
Online = new Meteor.Collection('online');
Projects = new Meteor.Collection('projects');
Contacts  = new Meteor.Collection('contacts');

Router.configure({
    layoutTemplate: 'main',
    loadingTemplate: 'loading'
});
Router.route('/', function() {
    this.render('home2');
});
Router.route('/resume', {
    waitOn: function() {
        return [Meteor.subscribe('jobs'), Meteor.subscribe('edu'), Meteor.subscribe('online'), Meteor.subscribe('projects'), Meteor.subscribe('contacts')];
    }
});
Router.route('/services');
Router.route('/writing');
Router.route('/web');
