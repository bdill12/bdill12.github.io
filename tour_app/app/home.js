define(function (require) {
  var app = require('durandal/app'),
  	cal = require('calendar'),
      ko = require('knockout');

  return {
     name: ko.observable(),
     sayHello: function() {
       app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
     }
   };
});