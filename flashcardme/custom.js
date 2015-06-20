var model, viewModel;
$(function() {
	        model = {
            cards: [{
                score: 0,
                term: "production design",
                definition: "refers to a film's overall design, continuity, visual look and composition (colors, sets, costumes, scenery, props, locations, etc.) that are the responsibility of the production designer; the art department refers to the people in various roles (e.g., matte painters, set designers and decorators, illustrators, title designers, scenic artists, and storyboard artists) who work under the production designer's supervision; the art director is responsible for the film's physical settings (specifically refers to the interiors, landscapes, buildings, etc.)"
            }, {
                score: 0,
                term: "second-unit photography",
                definition: "in larger film productions, this refers to the less important scenes (large crowd scenes, scenery, foreign location backgrounds, various inserts, etc.) that are filmed by a smaller, secondary or subordinate crew, usually headed by a second-unit director; contrast to principal photography"
            }, {
                score: 0,
                term: "stand-in",
                definition: "a substitute person who is physically similar (in size and appearance) to an actor and who takes the actor's place during often lengthy preparation of a scene (the taking of light meter readings, camera setup, light adjustment, etc.) but not during filming. Not to be confused with a stunt double or a body double."
            }, {
                score: 0,
                term: "walk-through",
                definition: "the first rehearsal on the set, to figure out lighting, sound, camera positioning, etc."
            }, {
                score: 0,
                term: "walla walla",
                definition: "refers to the atmospheric, background sound effect for the indistinct murmurings and buzz of voices in a crowd; extras in crowd scenes, in older films (or in radio), would be asked to murmur a phrase ('walla walla,' 'rhubarb,' 'peas and carrots,' or 'watermelon,' etc.) to create the sound of the crowd and to pretend that they were talking; see also foley artist, dubbing, and non-synchronized sound"
            }, {
                score: 0,
                term: "whoop-whoops",
                definition: "in sound effects, this refers to the extra noises added to a sound, e.g., bells, horns, or whistles to an explosion, to make it more interesting or exciting"
            }, {
                score: 0,
                term: "cinematographer",
                definition: "refers to the art and technique of film photography, the capture of images, and lighting effects, or to the person expert in and responsible for capturing or recording-photographing images for a film, through the selection of visual recording devices, camera angles, film stock, lenses, framing, and arrangement of lighting; the chief cinematographer responsible for a movie is called the director of photography (or D.P.), or first cameraman; one of the earliest movie-picture machines, patented by the Lumiere brothers in 1895, was termed a Cinematographe."
            }, {
                score: 0,
                term: "clapboard",
                definition: "the marker at the beginning of a take for audio/visual sync"
            }, {
                score: 0,
                term: "contract player",
                definition: "an actor with a contractual obligation to a studio"
            }, {
                score: 0,
                term: "coverage",
                definition: "all the shots that a director takes in addition to the master shot, to make up the final product;"
            }, {
                score: 0,
                term: "cyclorama",
                definition: "curved backdrop used for the sky when outdoor scenes are shot in the studio"
            }, {
                score: 0,
                term: "direct sound",
                definition: "technique of recording video and audio at the same time"
            }, {
                score: 0,
                term: "establishing shot",
                definition: "usually a long shot at the beginning of a scene to show an overview to orient the location or time for the scene and action that follows"
            }, {
                score: 0,
                term: "foley artist",
                definition: "in the post-production and editing stage of a film's production, the foley artist (named after pioneer Jack Foley) creates or adds sound effects/noises (e.g., footsteps, gunshots, kisses, punches, storm noises, slamming doors, explosions, etc.) to the film as it is projected, often with props that mimic the action"
            }, {
                score: 0,
                term: "fourth wall",
                definition: "invisible plane through which the film viewer or audience sees"
            }, {
                score: 0,
                term: "gel",
                definition: "colored sheet of plastic used as a filter"
            }, {
                score: 0,
                term: "Hays Code",
                definition: "named after Will Hays, a series of rigid censorship restrictions imposed on films by the Motion Picture Production Code (MPPC) beginning in mid-1934, and enforced/administered by Joseph Breen (in the Breen Office); the code had existed since the late 1920s but wasn't vigorously enforced, and it basically lasted until the late 1960s; the Code explicitly prescribed what couldn't be shown in films"
            }, {
                score: 0,
                term: "insert shot",
                definition: "a shot that occurs in the middle of a larger scene or shot, usually a close-up of some detail or object"
            }, {
                score: 0,
                term: "key light",
                definition: "he main or primary light on a subject, often angled and off-center (or from above) "
            }, {
                score: 0,
                term: "master shot",
                definition: "a continuous shot or long take that shows the main action or setting of an entire scene (most scenes are shot with one or two master angles and then broken up into a series of smaller or tighter angles during editing (such as one-shots, two-shots, close-ups, and reaction shots)); a master refers to a positive print made especially for duplication purposes"
            }, {
                score: 0,
                term: "motivated lighting",
                definition: "lighting that appears to come from a physical source within the reality of the film"
            }, {
                score: 0,
                term: "principal photography",
                definition: "refers to the filming of major and significant portions of a film production that involves the main/lead actors/actresses; contrast to second-unit photography"
            }, {
                score: 0,
                term: "cheater cut",
                definition: "the footage put into the beginning of a serial episode to show what happened at the end of the previous episode"
            }, {
                score: 0,
                term: "camera operator",
                definition: "reports to director and director of photography"
            }, {
                score: 0,
                term: "call sheet",
                definition: "type of schedule given out periodically during a film's production to let every department know when they are supposed to arrive and where they are to report"
            }, {
                score: 0,
                term: "buzz track",
                definition: "added to an actor's adr looped dialogue"
            }, {
                score: 0,
                term: "bumper",
                definition: "pre-film portion with studio logo or title"
            }, {
                score: 0,
                term: "boom",
                definition: "portable counter-balanced pole with a microphone, light or camera held by the boom operator to capture sound, provide light, ect"
            }, {
                score: 0,
                term: "best boy",
                definition: "any technical assistant, apprentice, or aide (regardless of sex) for the gaffer or the key grip. responsible for the routing and coiling of power cables, term came from whaling"
            }, {
                score: 0,
                term: "back projection",
                definition: "photographic technique whereby live action is filmed in front of a transparent screen onto which background action is projected"
            }, {
                score: 0,
                term: "art department",
                definition: "set construction, interior design, prop placement"
            }, {
                score: 0,
                definition: "responsible for design, look, and feel of the set. includes the props, furntiure, windows, floors, ceilings, and all other set materials",
                term: "art director"
            }, {
                score: 0,
                term: "duvetyne",
                definition: "A light-blocking fabric. Used for lighting flags, AKA commando cloth, star trek put glitter on it and used that as 'space' exterior"
            }, {
                score: 0,
                term: "Insul-quilt",
                definition: "blanket of fiberglass, faced with fiberglass cloth and backed with a flame-proof foil"
            }, {
                score: 0,
                term: "grip",
                definition: "lighting and rigging technicians, answer to key grip, provide camera support and lighting setups OR the crew member responsible for setting up dolly tracks and camera cranes, erecting scaffolding, moving props or scenery, or the adjustment or maintenance of any other production equipment on the set - a physically demanding job; the key grip is the head grip who coordinates all of the other grips in the crew, and receives direction from the gaffer or head lighting technician; the key grip's right-hand assistant is known as the best boy grip"
            }, {
                score: 0,
                term: "gaff",
                definition: "a tool with a metal hook or device to grip on the end of a pole"
            }, {
                score: 0,
                term: "gaffer",
                definition: "Head electrician, responsible for the execution of the lighting plan"
            }, {
                score: 0,
                term: "bumblebee",
                definition: "A covering to protect wires from wheels"
            }, {
                score: 0,
                term: "wigwag",
                definition: "a red light that indicates sound is rolling"
            }, {
                score: 0,
                term: "Long Shot",
                definition: "a shot taken from a distance shows surrounding scene"
            }, {
                score: 0,
                term: "Establishing Shot",
                definition: "sets the scene or shows the space of a scene"
            }, {
                score: 0,
                term: "Close up",
                definition: "the image being shot takes up at least 80 percent of the frame"
            }, {
                score: 0,
                term: "Extreme Close",
                definition: "up a shot that shows only one part or portion of an object"
            }, {
                score: 0,
                term: "Medium shot",
                definition: "inbetween long shot and close shot people seen from waist up"
            }, {
                score: 0,
                term: "Soft Focus",
                definition: "putting an object out of focus to make it look softer"
            }, {
                score: 0,
                term: "Rack Focus",
                definition: "when focus changes from one object to another"
            }, {
                score: 0,
                term: "Deep Focus",
                definition: "when the foreground and background are equally in focus"
            }, {
                score: 0,
                term: "Low Angle",
                definition: "Shot angle shot from below the object in focus to make it look stronger"
            }, {
                score: 0,
                term: "High Angle",
                definition: "camera is shot from above the object in focus to make it look weak and small"
            }, {
                score: 0,
                term: "Eye Level",
                definition: "camera is even with the eyes"
            }, {
                score: 0,
                term: "Dutch Angle",
                definition: "shot that is tilted sideways used to add tension"
            }, {
                score: 0,
                term: "Diegetic Sound",
                definition: "sound that can be heard by the people in the film"
            }, {
                score: 0,
                term: "NonDiegetic sound",
                definition: "special effect sound and soundtrack sound"
            }, {
                score: 0,
                term: "Low Key Lighting",
                definition: "Scene is flooded with shadows and darkness"
            }, {
                score: 0,
                term: "High-Key Lighting",
                definition: "scene is flooded with light"
            }, {
                score: 0,
                term: "Neutral lighting",
                definition: "neither bright nor dark"
            }, {
                score: 0,
                term: "Bottom/side Lighting",
                definition: "direct lighting from below or from one side"
            }, {
                score: 0,
                term: "Front /Rear Lighting",
                definition: "soft direct lighting on face or back of subject"
            }, {
                score: 0,
                term: "Pan Movement",
                definition: "Stationary camera moves left or right"
            }, {
                score: 0,
                term: "Tilt",
                definition: "stationary camera moves up and down"
            }, {
                score: 0,
                term: "Zoom",
                definition: "Stationary camera but image becomes closer"
            }, {
                score: 0,
                term: "Dolly Shot",
                definition: "camera is on a track and moves from side to side"
            }, {
                score: 0,
                term: "Cut",
                definition: "most common way to transfer from scene to scene"
            }, {
                score: 0,
                term: "Fade",
                definition: "scene fades to black or white to show that time has passed"
            }, {
                score: 0,
                term: "Dissolve",
                definition: "image fades into another, creates connection between images"
            }, {
                score: 0,
                term: "Crosscutting",
                definition: "when 2 things are happening simultaineously and shows 2 scenes at once"
            }, {
                score: 0,
                term: "Eye Line",
                definition: "a shot of a person who looks around and then to the object who he is looking at, then back to him for a reaction"
            }, {
                score: 0,
                term: "Mise-en-scene",
                definition: "this term refers to what appears within the frame of the shot"
            }]
        };
    if (localStorage.length === 0) {
        for (var i = 0; i < model.cards.length; i++) {
        	localStorage.setItem(model.cards[i].term, model.cards[i].score);        }
    } else {
    	for (var n = 0; n < model.cards.length; n++) {
    		model.cards[n].score = localStorage.getItem(model.cards[n].term);
    	}
    }


    viewModel = function() {
        var self = this;

        self.displayTerm = ko.observable(true);
        self.displayDef = ko.observable(false);
        self.term = ko.observable();
        self.definition = ko.observable();
        self.score = ko.observable();
        self.card = ko.observable();
        self.cards = ko.observableArray();

        self.flip = function() {
            self.displayTerm(!self.displayTerm());
            self.displayDef(!self.displayDef());
        };



        self.drawCard = function() {
            if (self.displayTerm() === false) {
                self.displayTerm(!self.displayTerm());
                self.displayDef(!self.displayDef());
            }

            var max = model.cards.length;
            var cn = Math.floor(Math.random() * max);
            var currentCard = model.cards[cn];

            self.card(currentCard);
            self.term(currentCard.term);
            self.score(currentCard.score);
            self.definition(currentCard.definition);
        };

       	self.skip = function() {
        	self.drawCard();
        };

        self.retireCard = function() {
            if (self.score() > 10) {
                var locate = model.cards.indexOf(self.card());
                model.cards.splice(locate, 1);
                drawCard();
            } else {
                console.log('Still learning this one.');
            }
        };

        self.correct = function() {
            if (self.displayTerm() === false) {
                self.displayTerm(!self.displayTerm());
                self.displayDef(!self.displayDef());
            }
            var locate = model.cards.indexOf(self.card());
            model.cards[locate].score = model.cards[locate].score + 1;

            localStorage.setItem(self.term(), model.cards[locate].score);

            self.score(model.cards[locate].score);

            self.retireCard();

            self.drawCard();
        };

        self.incorrect = function() {
            if (self.displayTerm() === false) {
                self.displayTerm(!self.displayTerm());
                self.displayDef(!self.displayDef());
            }

            var locate = model.cards.indexOf(self.card());
            model.cards[locate].score = model.cards[locate].score - 1;

            localStorage.setItem(self.term(), model.cards[locate].score);

            self.score(model.cards[locate].score);

            self.drawCard();
        };

        self.drawCard();
        self.retireCard();
    };

    ko.applyBindings(new viewModel());
});
