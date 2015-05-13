function ViewAppModel() {
  var self = this;
  self.service = ko.observable();
  self.writingDesc  = ko.observable();
  self.contacts = ko.observable();
  self.webService = ko.observable();
  self.webDesc = ko.observable();
  self.price = ko.observable();
  self.webPrice = ko.observable();

  self.email = "mailto:brentcdill@gmail.com";
  self.twitter = "http://www.twitter.com/bdill12";
  self.facebook = "http://www.facebook.com/bdill12";
  self.github = "http://github.com/bdill12";
  self.linkedIn = "http://www.linkedin.com/in/brentcdill";
  self.google = "https://plus.google.com/+BrentDill12";
  self.links = [{link: self.email, name: "email"},{link: self.twitter, name: "@bdill12"},{link: self.facebook, name: "facebook"},{link: self.github, name: "github"},{link: self.linkedIn, name: "linkedIn"},{link: self.google, name: "google+"}];
  self.services = [
  {service:"Web Content", price:"60", desc:"Buying this service entitles you to a picture's worth of words for your web site. You may divide the words as you see fit, allocating certain amounts to certain pages or projects. These words are to be used for on-page content for your site: (paragraphs on your home page explaining your product or service, your about me page, frequently asked questions, how to's, etc.)"},
  {service:"Proofreading and Editing", price:"45", desc: "Send me a thousand words to edit and proofread. Editing:  Your writing will be read for accuracy and flow. If you can't seem to get all your thoughts in the right order, I will take them apart and reassemble them in a way that makes sense. Editing is all about the big picture. Proofreading: This is where your writing gets the fine-tooth comb treatment. I do everything I can to make sure the copy is mistake-free."},
  {service:"R\xE9sum\xE9s and Cover Letters", price: "40", desc:"Old fashioned cover letters are forgettable. How many times do you think a hiring professional has to read about an applicant's attention to detail? A cover letter must be unique and relatable. It should feel as though the reader is reading an email from a friend. Even when a more formal cover letter is appropriate, the goal should be to emphasize your personality."},
  {service: "Misc", price:"0", desc: "Got an idea that needs some words to help it along? Send me a description of your project, and we will discuss how to approach it."}];
  self.webServices = [
  {webService: "Troubleshoot Your Site", price: "$50 per hour", webDesc: "Got a problem with your website, but don't have time to dig around and figure out how to fix it? I'll be happy to. Let me know what's going on, and I'll liet you know if I can fix it. Full refunds on failures."},
  {webService: "Make it Mobile Responsive", price: "$50 per hour", webDesc: "I will convert your site to a mobile responsive design. It will great on your smart phone, which is where a growing number of searches are taking place."},
  {webService: "Build A Site From Scratch", price: "500", webDesc: "This is a big undertaking. What you'll get: Initial renderings of design as image or PDF files. You will make notes, and we will continue the process until we find something you are happy with. Then I will start building the site and adding all the features you need. Price will vary based on your hosting."},
  {webService: "Other", price: "0", webDesc:"You've got an idea, but no clue what the best way to get it out of your head is? Tell me and we'll see if you're just a crazy person or a crazy person with a good idea."}];

  self.showServices = function() {
    $('#contact').addClass('hidden');
    $('#about').addClass('hidden');
    $('#subServices').removeClass('hidden');
  };

  self.showContact = function() {
    $('#subServices').addClass('hidden');
    $('#about').addClass('hidden');
    $('#contact').removeClass('hidden');
  };

  self.goWrite = function() {
    $('html, body').animate(
      {scrollTop: $('#writingServices').offset().top -115 }, 'slow');
  };

  self.goWeb = function() {
    $('html, body').animate(
      {scrollTop: $('#webServices').offset().top -115 }, 'slow');
  };

  self.showAbout = function() {
    $('#contact').addClass('hidden');
    $('#subServices').addClass('hidden');
    $('#about').removeClass('hidden');

  };

  self.toTop = function(show) {
    $('html,body').animate({scrollTop: $('.topWrapper').offset().top -115}, 'fast');
    show();
  };

  self.chooseService = function(number) {
    self.service(this.services[number].service);
    self.writingDesc(this.services[number].desc);
    self.price(this.services[number].price);
  };

  self.chooseWeb = function(number) {
    self.webService(this.webServices[number].webService);
    self.webDesc(this.webServices[number].webDesc);
    self.webPrice(this.webServices[number].price);
  };
}
ko.applyBindings(new ViewAppModel());



//scrolling
$(window).scroll(function() {
    var social = $('.social1');
    var picture = $('#picture');
    var header = $('.header');
    var footer = $('.footer');
    var y = $(this).scrollTop();
    var z = $('.one').offset().top - 350;
    var aaa = $('.two').offset().top - 300;
    var x = $('.title').offset().top - 300;
    var web = $('.webServices').offset().top - 300;
    var i = 0;
    if (y >= z && y - x < -50) {
        social.removeClass('hidden');
        picture.attr("src", "http://bdill12.github.io/images/2.jpg");
    } else if (y - x > -50 && y < aaa) {
        picture.attr("src", "http://bdill12.github.io/images/3.jpg");
        social.addClass('hidden');
    } else if (y > aaa && y < web) {
        social.removeClass('hidden');
        picture.attr("src", "http://bdill12.github.io/images/4.jpg");
    } else if (y > web) {
        social.addClass('hidden');
        picture.attr('src', 'http://bdill12.github.io/images/1.jpg');
    } else {
        social.addClass('hidden');
        picture.attr('src', 'http://bdill12.github.io/images/1.jpg');
    }
});

