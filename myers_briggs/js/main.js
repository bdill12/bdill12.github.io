var ViewModel = function() {
    // Data
    var self = this;
    self.types = [
	{
		letters: "ISTJ",
		pros: ["Quiet", "Serious", "Dependable", "Practical", "Matter-of-fact"],
		cons: ["Take things too seriously at times", "Judgemental", "Very little abstract thinking", "Uncomfortable expressing emotions", "Hard on themselves"],
		work: ["Things done by the book", "Highly organized", "Clear expectations", "Teamwork should be rare", "Social justice" ],
		snippets: ["ISTJs keep their feet on the ground and make clear, rational decisions.",],
		names: ["Natalie Portman", "Herber Hoover", "Hermione Granger", "George Washington", "George H.W. Bush"]
	},
	{
		letters: "ISFJ",
		pros: ["Supportive", "Friendly", "Responsible", "Conscientious", "Committed"],
		cons: ["Shy", "Too sensitive", "Repress emotions", "Resist change", "Will work themselves to death"],
		work: ["Not highly competive", "Lots of encouragement", "Service-oriented", "No conflict among co-workers", "Personal relationships important"],
		snippets: ["ISFJs need to be needed."],
		names: ["Queen Elizabeht II", "Robert E. Lee", "Dr. Watson", "Sam from Lord of the Rings", "Halle Berry"]
	}, 
	{
		letters: "INFJ",
		pros: ["Seek meaning in everythiing", "Insightful", "Persuasive", "Organized", "Decisive"],
		cons: ["Sensitive", "Closed books to all but a few", "Must always be fighting something", "Tire out easily"],
		work: ["Meaningful", "Creative", "Lots of independence", "Focus on communication", "Focus on individuals"],
		snippets: ["When INFJs come to believe that something is important, they pursue that goal with a conviction and energy that can catch even their friends and loved ones off guard."],
		names: ["Nicole Kidman", "Martin Luther King", "Jimmy Carter", "Nelson Mandela", "Mel Gibson"]
	},
	{
		letters: "INTJ",
		pros: ["Original and open-minded", "Great drive", "See patterns in external events", "High confidence", "Independent"],
		cons: ["Arrogant", "Judgmental", "Stuck in their heads", "Don't deal well with structure", "Hopeless in love"],
		work: ["Prefer to work alone", "High standards", "Meritocracy", "Loosely defined roles", "Lots of challenges"],
		snippets: ["A paradox to most observers, INTJs are able to live by glaring contradictions that nonetheless make perfect sense."],
		names: ["Vladimir Putin", "Thomas Jefferson", "John F. Kennedy", "Hannibal", "Gandalf the Grey"]
	},
	{
		letters: "ISTP",
		pros: ["Tolerant", "Great in a crisis", "Relaxed", "Spontaneous, but rational", "Creative, but practical"],
		cons: ["Stubborn", "Private and reserved", "Insensitive", "Risky behavior", "Easily bored"],
		work: ["Need to know how things work", "Hands-on experiences", "Independence", "Practical solutions", "Concrete results" ],
		snippets: ["Rather than some sort of vision quest, ISTPs are merely exploring the viability of a new interest when they make seismic shifts."],
		names: ["Clint Eastwood", "Tom Cruise", "Indiana Jones", "Jack Bauer", "Angus MacGuyver" ]
	},
	{
		letters: "ISFP",
		pros: ["Charming", "Great imaginations", "Sensitive", "Curious", "Passion"],
		cons: ["Independent to a fault", "High anxiety", "Very competitive", "Love themselves, hate themselves", "Unpredictable"],
		work: ["Unpredictability", "Short term commitments", "Dynamic, always changing environments", "Freelancing and consulting","Room to improve things"],
		snippets: ["ISFPs always know just the compliment to soften a heart that's getting ready to call their risks irresponsible or reckless."],
		names: ["Bob Dylan", "Marie Antoinette", "Millard Filmore", "John Travolta", "Donald Trump"]
	},
	{
		letters: "INFP",
		pros: ["Idealistic", "loyal", "curious", "maximize potential of others", "adaptable"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "INTP",
		pros: ["theoretical", "abstract", "quiet", "flexible", "incredible focus"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "ENFP",
		pros: ["Spontaneous", "Comfortable in unfamiliar situations", "Energetic", "Keen observers", "Brilliantly perceptive"],
		cons: ["Seek attention", "Act irrationally", "Break rules", "Prone to fantasy", "Can make serious mistakes in judgment"],
		work: ["Has variety", "Full of Challenges", "Free from tight supervision", "Energetic", "Creative and original"],
		snippets: ["When people fall in love, they resemble garden-variety ENFPs because ENFPs normally behave like people in love."],
		names: ["Dr. Suess", "Mark Twain", "Ellen Degeneres", "Walt Disney", "Sandra Bullock"]
	},
	{
		letters: "ESTP",
		pros: ["flexible", "tolerant", "pragmatic", "energetic", "spontaneous"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "ESFP",
		pros: ["outgoing", "friendly", "accepting", "exuberant lovers of life", "flexible"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "ENTP",
		pros: ["quick", "ingenious", "stimulating", "alert", "outspoken"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "ESTJ",
		pros: ["Practical", "realistic", "matter-of-fact", "decisive", "detail-oriented"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "ESFJ",
		pros: ["Warmhearted", "conscientious", "cooperative", "work well with others", "dependable"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "ENFJ",
		pros: ["warm", "empathetic", "responsive", "responsible", "see potential in everyone"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	},
	{
		letters: "ENTJ",
		pros: ["frank", "decisive", "assume leadership readily", "problem solvers", "well-informed"],
		cons: ["Other Types Coming Soon"],
		work: ["Other Types Coming Soon"],
		snippets: ["Other Types Coming Soon"],
		names: ["Other Types Coming Soon"]
	}];
	self.chosenType = ko.observable();
	self.chosenStrengths = ko.observable();
	self.chosenWeaknesses = ko.observable();
	self.chosenWork = ko.observable();
	self.chosenFamous = ko.observable();
	self.chosenQuote = ko.observable();



	// Behaviors
	self.chooseType = function() {
		$('.info').removeClass("hidden");
		self.chosenType(this.letters);
		self.chosenStrengths(this.pros);
		self.chosenWeaknesses(this.cons);
		self.chosenWork(this.work);
		self.chosenFamous(this.names);
		self.chosenQuote(this.snippets);
		
	};
};

ko.applyBindings(new ViewModel());