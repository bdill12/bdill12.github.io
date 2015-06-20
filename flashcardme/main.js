$(function() {
    var model = {
        myTerms: [{
            correct: 0,
            term: "production design",
            definition: "refers to a film's overall design, continuity, visual look and composition (colors, sets, costumes, scenery, props, locations, etc.) that are the responsibility of the production designer; the art department refers to the people in various roles (e.g., matte painters, set designers and decorators, illustrators, title designers, scenic artists, and storyboard artists) who work under the production designer's supervision; the art director is responsible for the film's physical settings (specifically refers to the interiors, landscapes, buildings, etc.)"
        }, {
            correct: 0,
            term: "second-unit photography",
            definition: "in larger film productions, this refers to the less important scenes (large crowd scenes, scenery, foreign location backgrounds, various inserts, etc.) that are filmed by a smaller, secondary or subordinate crew, usually headed by a second-unit director; contrast to principal photography"
        }, {
            correct: 0,
            term: "stand-in",
            definition: "a substitute person who is physically similar (in size and appearance) to an actor and who takes the actor's place during often lengthy preparation of a scene (the taking of light meter readings, camera setup, light adjustment, etc.) but not during filming. Not to be confused with a stunt double or a body double."
        }, {
            correct: 0,
            term: "walk-through",
            definition: "the first rehearsal on the set, to figure out lighting, sound, camera positioning, etc."
        }, {
            correct: 0,
            term: "walla walla",
            definition: "refers to the atmospheric, background sound effect for the indistinct murmurings and buzz of voices in a crowd; extras in crowd scenes, in older films (or in radio), would be asked to murmur a phrase ('walla walla,' 'rhubarb,' 'peas and carrots,' or 'watermelon,' etc.) to create the sound of the crowd and to pretend that they were talking; see also foley artist, dubbing, and non-synchronized sound"
        }, {
            correct: 0,
            term: "whoop-whoops",
            definition: "in sound effects, this refers to the extra noises added to a sound, e.g., bells, horns, or whistles to an explosion, to make it more interesting or exciting"
        }, {
            correct: 0,
            term: "cinematographer",
            definition: "refers to the art and technique of film photography, the capture of images, and lighting effects, or to the person expert in and responsible for capturing or recording-photographing images for a film, through the selection of visual recording devices, camera angles, film stock, lenses, framing, and arrangement of lighting; the chief cinematographer responsible for a movie is called the director of photography (or D.P.), or first cameraman; one of the earliest movie-picture machines, patented by the Lumiere brothers in 1895, was termed a Cinematographe."
        }, {
            correct: 0,
            term: "clapboard",
            definition: "the marker at the beginning of a take for audio/visual sync"
        }, {
            correct: 0,
            term: "contract player",
            definition: "an actor with a contractual obligation to a studio"
        }, {
            correct: 0,
            term: "coverage",
            definition: "all the shots that a director takes in addition to the master shot, to make up the final product;"
        }, {
            correct: 0,
            term: "cyclorama",
            definition: "curved backdrop used for the sky when outdoor scenes are shot in the studio"
        }, {
            correct: 0,
            term: "direct sound",
            definition: "technique of recording video and audio at the same time"
        }, {
            correct: 0,
            term: "establishing shot",
            definition: "usually a long shot at the beginning of a scene to show an overview to orient the location or time for the scene and action that follows"
        }, {
            correct: 0,
            term: "foley artist",
            definition: "in the post-production and editing stage of a film's production, the foley artist (named after pioneer Jack Foley) creates or adds sound effects/noises (e.g., footsteps, gunshots, kisses, punches, storm noises, slamming doors, explosions, etc.) to the film as it is projected, often with props that mimic the action"
        }, {
            correct: 0,
            term: "fourth wall",
            definition: "invisible plane through which the film viewer or audience sees"
        }, {
            correct: 0,
            term: "gel",
            definition: "colored sheet of plastic used as a filter"
        }, {
            correct: 0,
            term: "Hays Code",
            definition: "named after Will Hays, a series of rigid censorship restrictions imposed on films by the Motion Picture Production Code (MPPC) beginning in mid-1934, and enforced/administered by Joseph Breen (in the Breen Office); the code had existed since the late 1920s but wasn't vigorously enforced, and it basically lasted until the late 1960s; the Code explicitly prescribed what couldn't be shown in films"
        }, {
            correct: 0,
            term: "insert shot",
            definition: "a shot that occurs in the middle of a larger scene or shot, usually a close-up of some detail or object"
        }, {
            correct: 0,
            term: "key light",
            definition: "he main or primary light on a subject, often angled and off-center (or from above) "
        }, {
            correct: 0,
            term: "master shot",
            definition: "a continuous shot or long take that shows the main action or setting of an entire scene (most scenes are shot with one or two master angles and then broken up into a series of smaller or tighter angles during editing (such as one-shots, two-shots, close-ups, and reaction shots)); a master refers to a positive print made especially for duplication purposes"
        }, {
            correct: 0,
            term: "motivated lighting",
            definition: "lighting that appears to come from a physical source within the reality of the film"
        }, {
            correct: 0,
            term: "principal photography",
            definition: "refers to the filming of major and significant portions of a film production that involves the main/lead actors/actresses; contrast to second-unit photography"
        }, {
            correct: 0,
            term: "cheater cut",
            definition: "the footage put into the beginning of a serial episode to show what happened at the end of the previous episode"
        }, {
            correct: 0,
            term: "camera operator",
            definition: "reports to director and director of photography"
        }, {
            correct: 0,
            term: "call sheet",
            definition: "type of schedule given out periodically during a film's production to let every department know when they are supposed to arrive and where they are to report"
        }, {
            correct: 0,
            term: "buzz track",
            definition: "added to an actor's adr looped dialogue"
        }, {
            correct: 0,
            term: "bumper",
            definition: "pre-film portion with studio logo or title"
        }, {
            correct: 0,
            term: "boom",
            definition: "portable counter-balanced pole with a microphone, light or camera held by the boom operator to capture sound, provide light, ect"
        }, {
            correct: 0,
            term: "best boy",
            definition: "any technical assistant, apprentice, or aide (regardless of sex) for the gaffer or the key grip. responsible for the routing and coiling of power cables, term came from whaling"
        }, {
            correct: 0,
            term: "back projection",
            definition: "photographic technique whereby live action is filmed in front of a transparent screen onto which background action is projected"
        }, {
            correct: 0,
            term: "art department",
            definition: "set construction, interior design, prop placement"
        }, {
            correct: 0,
            definition: "responsible for design, look, and feel of the set. includes the props, furntiure, windows, floors, ceilings, and all other set materials",
            term: "art director"
        }, {
            correct: 0,
            term: "duvetyne",
            definition: "A light-blocking fabric. Used for lighting flags, AKA commando cloth, star trek put glitter on it and used that as 'space' exterior"
        }, {
            correct: 0,
            term: "Insul-quilt",
            definition: "blanket of fiberglass, faced with fiberglass cloth and backed with a flame-proof foil"
        }, {
            correct: 0,
            term: "grip",
            definition: "lighting and rigging technicians, answer to key grip, provide camera support and lighting setups OR the crew member responsible for setting up dolly tracks and camera cranes, erecting scaffolding, moving props or scenery, or the adjustment or maintenance of any other production equipment on the set - a physically demanding job; the key grip is the head grip who coordinates all of the other grips in the crew, and receives direction from the gaffer or head lighting technician; the key grip's right-hand assistant is known as the best boy grip"
        }, {
            correct: 0,
            term: "gaff",
            definition: "a tool with a metal hook or device to grip on the end of a pole"
        }, {
            correct: 0,
            term: "gaffer",
            definition: "Head electrician, responsible for the execution of the lighting plan"
        }, {
            correct: 0,
            term: "bumblebee",
            definition: "A covering to protect wires from wheels"
        }, {
            correct: 0,
            term: "wigwag",
            definition: "a red light that indicates sound is rolling"
        }, {
            correct: 0,
            term: "Long Shot",
            definition: "a shot taken from a distance shows surrounding scene"
        }, {
            correct: 0,
            term: "Establishing Shot",
            definition: "sets the scene or shows the space of a scene"
        }, {
            correct: 0,
            term: "Close up",
            definition: "the image being shot takes up at least 80 percent of the frame"
        }, {
            correct: 0,
            term: "Extreme Close",
            definition: "up a shot that shows only one part or portion of an object"
        }, {
            correct: 0,
            term: "Medium shot",
            definition: "inbetween long shot and close shot people seen from waist up"
        }, {
            correct: 0,
            term: "Soft Focus",
            definition: "putting an object out of focus to make it look softer"
        }, {
            correct: 0,
            term: "Rack Focus",
            definition: "when focus changes from one object to another"
        }, {
            correct: 0,
            term: "Deep Focus",
            definition: "when the foreground and background are equally in focus"
        }, {
            correct: 0,
            term: "Low Angle",
            definition: "Shot angle shot from below the object in focus to make it look stronger"
        }, {
            correct: 0,
            term: "High Angle",
            definition: "camera is shot from above the object in focus to make it look weak and small"
        }, {
            correct: 0,
            term: "Eye Level",
            definition: "camera is even with the eyes"
        }, {
            correct: 0,
            term: "Dutch Angle",
            definition: "shot that is tilted sideways used to add tension"
        }, {
            correct: 0,
            term: "Diegetic Sound",
            definition: "sound that can be heard by the people in the film"
        }, {
            correct: 0,
            term: "NonDiegetic sound",
            definition: "special effect sound and soundtrack sound"
        }, {
            correct: 0,
            term: "Low Key Lighting",
            definition: "Scene is flooded with shadows and darkness"
        }, {
            correct: 0,
            term: "High-Key Lighting",
            definition: "scene is flooded with light"
        }, {
            correct: 0,
            term: "Neutral lighting",
            definition: "neither bright nor dark"
        }, {
            correct: 0,
            term: "Bottom/side Lighting",
            definition: "direct lighting from below or from one side"
        }, {
            correct: 0,
            term: "Front /Rear Lighting",
            definition: "soft direct lighting on face or back of subject"
        }, {
            correct: 0,
            term: "Pan Movement",
            definition: "Stationary camera moves left or right"
        }, {
            correct: 0,
            term: "Tilt",
            definition: "stationary camera moves up and down"
        }, {
            correct: 0,
            term: "Zoom",
            definition: "Stationary camera but image becomes closer"
        }, {
            correct: 0,
            term: "Dolly Shot",
            definition: "camera is on a track and moves from side to side"
        }, {
            correct: 0,
            term: "Cut",
            definition: "most common way to transfer from scene to scene"
        }, {
            correct: 0,
            term: "Fade",
            definition: "scene fades to black or white to show that time has passed"
        }, {
            correct: 0,
            term: "Dissolve",
            definition: "image fades into another, creates connection between images"
        }, {
            correct: 0,
            term: "Crosscutting",
            definition: "when 2 things are happening simultaineously and shows 2 scenes at once"
        }, {
            correct: 0,
            term: "Eye Line",
            definition: "a shot of a person who looks around and then to the object who he is looking at, then back to him for a reaction"
        }, {
            correct: 0,
            term: "Mise-en-scene",
            definition: "this term refers to what appears within the frame of the shot"
        }],
        myCards: []
    };
    console.log(model.myTerms.length);
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
            var cards = model.myCards;

            if (cards.length === undefined || cards.length === 0) {
                for (var i = 0; i < model.myTerms.length; i++) {
                    var first = model.myTerms[i];
                    var card = new self.Card(first.term, first.definition, first.correct);
                    model.myCards.push(card);
                }
            }
            self.drawCard();
        };

        self.drawCard = function() {
            var max = model.myTerms.length;
            var theCard = Math.floor(Math.random() * max);
            console.log(theCard);
            self.activeCard(model.myCards[theCard]);
            self.activeTerm(self.activeCard().term);
            self.activeDef(self.activeCard().def);
            self.activeScore(self.activeCard().correct);
        };

        self.prepDeck();



        self.correct = function() {
            self.activeCard().correct = self.activeCard().correct + 1;
            if (self.displayDef()) {
                self.displayDef(!self.displayDef());
                self.displayTerm(!self.displayTerm());
            }
            self.drawCard();


        };

        self.incorrect = function() {
            self.activeCard().correct = self.activeCard().correct - 1;
            self.drawCard();
            if (self.displayDef()) {
                self.displayDef(!self.displayDef());
                self.displayTerm(!self.displayTerm());
            }
        };
        self.purge = function() {
            for (var i = 0; i < model.myCards.length; i++) {
                if (model.myCards[i].correct >= 5) {
                    model.myCards.pop(model.myCards[i]);

                }
            }
        };
    };

    ko.applyBindings(new ViewModel());
});
