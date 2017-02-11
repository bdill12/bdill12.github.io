function AppViewModel() {
  var self = this;
  this.name = ko.observable();
  this.address1 = ko.observable();
  this.address2 = ko.observable();
  this.phone = ko.observable();
  this.email = ko.observable();
  this.employer1 = ko.observable();
  this.employer1City = ko.observable();
  this.employer1Position = ko.observable();
  this.employer1From = ko.observable();
  this.employer1To = ko.observable();
  this.employer1desc = ko.observable();

  function addEmployer(x) {
    $('.employer').addClass('hidden');
    var employer = self.employer + x;
    var city = employer + "City";
    var position = employer + "Position";
    var start = employer + "From";
    var end = employer + "To";
    var desc = employer + "desc";
    employer = ko.observable;
    city = ko.observable;
    position = ko.observable;
    start = ko.observable;
    end = ko.observable;
    desc = ko.observable;


    
  }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
