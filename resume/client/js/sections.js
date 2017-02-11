Template.projects.helpers({
    projects: function() {
        return Projects.find();
    }
});
Template.online.helpers({
    online: function() {
        return Online.find();
    }
});
Template.jobs.helpers({
    jobs: function() {
        return Jobs.find();
    }
});
Template.edu.helpers({
    edu: function() {
        return Edu.find();
    }
});
Template.contact.helpers({
    'email': ' bdill12@gmail.com',
    'emailurl': 'mailto:bdill12@gmail.com',
    'mobile': '(806)470-3013',
    'location': ' Los Angeles, CA',
    socials: function() {
      return Contacts.find();
    }
});
Template.footer.inheritsHelpersFrom('contact');