$(function() {
    var viewModel = function() {
        var self = this;
        var noSpace;
        self.mapView = ko.observable(true);
        self.factSheetView = ko.observable(false);
        self.buttonArea = ko.observable(true);
        self.infoWindow = ko.observable(false);
        self.displayTerm = ko.observable(true);
        self.displayDef = ko.observable(false);
        self.flashCardView = ko.observable(false);
        self.areaName = ko.observable();
        self.areaBuilt = ko.observable();
        self.areaCommon = ko.observable();
        self.areaTech = ko.observable();
        self.term = ko.observable();
        self.definition = ko.observable();
        self.score = ko.observable();
        self.card = ko.observable();
        self.dodgeballView = ko.observable(false);
        self.model = {
            cards: [{
                score: 0,
                term: "Batman\'s first appearance",
                definition: "Detective Comics #27 in 1939",
            }, {
                score: 0,
                term: "Oscar statue trivia",
                definition: "Almost 600 Oscar statues were made as set dressing for the Oscar ceremonies in 2014 hosted by Ellen Degeneres",
            }, {
                score: 0,
                term: "styrene",
                definition: "Plastic thermoform sheets. High impact grey material frequently made from recycled plastic bottles. Used inside sound stages.",
            }, {
                score: 0,
                term: "vacuform press",
                definition: "a machine that heats a sheet of styrene or plastic for molding.",
            }, {
                score: 0,
                term: "staff",
                definition: "made of gypsum or plaster of paris, reinforced by hemp fibers and fiberglass. can be molded into any shape",
            }, {
                score: 0,
                term: "synthetic cotton batting (snow)",
                definition: "comesin large bales. add to ledges, buildings. can be placed on chicken wire to create snow banks",
            }, {
                score: 0,
                term: "flocking spray (snow)",
                definition: "the same as commercial spray used on Christmas trees",
            }, {
                score: 0,
                term: "snow foam",
                definition: "used to coat greens, hosed off afterwards",
            }, {
                score: 0,
                term: "whipped plastic",
                definition: "resembles torn plastic bags, used to fill in cracks. good for blowing effects, onstage snow",
            }, {
                score: 0,
                term: "Ice crystal spray, old method",
                definition: "spray can, but the old school method for frost on glass or mirrors was to brush a coat of stale beer and Epsom salt on the surface (ER)",
            }, {
                score: 0,
                term: "starch snow",
                definition: "edible material that is biodegradable",
            }, {
                score: 0,
                term: "blanket sheets (terram or decron)",
                definition: "large blankets used to cover a large area such as a lawn. Terram has a loose weave and lets air and light through",
            }, {
                score: 0,
                term: "crushed ice",
                definition: "foreground effects",
            }, {
                score: 0,
                term: "paper (snow)",
                definition: "Cellulose, Snowcel. Biodegraable. effective for snow left over time",
            }, {
                score: 0,
                term: "snow rollers",
                definition: "typically 8ft. long cylindrical cages that disperses snow in natural patterns as it is rotated",
            }, {
                score: 0,
                term: "9 types of snow",
                definition: "synthetic cotton batting, flocking spray, snow foam, whipped plastic, ice crystal spray, starch snow, blanket sheets (terram or dacron), crushed ice, paper",
            }, {
                score: 0,
                term: "unit production manager",
                definition: "coordinates shooting schedules and locations",
            }, {
                score: 0,
                term: "Squibs",
                definition: "Electrical firing device with small amounts of powder/blood for creating bullet hits",
            }, {
                score: 0,
                term: "composite matte or split screen",
                definition: "Special effect makes it possible for actor to act opposite his or herself",
            }, {
                score: 0,
                term: "Camera 2nd Assistant",
                definition: "Assist the Camera Assistant, maintains camera reports, keeps the slate ready to be photographed and claps the slate at the beginning of each shot. Sometimes Slate boy",
            }, {
                score: 0,
                term: "Camera Assistant",
                definition: "member of camera crew who maintains correct focus, changes magazines, maintains lenses, camera mechanisms, and reports",
            }, {
                score: 0,
                term: "breakdown",
                definition: "schedule detailing what props, actors, sets, etc will be needed for each scene of a film. AD preps.",
            }, {
                score: 0,
                term: "breakaway",
                definition: "a prop or set designed to fall apart or fracture easily at a specified time",
            }, {
                score: 0,
                term: "backing",
                definition: "large backdrop painted with a scene that is seen through a window or door of an interior set or background of exterior set",
            }, {
                score: 0,
                term: "Associate Producer",
                definition: "Oversees all aspects and elements of post-production",
            }, {
                score: 0,
                term: "Assistant Producer",
                definition: "Assists the producer, producer\'s voice on set if he/she is absent",
            }, {
                score: 0,
                term: "assistant director (A.D.)",
                definition: "second in command, foreman of the set. gives the call, organizes crowd scenes, arranges logistics, maintains order, helps with task as requested by director",
            }, {
                score: 0,
                term: "production design",
                definition: "refers to a film\'s overall design, continuity, visual look and composition (colors, sets, costumes, scenery, props, locations, etc.) that are the responsibility of the production designer; the art department refers to the people in various roles (e.g., matte painters, set designers and decorators, illustrators, title designers, scenic artists, and storyboard artists) who work under the production designer\'s supervision; the art director is responsible for the film\'s physical settings (specifically refers to the interiors, landscapes, buildings, etc.)"
            }, {
                score: 0,
                term: "second-unit photography",
                definition: "in larger film productions, this refers to the less important scenes (large crowd scenes, scenery, foreign location backgrounds, various inserts, etc.) that are filmed by a smaller, secondary or subordinate crew, usually headed by a second-unit director; contrast to principal photography"
            }, {
                score: 0,
                term: "stand-in",
                definition: "a substitute person who is physically similar (in size and appearance) to an actor and who takes the actor\'s place during often lengthy preparation of a scene (the taking of light meter readings, camera setup, light adjustment, etc.) but not during filming. Not to be confused with a stunt double or a body double."
            }, {
                score: 0,
                term: "walk-through",
                definition: "the first rehearsal on the set, to figure out lighting, sound, camera positioning, etc."
            }, {
                score: 0,
                term: "walla walla",
                definition: "refers to the atmospheric, background sound effect for the indistinct murmurings and buzz of voices in a crowd; extras in crowd scenes, in older films (or in radio), would be asked to murmur a phrase (\'walla walla,\' \'rhubarb,\' \'peas and carrots,\' or \'watermelon,\' etc.) to create the sound of the crowd and to pretend that they were talking; see also foley artist, dubbing, and non-synchronized sound"
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
                definition: "in the post-production and editing stage of a film\'s production, the foley artist (named after pioneer Jack Foley) creates or adds sound effects/noises (e.g., footsteps, gunshots, kisses, punches, storm noises, slamming doors, explosions, etc.) to the film as it is projected, often with props that mimic the action"
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
                definition: "named after Will Hays, a series of rigid censorship restrictions imposed on films by the Motion Picture Production Code (MPPC) beginning in mid-1934, and enforced/administered by Joseph Breen (in the Breen Office); the code had existed since the late 1920s but wasn\'t vigorously enforced, and it basically lasted until the late 1960s; the Code explicitly prescribed what couldn\'t be shown in films"
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
                definition: "type of schedule given out periodically during a film\'s production to let every department know when they are supposed to arrive and where they are to report"
            }, {
                score: 0,
                term: "buzz track",
                definition: "added to an actor\'s adr looped dialogue"
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
                definition: "1. preparation of sketches and designs for a production. 2. The correct construction and dressing of sets",
                term: "two responsibilities of an art director"
            }, {
                score: 0,
                term: "duvetyne",
                definition: "A light-blocking fabric. Used for lighting flags, AKA commando cloth, star trek put glitter on it and used that as \'space\' exterior"
            }, {
                score: 0,
                term: "Insul-quilt",
                definition: "blanket of fiberglass, faced with fiberglass cloth and backed with a flame-proof foil"
            }, {
                score: 0,
                term: "grip",
                definition: "lighting and rigging technicians, answer to key grip, provide camera support and lighting setups OR the crew member responsible for setting up dolly tracks and camera cranes, erecting scaffolding, moving props or scenery, or the adjustment or maintenance of any other production equipment on the set - a physically demanding job; the key grip is the head grip who coordinates all of the other grips in the crew, and receives direction from the gaffer or head lighting technician; the key grip\'s right-hand assistant is known as the best boy grip"
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
                term: "Establishing Shot",
                definition: "sets the scene or shows the space of a scene"
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
                term: "Pan",
                definition: "Stationary camera moves left or right"
            }, {
                score: 0,
                term: "Tilt",
                definition: "stationary camera moves up and down"
            }, {
                score: 0,
                term: "Dolly Shot",
                definition: "camera is on a track and moves from side to side"
            }, {
                score: 0,
                term: "Cut",
                definition: "most common way to transfer from scene to scene"
            }],
            areas: [{
                name: "Midwest Street",
                built: "Built in the 1940s for Saratoga Trunk starring Ingrid Bergman and Gary Cooper",
                common: ["Gilmore Girls", "Pretty Little Liars", "Dukes of Hazzard", "The Shootist", "Cool Hand Luke", "Oceans 11", "The Music Man", "Growing Pains", "The Muppets", "Rebel Without A Cause", "Shameless", "Seinfeld", "Jack Frost", "O Brother Where Art Thou", "The Waltons", "Lois and Clark: The New Adventures of Superman", "Postcards from the Edge", "East of Eden", "Norbit", "The Swarm", "Police Academy", "Inherit the Wind", "Gypsy", "The Ellen Show", "Jesse", "Everybody Loves Raymond", "Mayberry RFD", "Sisters", "Life Goes On", "Homefront", "Flamingo Road", "Suddenly Susan", "Young at Heart", "Gremlins", "Postcards form the Edge", "East of Eden", "Delirious", "Lost Boys", "Without a Trace", "Secret Santa", "Hyperion Bay", "Terminator: Sarah Connor Chronicles", "The Ghost Whisperer", "The Mentalist", "An American Carol", "Dr. Socrates", "Johnny Belinda", "Four Wives", "Batman and Robin", "The Dark Knight", "Hart of Dixie"],
                tech: ["Practical Sets", "Customize the Street", "Making Seasons Change", "Forced Perspective", "Trompe-l\'\u0153il (sound stage)", "Set Dressing"]
            }, {
                name: "French Street",
                built: "Built in the 1940s, most likely",
                common: ["Casablanca", "Small Soldiers", "The Big Bang Theory (x2)", "Gilmore Girls", "Friends", "Pretty Little Liars", "The West Wing", "Everybody Loves Raymond", "Mom", "Ally McBeal", "Looney Tunes: Back in Action", "The New Adventures of Old Christine", "Phantom of the Rue Morgue", "The Omega Man", "Sisters", "Cold Case", "An American Carol", "Terminator: The Sarah Connor Chronicles"],
                tech: ["Plant-on", "Skin", "Trompe-l\'\u0153il (sound stage)"]
            }, {
                name: "King\'s Row",
                built: "Built in 1941 for King\'s Row, starring Ronald Reagan and Ann Sheridan",
                common: [
                    "Damn Yankees", "Gilmore Girls", "The Shootist", "Friends", "Cats and Dogs", "Terminator: Sarah Connor Chronicles", "Shameless", "Pretty Little Liars", "Sisters", "Old Acquaintance", "A Season for Miracles", "The Dukes of Hazzard", "East of Eden", "ER", "White Heat", "The Mentalist", "Our Miss Brooks", "Defending Your Life", "Growing Pains", "Rebel Without a Cause", "Gremlins", "Hart of Dixie", "Postcards from the Edge", "Rascal Flatts Music Video", "Dennis the Menace Strikes Again", "Anger Management", "Chuck", "Christmas Vacation 2: Cousin Eddie\'s Island Adventure", "Defending Your Life"
                ],
                tech: ["Skins", "Plant-ons", "Set Dressing", "Practical Set", "Facade", "Shell", "ADR"],
            }, {
                name: "Hennesy Street",
                built: "Built in the 1930s, upgraded in 1980s",
                common: ["Annie", "Vacation", "ER", "Batman Returns", "Batman Forever", "Batman and Robin", "The Mask", "Pee Wee\'s Big Adventure", "Minority Report", "You Don\'t Mess with the Zohan", "Friends", "Murphy Brown", "Lansky", "Harlem Nights", "Lethal Weapon 2", "The Butcher\'s Wife", "Tuesday\'s with Morrie", "Jack and Jill", "City Heat", "A.I.", "Cristmas with the Kranks", "Letters from Iwo Jima", "Cold Case", "Related", "The Love Bug", "Everybody Loves Raymond", "The Changling", "Yes Man", "Entourage", "Chuck", "Terminator: Sarah Connor Chronicles", "Terminator: Budweiser Commercial", "The Ghost Whisperer", "Newsies", "Barbed Wire", "The Backup Plan", "Mob City", "The Roaring 20s", "Little Caesar", "Beaches", "Lois and Clark", "Rent", "Road to Perdition", "Dick Tracy", "A Little Princess", "Entourage", "Michael Jackson Pepsi Commercial", "LMFAO Party Rock Anthem", "2 Broke Girls", "J Edgar", "Jersey Boys", "Angels with Dirty Faces", "Cloverfield"],
                tech: ["Set Dressing", "Plant-Ons", "Facades", "Rain Grid", "Shells", "Practical Sets"]
            }, {
                name: "Tenement Alley",
                built: "Built in the 1930s to depict an Asian nieghborhood",
                common: ["Newsies", "Gremlins", "Annie", "House of Wax", "Spiderman", "Friends", "The Last Samurai", "Sex and the City", "Pee Wee\'s Big Adventure", "Rent", "Starsky and Hutch", "Daredevil", "Harlem Nights", "Karate Kid II", "Yes Man", "Shameless", "Scarface", "The Public Enemy", "Angels with Dirty Faces", "You Don\'t Mess with the Zohan", "Letters from Iwo Jima", "Harlem Nights", "Little Caesar", "Fallen", "Cold Case", "The Changling"],
                tech: ["Set Dressing", "Plant-Ons", "Facades", "Rain Grid", "Shells", "Practical Sets"]
            }, {
                name: "Park Place",
                built: "Built in the 1930s, upgraded in 2000 to office building, Upgraded to current state in 2007",
                common: ["Ocean\'s 13", "The Music Man", "Chuck", "Two Broke Girls", "The West Wing", "Austin Powers: Goldmember", "JC Penny Commercial", "Chevrolet commercial", "The Ghost Whisperer"],
                tech: ["Green Screens, CGI", "Set Dressing", "Forced Perspective", "Production Costs", "Helicopters on Cranes"]
            }, {
                name: "Brownstone Street",
                built: "Built in the 1920s - oldest on the lot",
                common: ["Argo", "Friends", "Batman Returns", "The Great Race", "Gilmore Girls", "Looney Tunes: Back in Action", "Wait Until Dark", "Rope", "Postcards from the Edge", "ER", "The West Wing", "Murphy Brown", "Annie (1999)", "Two of a Kind", "Pretty Little Liars", "Robin and the 7 Hoods", "Terminator: Sarah Connor Chronicles", "Pushing Daisies", "Bird", "Lois and Clark: The New Adventures of Superman"],
                tech: ["Practical Sets", "Skins", "Facades", "Set Dressing", "Plant-Ons", "Shells"]
            }, {
                name: "New York Street",
                built: "Built in the 1920s, rebuilt after 1952 Fire",
                common: ["The Great Race", "The Maltese Falcon", "Gypsy", "A Star is Born", "Shameless", "Gilmore Girls", "Lois and Clark: The New Adventures of Superman", "The Last Samurai", "The Big Bang Theory", "Friends", "ER", "A Star is Born", "Gypsy", "Whatever Happened to Baby Jane?", "Pretty Little Liars", "Wonder Woman", "Entourage", "Jersey Boys", "Pushing Daisies", "Man of Steel Carl\'s Jr. Commercial", "Ellen\'s 50th Birthday Bash", "Chuck", "WB Network Promos starring Michigan J Frog", "Funny Girl", "1941", "Bladerunner", "Riding with the King", "The Big Sleep", "What\'s Up Doc?", "Firefox", "The Mask", "Fail Safe (Live TV)", "Lethal Weapon 4", "Moonlight", "The Ellen Degenres Show", "Trust Me", "Priest", "The Mentalist", "Lovelace", "The Drew Carey Show", "The Way We Were", "Introducing Dorothy Dandridge", "Robin and the 7 Hoods", ],
                tech: ["Set Dressing", "Plant-Ons", "Facades", "Rain Grid", "Shells", "Practical Sets", "Subway Quick Change", "Windows on the Jumbo Mart Practical tilt", "L Train Tracks"]
            }, {
                name: "Courthouse",
                built: "Built ?",
                common: ["Robin and the 7 Hoods", "Batman (TV Series)", "Argo", "Wonder Woman", "Night Court", "Harry\'s Law", "Mad About You", "The Omega Man", "Nuts", "Lois and Clark: The New Adventures of Superman", "Sisters", "The Man with Two Brains", "Father\'s Day", "Ally McBeal", "The Mentalist", "Pretty Little Liars"],
                tech: ["Establishing Shot"]
            }, {
                name: "Embassy Court / New York Park",
                built: "Built in the 1920s?",
                common: ["Annie", "Friends", "Gilmore Girls", "Pretty Little Liars", "Pushing Daisies", "The Big Bang Theory", "Batman Forever", "Gypsy", "13 Days", "Harlme Nights", "Naked Gun 2 1/2", "Perfect Strangers", "Eraser", "Conspiracy Theory", "Batman Forever", "Hotel", "Lois and Clark: The New Adventures of Superman", "To Be or Not To Be", "Hart to Hart", "The Drew Carey Show", "Lords of Dogtown", "The Class", "Moonlight", "Two and a Half Men", "The Eleventh Hour"],
                tech: ["Set Dressing", "Camera Angles", "Usually a Bush Wagon or Red Eye nearby"]
            }, {
                name: "The Jungle",
                built: "Built in 1956 for Santiago",
                common: ["Santiago", "The Big Bang Theory", "True Blood", "Hart of Dixie", "Pretty Little Liars", "Jurassic Park", "The Muppets", "Gilmore Girls", "Million Dollar Baby", "ER", "Dexter", "The Fosters", "The Last Samurai", "Private Benjamin", "The Green Berets", "The Green Mile", "Fantasy Island", "The Waltons", "Invasion", "Batman Forever", "Adaptation", "Congo", "A Little Princess", "The Omega Man", "The Unit", "Terminator: Sarah Connor Chronicles", "Pushing Daisies", "Cold Case", "Moonlight", "Without a Trace", "Get Smart", "The Mentalist", "Two and a Half Men", "Six Days and Seven Nights", "Camelot", "The Great Race", "China Beach", "Ocean\'s 12", "Studio 60 on the Sunset Strip", "Loomey Tunes: Back in Action", "Pee Wee\'s Big Adventure"],
                tech: ["The Lagoon", "Shells", "Practical Sets", "Bushwagons", "Bumblebees/Yellow Jackets", "Set Dressing"]
            }, {
                name: "Warner Village",
                built: "Built in 2004, replaced Laramie Street",
                common: ["Pretty Little Liars", "The Big Bang Theory", "The Muppets (2011)", "The George Lopez Show", "Gilmore Girls", "The New Adventures of Old Christine", "Two and a Half Men", "Jericho", "Cold Case", "An American Carol"],
                tech: ["Production offices"]
            }, {
                name: "The Bridge Building",
                built: "Built ?",
                common: ["The Mentalist", "The West Wing", "ER", "Studio 60 on the Sunset Strip", "Lois and Clark: The New Adventures of Superman", "Gilmore Girls", "Terminator: Sarah Connor Chronicles", "The Unit", "Moonlight"],
                tech: ["Set Dressing", "Anything for the pictures"]
            }]
        };

        self.checkStorage = function() {
            if (localStorage.length === 0) {
                for (var i = 0; i < self.model.cards.length; i++) {
                    localStorage.setItem(self.model.cards[i].term, self.model.cards[i].score);
                }
            } else {
                for (var n = 0; n < self.model.cards.length; n++) {
                    self.model.cards[n].score = localStorage.getItem(self.model.cards[n].term);
                }
            }
        };
        // Map View
        self.toggleMapView = function() {
            self.factSheetView(false);
            self.flashCardView(false);
            self.mapView(!self.mapView());
            self.dodgeballView(false);
        };

        // End Map View Code
        // Fact Sheet View Code

        self.toggleFactSheetView = function() {
            self.factSheetView(!self.factSheetView());
            self.flashCardView(false);
            self.mapView(false);
            self.dodgeballView(false);
        };
        self.toggleButtons = function() {
            self.buttonArea(!self.buttonArea());
            self.infoWindow(!self.infoWindow());
        };
        self.chooseArea = function(clicked) {
            self.areaName(clicked.name);
            self.areaBuilt(clicked.built);
            self.areaCommon(clicked.common);
            self.areaTech(clicked.tech);
            if (self.buttonArea()) {
                self.toggleButtons();
            }
        };

        // End Fact Sheet View Code
        // Flash Card View Code

        self.toggleFlashCardView = function() {
            self.factSheetView(false);
            self.flashCardView(!self.flashCardView());
            self.mapView(false);
            self.dodgeballView(false);
        };
        self.flip = function() {
            self.displayTerm(!self.displayTerm());
            self.displayDef(!self.displayDef());
        };
        self.drawCard = function() {
            if (self.displayTerm() === false) {
                self.displayTerm(!self.displayTerm());
                self.displayDef(!self.displayDef());
            }
            var cn = Math.floor((Math.random() * self.model.cards.length) + 1);
            var currentCard = self.model.cards[cn];

            self.card(currentCard);
            self.term(currentCard.term);
            self.score(currentCard.score);
            self.definition(currentCard.definition);
        };
        self.skip = function() {
            self.drawCard();
        };
        self.retireCard = function() {
            if (self.score() >= 10) {
                var locate = self.model.cards.indexOf(self.card());
                self.model.cards.splice(locate, 1);
                drawCard();
            }
        };
        self.correct = function() {
            if (self.displayTerm() === false) {
                self.displayTerm(!self.displayTerm());
                self.displayDef(!self.displayDef());
            }
            var locate = self.model.cards.indexOf(self.card());
            self.model.cards[locate].score++;
            localStorage.setItem(self.term(), self.model.cards[locate].score);
            self.score(self.model.cards[locate].score);
            self.retireCard();
            self.drawCard();
        };
        self.incorrect = function() {
            if (self.displayTerm() === false) {
                self.displayTerm(!self.displayTerm());
                self.displayDef(!self.displayDef());
            }
            var locate = self.model.cards.indexOf(self.card());
            self.model.cards[locate].score = self.model.cards[locate].score - 1;
            localStorage.setItem(self.term(), self.model.cards[locate].score);
            self.score(self.model.cards[locate].score);
            self.drawCard();
        };
        self.drawCard();

        //End Flash Card View Code
        // Dodgeball Code

        self.toggleDodgeball = function() {
            self.factSheetView(false);
            self.mapView(false);
            self.flashCardView(false);
            self.dodgeballView(!self.dodgeballView());
        };

        self.gameOverView = ko.observable(false);
        self.message = ko.observable();
        self.entry = ko.observable();
        self.backlotArea = ko.observable();
        self.game = ko.observable(true);
        self.backlotSearch = ko.observableArray();
        self.correctGuesses = ko.observableArray();
        self.incorrectGuess = ko.observable(false);
        self.backlotTech = ko.observableArray();

        self.startGame = function() {
            setTimeout(function() {
                self.gameOverView(true);
                self.message("You identified " + self.correctGuesses().length + " out of " + self.backlotSearch().length + " titles!");
                self.backlotSearch(self.backlotSearch());
                for (var i = 0; i < self.correctGuesses().length; i++) {
                    if (self.backlotSearch().indexOf(self.correctGuesses()[i]) !== -1) {
                        var success = self.correctGuesses()[i].replace(/\s+/g, '');
                        $("#"+success).removeClass('undiscovered');
                    }
                }
            }, 120000);
            var bcd = Math.floor((Math.random() * self.model.areas.length) + 1);
            self.backlotArea(self.model.areas[bcd].name);
           self.backlotSearch(self.model.areas[bcd].common);
        };

        self.submitEntry = function() {
            console.log(self.entry());
            if (self.backlotSearch.indexOf(self.entry()) !== -1) {
                self.correctGuesses.push(self.entry());
            } else {
                setTimeout(function() {
                    self.incorrectGuess(false);
                }, 3000);
                self.incorrectGuess(true);
            }
            self.entry("");
        };

        $("#guess").keyup(function(event) {
            if (event.keyCode == 13) {
                $("#guesser").click();
            }
        });

        self.endGame = function() {
            self.gameOverView(false);
            self.game(false);
            self.backlotArea("");
            self.entry("");
            self.correctGuesses("");
        };
        self.correctGuesses.extend({
            notify: 'always'
        });
        self.message.extend({
            notify: 'always'
        });
        self.entry.extend({
            notify: 'always'
        });
        self.backlotArea.extend({
            notify: 'always'
        });
    };

    ko.applyBindings(new viewModel());
});
