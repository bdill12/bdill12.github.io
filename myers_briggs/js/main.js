var ViewModel = function() {
    // Data
    var self = this;
    self.types = [{
        letters: "ISTJ",
        pros: ["Quiet", "Serious", "Dependable", "Practical", "Matter-of-fact"],
        cons: ["Take things too seriously at times", "Judgemental", "Very little abstract thinking", "Uncomfortable expressing emotions", "Hard on themselves"],
        work: ["Things done by the book", "Highly organized", "Clear expectations", "Teamwork should be rare", "Social justice"],
        snippets: ["ISTJs keep their feet on the ground and make clear, rational decisions.", ],
        names: ["Natalie Portman", "Herber Hoover", "Hermione Granger", "George Washington", "George H.W. Bush"]
      }, {
        letters: "ISFJ",
        pros: ["Supportive", "Friendly", "Responsible", "Conscientious", "Committed"],
        cons: ["Shy", "Too sensitive", "Repress emotions", "Resist change", "Will work themselves to death"],
        work: ["Not highly competive", "Lots of encouragement", "Service-oriented", "No conflict among co-workers", "Personal relationships important"],
        snippets: ["ISFJs need to be needed."],
        names: ["Queen Elizabeht II", "Robert E. Lee", "Dr. Watson", "Sam from Lord of the Rings", "Halle Berry"]
      }, {
        letters: "INFJ",
        pros: ["Seek meaning in everythiing", "Insightful", "Persuasive", "Organized", "Decisive"],
        cons: ["Sensitive", "Closed books to all but a few", "Must always be fighting something", "Tire out easily"],
        work: ["Meaningful", "Creative", "Lots of independence", "Focus on communication", "Focus on individuals"],
        snippets: ["When INFJs come to believe that something is important, they pursue that goal with a conviction and energy that can catch even their friends and loved ones off guard."],
        names: ["Nicole Kidman", "Martin Luther King", "Jimmy Carter", "Nelson Mandela", "Mel Gibson"]
      }, {
        letters: "INTJ",
        pros: ["Original and open-minded", "Great drive", "See patterns in external events", "High confidence", "Independent"],
        cons: ["Arrogant", "Judgmental", "Stuck in their heads", "Don't deal well with structure", "Hopeless in love"],
        work: ["Prefer to work alone", "High standards", "Meritocracy", "Loosely defined roles", "Lots of challenges"],
        snippets: ["A paradox to most observers, INTJs are able to live by glaring contradictions that nonetheless make perfect sense."],
        names: ["Vladimir Putin", "Thomas Jefferson", "John F. Kennedy", "Hannibal", "Gandalf the Grey"]
      }, {
        letters: "ISTP",
        pros: ["Tolerant", "Great in a crisis", "Relaxed", "Spontaneous, but rational", "Creative, but practical"],
        cons: ["Stubborn", "Private and reserved", "Insensitive", "Risky behavior", "Easily bored"],
        work: ["Need to know how things work", "Hands-on experiences", "Independence", "Practical solutions", "Concrete results"],
        snippets: ["Rather than some sort of vision quest, ISTPs are merely exploring the viability of a new interest when they make seismic shifts."],
        names: ["Clint Eastwood", "Tom Cruise", "Indiana Jones", "Jack Bauer", "Angus MacGuyver"]
      }, {
        letters: "ISFP",
        pros: ["Charming", "Great imaginations", "Sensitive", "Curious", "Passion"],
        cons: ["Independent to a fault", "High anxiety", "Very competitive", "Love themselves, hate themselves", "Unpredictable"],
        work: ["Unpredictability", "Short term commitments", "Dynamic, always changing environments", "Freelancing and consulting", "Room to improve things"],
        snippets: ["ISFPs always know just the compliment to soften a heart that's getting ready to call their risks irresponsible or reckless."],
        names: ["Bob Dylan", "Marie Antoinette", "Millard Filmore", "John Travolta", "Donald Trump"]
      }, {
        letters: "INFP",
        pros: ["True Idealists", "Motivated by Pure Intentions", "Curious", "Maximize the Potential of Others", "Deep Communicators"],
        cons: ["Shy", "Neglect Day-to-Day Activities", "Impractical", "Everything is Personal", "Very Private"],
        work: ["Keep the Data far Away", "High Level of Independence", "Face-to-Face Interactions", "More than Just a Job", "Down with Bureaucracy"],
        snippets: ["Few personality types are as poetic and kind-hearted as INFPs."],
        names: ["William Shakespeare", "Julia Roberts", "Homer", "Lisa Kudrow", "J.R.R. Tolkien"]
      }, {
        letters: "INTP",
        pros: ["Theoretical", "Vigorous Intellect", "Unique Perspective", "Flexible", "Incredible Focus"],
        cons: ["Extremely Private", "Absent-minded", "Can't Stand Rules", "Condescending", "Insensitive"],
        work: ["They'll Do the Math", "Self-Motivating", "Perfectionism is the Standard", "Analysts", "People Skills Not a Priority"],
        snippets: ["INTPs are the most logically precise of all the personality types."],
        names: ["Albert Einstein", "Carl Jung", "Gerald Ford", "Isaac Newton", "Rene Descartes"]
      }, {
        letters: "ENFP",
        pros: ["Spontaneous", "Comfortable in Unfamiliar Situations", "Energetic", "Pay Attention to Everything", "Brilliantly perceptive"],
        cons: ["Attention Seekers", "Irrational", "Rule Breakers", "Prone to Flights of Fantasy", "Can Make Serious Mistakes in Judgment"],
        work: ["Variety", "Full of Challenges", "Free from Tight Supervision", "Many Activities", "Creativity and Originality are Highly Valued"],
        snippets: ["When people fall in love, they resemble garden-variety ENFPs because ENFPs normally behave like people in love."],
        names: ["Dr. Suess", "Mark Twain", "Ellen Degeneres", "Walt Disney", "Sandra Bullock"]
      }, {
        letters: "ESTP",
        pros: ["Flexible", "Tolerant", "Pragmatic", "Energetic", "Spontaneous"],
        cons: ["Very Competetive", "Weaknesses are Failures", "Easily Offends Others", "Arrogant", "Too Impulsive"],
        work: ["High Stress Levels Welcomed","Competition is Key","Social Intelligence","Throw Out the Rules","Immediate Results"],
        snippets: ["ESTPs enjoy drama, passion, and pleasure."],
        names: ["Ernest Hemingway", "Madonna", "Roy Rogers","Jack Nicholson", "Joan Cusack"]
      }, {
        letters: "ESFP",
        pros: ["Outgoing", "Friendly", "Accepting", "Exuberant Lovers of Life", "Flexible"],
        cons: ["Can be Difficult to Follow their Logic", "Not Very Loyal", "Will Talk Your Ears Off", "May Leave Unexpectedly"],
        work: ["Work Directly with People", "Good in High Stress Positions","Freedom", "Novelty", "A Tad Chaotic"],
        snippets: ["ESFPs love people, excitement, telling stories and having fun."],
        names: ["Mary Lou Retton","Arsenio Hall","Bob Hope", "Eva Gabor","Kyle Petty"]
      }, {
        letters: "ENTP",
        pros: ["Verbal Gymnasts", "Ingenious", "Stimulating", "Alert", "Outspoken"],
        cons: ["Overextend Themselves", "Easily Affected by Small Setbacks","Impatient","Show Offs","Arrogant"],
        work: ["Straightforward Communication","Big Challenges", "No Detail Work", "Prestige Positions", "Work with Similar Types"],
        snippets: ["ENTPs may sometimes give the impression of being largely oblivious to the rest of humanity except as an audience"],
        names: ["John Candy","Julia Child","Lewis Carrol","Thomas Edison", "John Adams"]
      }, {
        letters: "ESTJ",
        pros: ["Practical", "Realistic", "Matter-of-Fact", "Decisive", "Detail-Oriented"],
        cons: ["Judgmental of Those Outside the Norm","Narrow-minded", "Can Get Stuck in the Past", "Vocal Disapproval","Inflexible"],
        work: ["Can Organize Large Groups", "Work Well with Similar Types", "Rules Are Respected","Service-Oriented","Well-Established"],
        snippets: ["ESTJ humor is frequently centered around something or someone being off center or behaving abnormally."],
        names: ["George W. Bush", "Bette Davis", "Rev. Billy Graham", "Pat Summit", "Barbara Stanwyck"]
      }, {
        letters: "ESFJ",
        pros: ["Warmhearted", "Conscientious", "Cooperative", "Work Well with Others", "Dependable"],
        cons: ["Easily Wounded","Conflicted", "No Gray Areas", "Paranoid", "Easily Angered"],
        work: ["Clear Hierarchy", "Make Good Supervisors", "Low Conflict", "Oraganized", "Human Interaction"],
        snippets: ["Other Types Coming Soon"],
        names: ["Sally Field","Nancy Kerrigan", "Danny Glover","Mary Tyler Moore", "Don Knotts"]
      }, {
        letters: "ENFJ",
        pros: ["Warm", "Empathetic", "Responsive", "Responsible", "See Potential in Everyone"],
        cons: ["Can be Manipulative","Often Abused by Less Sensitive People", "Intimate Friendships are Rare", "Too Sacrificial", ],
        work: ["Simultaneous Projects", "Startup Culture", "Fewer Coworkers", "Clear Separation of Duties", "Open Communication"],
        snippets: ["ENFJs often take on more of the burdens of others than they can bear."],
        names: ["Oprah Winfrey", "Dick Van Dyke","Ronald Reagan", "Diane Sawyer", "Lauren Graham"]
      }, {
        letters: "ENTJ",
        pros: ["Frank", "Decisive", "Assume Leadership", "Problem Solvers", "Well-Informed"],
        cons: ["Argumentative","Bossy", "Insensitive", "Intolerant", "Stubborn"],
        work: ["Structure and Order", "High Standards", "Opportunities for Advancement", "New Challenges Available"],
        snippets: ["The underlying thought running through the ENTJ mind might be something like 'I don't care if you call me an insensitive bastard, as long as I remain an efficient bastard"],
        names: ["Newt Gingrich", "Steve Martin", "Steve Jobs", "Sigourney Weaver", "Whoopi Goldberg"]
      } ];
      self.chosenType = ko.observable();
      self.chosenStrengths = ko.observable();
      self.chosenWeaknesses = ko.observable();
      self.chosenWork = ko.observable();
      self.chosenFamous = ko.observable();
      self.chosenQuote = ko.observable();
      var headerAway = false;



      // Behaviors

      self.removeHeader = function() {
        $('#header').remove();
        headerAway = true;
        $('#theChosenType').prependTo('#topTypes').addClass('fixed');
        $('#theTypes').prependTo('#topTypes').addClass('fixed1');

      };
      self.chooseType = function() {
        if (headerAway === false) {
          self.removeHeader();
        }
        $('.info').removeClass("hidden");
        $('#theChosenType').removeClass('hidden');
        $('')
        self.chosenType(this.letters);
        self.chosenStrengths(this.pros);
        self.chosenWeaknesses(this.cons);
        self.chosenWork(this.work);
        self.chosenFamous(this.names);
        self.chosenQuote(this.snippets);
      }

    };


    ko.applyBindings(new ViewModel());
