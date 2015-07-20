$(".loader").fadeOut(500);
$(function() {
    'use strict';
    var model = {
        backlots: ["Hennesy Street", "Tenement Alley", "Park Place", "New York Street", "Embassy Ct.", "French Street", "Midwest St.", "Kings Row", "The Jungle", "Warner Village", "Brownstone Street"],
        stages: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5", "Stage 6", "Stage 7", "Stage 8", "Stage 9", "Stage 10", "Stage 11", "Stage 12", "Stage 14", "Stage 15", "Stage 16", "Stage 17", "Stage 18", "Stage 19", "Stage 20", "Stage 21", "Stage 22", "Stage 23", "Stage 24", "Stage 25", "Stage 26", "Stage 27", "Stage 27a", "Stage 28", "Stage 28a", "Stage 29"],
        locations: ["Transportation", "Museum", "Prop House", "The Mill", "Stage 48", "Bridge Building"],
        times: ["8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15"],
        letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    };
    var ViewModel = function() {
        var self = this;
        self.today = new Date();

        var selected = ko.observable();

        self.times = ko.observableArray(model.times);
        self.letters = ko.observableArray(model.letters);
        self.backlots = ko.observableArray(model.backlots);
        self.stages = ko.observableArray(model.stages);
        self.locations = ko.observableArray(model.locations);

        //Visibility Variables
        self.stagesBacklots = ko.observable(false);
        self.mainMenu = ko.observable(true);
        self.myToursView = ko.observable(false);
        self.myToursMenu = ko.observable(false);
        self.editToursView = ko.observable(false);
        self.editToursMenu = ko.observable(false);
        self.tour1EditView = ko.observable(false);
        self.tour2EditView = ko.observable(false);
        self.tour3EditView = ko.observable(false);

        self.tour1 = ko.observable(false);
        self.tourTime1 = ko.observable();
        self.tourLetter1 = ko.observable();
        self.tourGuests1 = ko.observable();
        self.tourCart1 = ko.observable();
        self.visitedStages1 = ko.observableArray([]);
        self.visitedBacklots1 = ko.observableArray([]);
        self.visitedLocations1 = ko.observableArray([]);
        self.tourNotes1 = ko.observable();

        self.tour2 = ko.observable(false);
        self.tourTime2 = ko.observable();
        self.tourLetter2 = ko.observable();
        self.tourGuests2 = ko.observable();
        self.tourCart2 = ko.observable();
        self.visitedStages2 = ko.observableArray([]);
        self.visitedBacklots2 = ko.observableArray([]);
        self.visitedLocations2 = ko.observableArray([]);
        self.tourNotes2 = ko.observable();

        self.tour3 = ko.observable(false);
        self.tourTime3 = ko.observable();
        self.tourLetter3 = ko.observable();
        self.tourGuests3 = ko.observable();
        self.tourCart3 = ko.observable();
        self.visitedStages3 = ko.observableArray([]);
        self.visitedBacklots3 = ko.observableArray([]);
        self.visitedLocations3 = ko.observableArray([]);
        self.tourNotes3 = ko.observable();

        self.availableStages = ko.observableArray();
        self.availableStages.subscribe(function(newValue) {
       console.log(newValue);
    });
        self.availableBacklots = ko.observableArray();


        self.closeAll = function() {
            self.stagesBacklots(false);
            self.mainMenu(false);
            self.myToursView(false);
            self.myToursMenu(false);
            self.editToursView(false);
            self.editToursMenu(false);
            self.tour1EditView(false);
            self.tour2EditView(false);
            self.tour3EditView(false);
            self.tour1(false);
            self.tour2(false);
            self.tour3(false);
        };

        self.myTours = function() {
            self.closeAll();
            self.myToursView(true);
            self.myToursMenu(true);
        };

        self.editTours = function() {
            self.closeAll();
            self.editToursView(true);
            self.editToursMenu(true);
        };

        self.editStages = function() {
            self.closeAll();
            self.stagesBacklots(true);
        };

        self.reset = function() {
            self.closeAll();
            self.mainMenu(true);
            self.tourTime1();
            self.tourLetter1();
            self.tourCart1();
            self.tourGuests1();
            self.visitedStages1();
            self.visitedBacklots1();
            self.tourTime2();
            self.tourLetter2();
            self.tourCart2();
            self.tourGuests2();
            self.visitedStages2();
            self.visitedBacklots2();
            self.tourTime3();
            self.tourLetter3();
            self.tourCart3();
            self.tourGuests3();
            self.visitedStages3();
            self.visitedBacklots3();
            Lockr.flush();
        };

        self.tour1View = function() {
            self.closeAll();
            self.myToursView(true);
            self.tour1(true);
        };
        self.tour2View = function() {
            self.closeAll();
            self.myToursView(true);
            self.tour2(true);
        };
        self.tour3View = function() {
            self.closeAll();
            self.myToursView(true);
            self.tour3(true);
        };

        self.tour1Edit = function() {
            self.closeAll();
            self.tour1EditView(true);
            self.availableBacklots(Lockr.get('availableBacklots'));
            self.availableStages(Lockr.get('availableStages'));

        };
        self.tour2Edit = function() {
            self.closeAll();
            self.tour2EditView(true);
            self.availableBacklots(Lockr.get('availableBacklots'));
            self.availableStages(Lockr.get('availableStages'));

        };
        self.tour3Edit = function() {
            self.closeAll();
            self.tour3EditView(true);
            self.availableBacklots(Lockr.get('availableBacklots'));
            self.availableStages(Lockr.get('availableStages'));

        };
        self.backToMain = function() {
            self.closeAll();
            self.mainMenu(true);
        };

        self.backToEditToursView = function() {
            self.closeAll();
            self.editToursView(true);
            self.editToursMenu(true);
        };

        self.saveTour1 = function() {
            self.closeAll();
            self.tour1View();
            var firstTourTime = self.tourTime1().split(":");
            self.today.setHours(parseInt(firstTourTime[0])+2);
            self.today.setMinutes(parseInt(firstTourTime[1]));
            $('#clock').countdown(self.today, function(event) {
                var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                $(this).html(event.strftime(totalHours + ' hr %M min %S sec'));
            });
            Lockr.set('tourTime1', self.tourTime1());
            Lockr.set('tourLetter1', self.tourLetter1());
            Lockr.set('tourCart1', self.tourCart1());
            Lockr.set('tourGuests1', self.tourGuests1());
            Lockr.set('tourStages1', self.visitedStages1());
            Lockr.set('tourBacklots1', self.visitedBacklots1());

        };
        self.saveTour2 = function() {
            self.closeAll();
            self.tour2View();
            var secondTourTime = self.tourTime2().split(":");
            self.today.setHours(parseInt(secondTourTime[0]) + 2);
            self.today.setMinutes(parseInt(secondTourTime[1]));
            $('#clock2').countdown(self.today, function(event) {
                var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                $(this).html(event.strftime(totalHours + ' hr %M min %S sec'));
            });
            Lockr.set('tourTime2', self.tourTime2());
            Lockr.set('tourLetter2', self.tourLetter2());
            Lockr.set('tourCart2', self.tourCart2());
            Lockr.set('tourGuests2', self.tourGuests2());
            Lockr.set('tourStages2', self.visitedStages2());
            Lockr.set('tourBacklots2', self.visitedBacklots2());


        };
        self.saveTour3 = function() {
            self.closeAll();
            self.tour3View();
            var thirdTourTime = self.tourTime3().split(":");
            self.today.setHours(parseInt(thirdTourTime[0]) + 2);
            self.today.setMinutes(parseInt(thirdTourTime[1]));
             $('#clock3').countdown(self.today, function(event) {
                var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                $(this).html(event.strftime(totalHours + ' hr %M min %S sec'));
            });
            Lockr.set('tourTime3', self.tourTime3());
            Lockr.set('tourLetter3', self.tourLetter3());
            Lockr.set('tourCart3', self.tourCart3());
            Lockr.set('tourGuests3', self.tourGuests3());
            Lockr.set('tourStages3', self.visitedStages3());
            Lockr.set('tourBacklots3', self.visitedBacklots3());

        };

        self.saveStagesBacklots = function() {
            self.closeAll();
            self.backToMain();
            Lockr.set("availableStages", self.availableStages());
            Lockr.set("availableBacklots", self.availableBacklots());
        };


    };

    ko.applyBindings(new ViewModel());
});

