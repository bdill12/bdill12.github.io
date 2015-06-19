$(function() {
    var model = {
        myTerms: [{
            usable: true,
            correct: 0,
            term: "Long Shot",
            definition: "a shot taken from a distance shows surrounding scene"
        }, {
            usable: true,
            correct: 0,
            term: "Establishing Shot",
            definition: "sets the scene or shows the space of a scene"
        }, {
            usable: true,
            correct: 0,
            term: "Close up",
            definition: "the image being shot takes up at least 80 percent of the frame"
        }, {
            usable: true,
            correct: 0,
            term: "Extreme Close",
            definition: "up a shot that shows only one part or portion of an object"
        }, {
            usable: true,
            correct: 0,
            term: "Medium shot",
            definition: "inbetween long shot and close shot people seen from waist up"
        }, {
            usable: true,
            correct: 0,
            term: "Soft Focus",
            definition: "putting an object out of focus to make it look softer"
        }, {
            usable: true,
            correct: 0,
            term: "Rack Focus",
            definition: "when focus changes from one object to another"
        }, {
            usable: true,
            correct: 0,
            term: "Deep Focus",
            definition: "when the foreground and background are equally in focus"
        }, {
            usable: true,
            correct: 0,
            term: "Low Angle",
            definition: "Shot angle shot from below the object in focus to make it look stronger"
        }, {
            usable: true,
            correct: 0,
            term: "High Angle",
            definition: "camera is shot from above the object in focus to make it look weak and small"
        }, {
            usable: true,
            correct: 0,
            term: "Eye Level",
            definition: "camera is even with the eyes"
        }, {
            usable: true,
            correct: 0,
            term: "Dutch Angle",
            definition: "shot that is tilted sideways used to add tension"
        }, {
            usable: true,
            correct: 0,
            term: "Diegetic Sound",
            definition: "sound that can be heard by the people in the film"
        }, {
            usable: true,
            correct: 0,
            term: "NonDiegetic sound",
            definition: "special effect sound and soundtrack sound"
        }, {
            usable: true,
            correct: 0,
            term: "Low Key Lighting",
            definition: "Scene is flooded with shadows and darkness"
        }, {
            usable: true,
            correct: 0,
            term: "High-Key Lighting",
            definition: "scene is flooded with light"
        }, {
            usable: true,
            correct: 0,
            term: "Neutral lighting",
            definition: "neither bright nor dark"
        }, {
            usable: true,
            correct: 0,
            term: "Bottom/side Lighting",
            definition: "direct lighting from below or from one side"
        }, {
            usable: true,
            correct: 0,
            term: "Front /Rear Lighting",
            definition: "soft direct lighting on face or back of subject"
        }, {
            usable: true,
            correct: 0,
            term: "Pan Movement",
            definition: "Stationary camera moves left or right"
        }, {
            usable: true,
            correct: 0,
            term: "Tilt",
            definition: "stationary camera moves up and down"
        }, {
            usable: true,
            correct: 0,
            term: "Zoom",
            definition: "Stationary camera but image becomes closer"
        }, {
            usable: true,
            correct: 0,
            term: "Dolly Shot",
            definition: "camera is on a track and moves from side to side"
        }, {
            usable: true,
            correct: 0,
            term: "Cut",
            definition: "most common way to transfer from scene to scene"
        }, {
            usable: true,
            correct: 0,
            term: "Fade",
            definition: "scene fades to black or white to show that time has passed"
        }, {
            usable: true,
            correct: 0,
            term: "Dissolve",
            definition: "image fades into another, creates connection between images"
        }, {
            usable: true,
            correct: 0,
            term: "Crosscutting",
            definition: "when 2 things are happening simultaineously and shows 2 scenes at once"
        }, {
            usable: true,
            correct: 0,
            term: "Eye Line",
            definition: "a shot of a person who looks around and then to the object who he is looking at, then back to him for a reaction"
        }, {
            usable: true,
            correct: 0,
            term: "Mise-en-scene",
            definition: "this term refers to what appears within the frame of the shot"
        }],
        myCards: []
    };
    var ViewModel = function() {
        var self = this;
        self.displayTerm = ko.observable(true);
        self.displayDef = ko.observable(false);
        self.activeTerm = ko.observable();
        self.activeDef = ko.observable();
        self.activeCard = ko.observable();
        self.activeScore = ko.observable();

         self.Card = function(term, def, correct) {
        this.term = term;
        this.def = def;
        this.usable = true;
        this.correct = correct;
    };

        self.flipCard = function() {
            self.displayTerm(!self.displayTerm());
            self.displayDef(!self.displayDef());
        };

        self.prepDeck = function() {
            for (var i = 0; i < model.myTerms.length; i++) {
                    var first = model.myTerms[i];
                    var card = new self.Card(first.term, first.definition, first.correct);
                    model.myCards.push(card);
                }
            self.quizMe();
        };

        self.drawCard = function() {
            var max = model.myTerms.length + 1;
            var theCard = Math.floor(Math.random() * max);
            self.activeCard(model.myCards[theCard]);
            if (self.activeCard.usable) {
                self.activeTerm(self.activeCard().term);
                self.activeDef(self.activeCard().def);
                self.activeScore(self.activeCard().correct);
            }


        };

             self.drawCard();

        self.quizMe = function() {
            var cards = model.myCards;
            if (cards.length === undefined || cards.length === 0) {
                self.prepDeck();
            } else {
                self.drawCard();
            }
        };
        self.quizMe();


        self.correct = function() {
            self.activeCard().correct = self.activeCard().correct + 1;
            self.drawCard();

        };

        self.incorrect = function() {
            self.activeCard().correct = self.activeCard().correct - 1;
            self.drawCard();
        };

    };

    ko.applyBindings(new ViewModel());

});
