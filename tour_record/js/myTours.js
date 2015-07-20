myTours = function() {
      myToursView = ko.observable(false);
      myToursMenu = ko.observable(false);
      clock = ko.observable(true);
      tour = ko.observable(false);

    };

    countdown = function (number) {
      if (tourTime()) {
        var today = new Date();
        var tourTime = tourTime().split(":");
        today.setHours(parseInt(tourTime[0]) + 2);
        today.setMinutes(parseInt(tourTime[1]));
        $('#clock')
          .countdown(today, function (event) {
            var totalHours = event.offset.totalDays * 24 + event.offset.hours;
            $(this)
              .html(event.strftime(totalHours + ' hr %M min %S sec'));
          });
        clock(true);
      } else {
        clock(false);
      }
    };

storeTour = function () {
	var aTour = {
        'time': self.tourTime1(),
        'letter': self.tourLetter1(),
        'cart': self.tourCart1(),
        'guests': self.tourGuests1(),
        'stages': self.visitedStages1().sort(function (a, b) {
          return a - b;
        }),
        'backlots': self.visitedBacklots1().sort()
      };
      localStorage.setItem('tour1', JSON.stringify(firstTour));
    };
