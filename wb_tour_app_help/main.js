var model, viewModel;
$(function() {
   model = ko. observableArray([{
        name: " Midwest Street",
        built: "Built in the 1940s for Saratoga Trunk starring Ingrid Bergman and Gary Cooper",
        common: ["Gilmore Girls", " Pretty Little Liars", " Dukes of Hazzard", " The Shootist", " Cool Hand Luke", " Oceans 11", " The Music Man", " Growing Pains", " The Muppets"],
        lessCommon: ["Rebel Without A Cause", " Shameless", " Seinfeld", " Jack Frost", " O Brother Where Art Thou", " The Waltons", " Lois and Clark: The New Adventures of Superman", " Postcards from the Edge", " East of Eden", " Norbit", " The Swarm"],
        tech: ["Practical Sets", " Customize the Street", " Making Seasons Change", " Forced Perspective", " Trompe-l'œil (sound stage)", " Set Dressing"]
    }, {
        name: " French Street",
        built: "Built in the 1940s, most likely",
        common: ["Casablanca", " Small Soldiers", " The Big Bang Theory (x2)", " Gilmore Girls", " Friends", " Pretty Little Liars"],
        lessCommon: ["The West Wing", " Everybody Loves Raymond", " Mom", " Ally McBeal", " Looney Tunes: Back in Action", " The New Adventures of Old Christine"],
        tech: ["Plant-on", " Skin", " Trompe-l'œil (sound stage)"]
    }, {
        name: " King's Row",
        built: "Built in 1941 for King's Row, starring Ronald Reagan and Ann Sheridan",
        common: [
        "1L: Damn Yankees", " 1L: Gilmore Girls (Kim's Antiques)", " 1L: The Shootist (Doctor's Home)", " 1L: Friends: Geller House", " 1L: Pretty Little Liars (House of Emily Fields", " 2L: Pretty Little Liars (Front: Mona's House, Back: Spencer's)", " 2L: Gilmore Girls (Front: Sookie St. James, Back: Lorelei and Rory)", " 2L: Dukes of Hazzard (Front: Boss Hogg, Back: Uncle Jesse", " 2L: East of Eden (James Dean)", " 2L: ER (Dr. Benton's (Eric La Salle) Family Home)", " 1R: White Heat", " 1R: Growing Pains", " 1R: Rebel without a Cause", " 1R: Gremlins", " 1R: Gilmore Girls", " 1R: Hart of Dixie (Fancy's Restaurant)", " 1R: Pretty Little Liars", " 2R: Friends (Phoebe's 'Father's House)", " 2R: Pretty Little Liars (Aria's House Close-Ups)"],
        lessCommon: ["1L: Postcards from the Edge", " 2L: Rascal Flatts Music Video", " 1R: Dennis the Menace Strikes Again", " 1R: Anger Management", " Chuck", " Christmas Vacation 2: Cousin Eddie's Island Adventure", " 2L: Defending Your Life (Meryl saves a cat)"],
        tech: ["Skins", " Plant-ons", " Set Dressing", " Practical Set", " Facade", " Shell", " ADR"],
    }, {
        name: " Hennesy Street",
        built: "Built in the 1930s, upgraded in 1980s",
        common: ["Annie", " ER", " Batman Returns", " Batman Forever", " Batman and Robin", " Mask", " Pee-Wee's Big Adventure", " Minority Report", " You Don't Mess with the Zohan", " Newsies"],
        lessCommon: ["Murphey Brown", " Lois and Clark", " Rent", " Road to Perdition", " Dick Tracy", " A Little Princess", " Entourage", " Michael Jackson Pepsi Commercial", " LMFAO Party Rock Anthem", " Two Broke Girls", " J Edgar", " Jersey Boys", " Angels with Dirty Faces", " Cloverfield"],
        tech: ["Set Dressing", " Plant-Ons", " Facades", " Rain Grid", " Shells", " Practical Sets"]
    }, {
        name: " Tenement Alley",
        built: "Built in the 1930s to depict an Asian nieghborhood",
        common: ["Gremlins", " Annie", " House of Wax", " Spiderman", " Friends", " The Last Samurai", " Sex and the City", " Pee Wee's Big Adventure"],
        lessCommon: ["Rent", " Starsky and Hutch", " Daredevil", " Harlem Nights", " Karate Kid II", " Yes Man", " Shameless", " Scarface", " The Public Enemy", " Angels with Dirty Faces"],
        tech: ["Set Dressing", " Plant-Ons", " Facades", " Rain Grid", " Shells", " Practical Sets"]
    }, {
        name: " Park Place",
        built: "Built in the 1930s, upgraded in 2000 to office building, Upgraded to current state in 2007",
        common: ["Ocean's 13", " The Music Man"],
        lessCommon: ["Chuck", " Two Broke Girls", " The West Wing", " Austin Powers: Goldmember"],
        tech: ["Green Screens, CGI", " Set Dressing", " Forced Perspective", " Production Costs", " Helicopters on Cranes"]
    }, {
        name: " Brownstone Street",
        built: "Built in the 1920s - oldest on the lot",
        common: ["Gilmore Girls", " Looney Tunes: Back in Action", " Wait Until Dark", " Rope"],
        lessCommon: ["Postcards from the Edge", " ER", " The West Wing", " Murphey Brown", " Annie (1999)", " Two of a Kind", " Pretty Little Liars"],
        tech: ["Practical Sets", " Skins", " Facades", " Set Dressing", " Plant-Ons", " Shells"]
    }, {
        name: " New York Street",
        built: "Built in the 1920s, rebuilt after 1952 Fire",
        common: ["Lois and Clark: The New Adventures of Superman", " The Last Samurai", " The Big Bang Theory", " Friends", " ER", " A Star is Born", " Gypsy", " Whatever Happened to Baby Jane?", " Pretty Little Liars"],
        lessCommon: ["Entourage", " Jersey Boys", " Pushing Daisies", " Man of Steel Carl's Jr. Commercial", " Ellen's 50th Birthday Bash", " Chuck", " WB Network Promos starring Michigan J Frog", " Funny Girl", " 1941", " Bladerunner"],
        tech: ["Set Dressing", " Plant-Ons", " Facades", " Rain Grid", " Shells", " Practical Sets", " Subway Quick Change", " Windows on the Jumbo Mart Practical tilt", " L Train Tracks"]
    }, {
        name: " Courthouse",
        built: "Built ?",
        common: ["Robin and the 7 Hoods", " Batman (TV Series)", " Argo"],
        lessCommon: ["Wonder Woman", " Night Court", " Harry's Law", " Mad About You"],
        tech: ["Establishing Shot"]
    }, {
        name: " Embassy Court / New York Park",
        built: "Built in the 1920s?",
        common: ["Friends", " Gilmore Girls", " Pretty Little Liars"],
        lessCommon: ["Pushing Daisies", " The Big Bang Theory", " Batman Forever", " Gypsy"],
        tech: ["Set Dressing", " Camera Angles", " Usually a Bush Wagon or Red Eye nearby"]
    }, {
        name: " The Jungle",
        built: "Built in 1956 for Santiago",
        common: ["The Big Bang Theory", " True Blood", " Hart of Dixie", " Pretty Little Liars", " Jurassic Park", " The Muppets", " Gilmore Girls", " Million Dollar Baby", " ER", " Dexter"],
        lessCommon: ["The Fosters", " The Last Samurai", " Private Benjamin", " The Green Berets", " The Green Mile", " Fantasy Island", " The Waltons", " Invasion", " Batman Forever"],
        tech: ["The Lagoon", " Shells", " Practical Sets", " Bushwagons", " Bumblebees/Yellow Jackets", " Set Dressing"]
    }, {
        name: " Warner Village",
        built: "Built in 2004, replaced Laramie Street",
        common: ["Pretty Little Liars", " The Big Bang Theory", " The Muppets (2011)"],
        lessCommon: ["The George Lopex Show", " Gilmore Girls", " The New Adventures of Old Christine", " Two and a Half Men"],
        tech: ["Anything for the pictures", " Production offices"]
    }, {
        name: " The Bridge Building",
        built: "Built ?",
        common: [" The West Wing (LA. Hotel)", " ER (Hospital)"],
        lessCommon: ["Studio Sixty on the Sunset Strip", " Lois and Clark: The New Adventures of Superman (Star Labs)"],
        tech: ["Set Dressing", " Anything for the pictures"]
    }, ]);

    viewModel = function() {
        var self = this;
        self.lotArea = ko.observable();
        self.areaName = ko.observable();
        self.areaBuilt = ko.observable();
        self.areaCommon = ko.observableArray();
        self.areaLessCommon = ko.observableArray();
        self.areaTech = ko.observableArray();
        self.buttonArea = ko.observable(true);
        self.toggleMe = ko.observable("Hide Choices");

        self.toggleButtons = function() {
        	self.buttonArea(!self.buttonArea());
        	if (self.buttonArea() === true) {
        		self.toggleMe("Hide Choices");
        	} else {
        		self.toggleMe("Choose an Area");
        	}
        };

        self.chooseArea = function(clicked) {
        	self.lotArea(clicked);
        	self.areaName(clicked.name);
        	self.areaBuilt(clicked.built);
        	self.areaCommon(clicked.common);
        	self.areaLessCommon(clicked.lessCommon);
        	self.areaTech(clicked.tech);
        	self.toggleButtons();
        };


    };

    ko.applyBindings(new viewModel());
});
