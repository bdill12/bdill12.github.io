import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let types = [{
        letters: "ISTJ",
        pros: ["Quiet", "Serious", "Dependable", "Practical", "Matter-of-fact"],
        cons: ["Take things too seriously at times", "Judgemental", "Very little abstract thinking", "Uncomfortable expressing emotions", "Hard on themselves"],
        work: ["Things done by the book", "Highly organized", "Clear expectations", "Teamwork should be rare", "Social justice"],
        snippets: ["ISTJs keep their feet on the ground and make clear, rational decisions.", ],
        names: ["Natalie Portman", "Herber Hoover", "Hermione Granger", "George Washington", "George H.W. Bush"],
        hell: ["You are eternally damned to working for a morally corrupt company that aims to exploit the weak and generally degrade conditions for all of society."]
      }, {
        letters: "ISFJ",
        pros: ["Supportive", "Friendly", "Responsible", "Conscientious", "Committed"],
        cons: ["Shy", "Too sensitive", "Repress emotions", "Resist change", "Will work themselves to death"],
        work: ["Not highly competive", "Lots of encouragement", "Service-oriented", "No conflict among co-workers", "Personal relationships important"],
        snippets: ["ISFJs need to be needed."],
        names: ["Queen Elizabeht II", "Robert E. Lee", "Dr. Watson", "Sam from Lord of the Rings", "Halle Berry"],
        hell: ["Everyone you love is yelling at each other and it’s all your fault."]
      }, {
        letters: "INFJ",
        pros: ["Seek meaning in everythiing", "Insightful", "Persuasive", "Organized", "Decisive"],
        cons: ["Sensitive", "Closed books to all but a few", "Must always be fighting something", "Tire out easily"],
        work: ["Meaningful", "Creative", "Lots of independence", "Focus on communication", "Focus on individuals"],
        snippets: ["When INFJs come to believe that something is important, they pursue that goal with a conviction and energy that can catch even their friends and loved ones off guard."],
        names: ["Nicole Kidman", "Martin Luther King", "Jimmy Carter", "Nelson Mandela", "Mel Gibson"],
        hell: ["You are eternally damned to working for a morally corrupt company that aims to exploit the weak and generally degrade conditions for all of society."]
      }, {
        letters: "INTJ",
        pros: ["Original and open-minded", "Great drive", "See patterns in external events", "High confidence", "Independent"],
        cons: ["Arrogant", "Judgmental", "Stuck in their heads", "Don't deal well with structure", "Hopeless in love"],
        work: ["Prefer to work alone", "High standards", "Meritocracy", "Loosely defined roles", "Lots of challenges"],
        snippets: ["A paradox to most observers, INTJs are able to live by glaring contradictions that nonetheless make perfect sense."],
        names: ["Vladimir Putin", "Thomas Jefferson", "John F. Kennedy", "Hannibal", "Gandalf the Grey"],
        hell: ["Every time you open your mouth to say something intelligent, something entirely idiotic comes out instead. (Putin is living this. . . )"]
      }, {
        letters: "ISTP",
        pros: ["Tolerant", "Great in a crisis", "Relaxed", "Spontaneous, but rational", "Creative, but practical"],
        cons: ["Stubborn", "Private and reserved", "Insensitive", "Risky behavior", "Easily bored"],
        work: ["Need to know how things work", "Hands-on experiences", "Independence", "Practical solutions", "Concrete results"],
        snippets: ["Rather than some sort of vision quest, ISTPs are merely exploring the viability of a new interest when they make seismic shifts."],
        names: ["Clint Eastwood", "Tom Cruise", "Indiana Jones", "Jack Bauer", "Angus MacGuyver"],
        hell: ["The Zombie apocalypse happens but you’re suddenly the world’s weakest fighter and must depend solely on your loved ones to keep you alive."]
      }, {
        letters: "ISFP",
        pros: ["Charming", "Great imaginations", "Sensitive", "Curious", "Passion"],
        cons: ["Independent to a fault", "High anxiety", "Very competitive", "Love themselves, hate themselves", "Unpredictable"],
        work: ["Unpredictability", "Short term commitments", "Dynamic, always changing environments", "Freelancing and consulting", "Room to improve things"],
        snippets: ["ISFPs always know just the compliment to soften a heart that's getting ready to call their risks irresponsible or reckless."],
        names: ["Bob Dylan", "Marie Antoinette", "Millard Filmore", "John Travolta", "Donald Trump"],
        hell: ["You have to listen to rude people criticizing your personal choices, your appearance and your art form all day long. Nobody cares that they’re hurting your feelings."]
      }, {
        letters: "INFP",
        pros: ["True Idealists", "Motivated by Pure Intentions", "Curious", "Maximize the Potential of Others", "Deep Communicators"],
        cons: ["Shy", "Neglect Day-to-Day Activities", "Impractical", "Everything is Personal", "Very Private"],
        work: ["Keep the Data far Away", "High Level of Independence", "Face-to-Face Interactions", "More than Just a Job", "Down with Bureaucracy"],
        snippets: ["Few personality types are as poetic and kind-hearted as INFPs."],
        names: ["William Shakespeare", "Julia Roberts", "Homer", "Lisa Kudrow", "J.R.R. Tolkien"],
        hell: ["Your deepest thoughts and feelings are exposed to a large audience and everyone thinks that you’re pathetic and unoriginal."]
      }, {
        letters: "INTP",
        pros: ["Theoretical", "Vigorous Intellect", "Unique Perspective", "Flexible", "Incredible Focus"],
        cons: ["Extremely Private", "Absent-minded", "Can't Stand Rules", "Condescending", "Insensitive"],
        work: ["They'll Do the Math", "Self-Motivating", "Perfectionism is the Standard", "Analysts", "People Skills Not a Priority"],
        snippets: ["INTPs are the most logically precise of all the personality types."],
        names: ["Albert Einstein", "Carl Jung", "Gerald Ford", "Isaac Newton", "Rene Descartes"],
        hell: ["You are eternally condemned to researching an extremely vapid topic using wildly inaccurate methods, mostly involving interviewing people who have no idea what they’re talking about."]
      }, {
        letters: "ENFP",
        pros: ["Spontaneous", "Comfortable in Unfamiliar Situations", "Energetic", "Pay Attention to Everything", "Brilliantly perceptive"],
        cons: ["Attention Seekers", "Irrational", "Rule Breakers", "Prone to Flights of Fantasy", "Can Make Serious Mistakes in Judgment"],
        work: ["Variety", "Full of Challenges", "Free from Tight Supervision", "Many Activities", "Creativity and Originality are Highly Valued"],
        snippets: ["When people fall in love, they resemble garden-variety ENFPs because ENFPs normally behave like people in love."],
        names: ["Dr. Suess", "Mark Twain", "Ellen Degeneres", "Walt Disney", "Sandra Bullock"],
        hell: ["Every minute of the rest of your life has been scheduled for you – and it’s a long series of arbitrary, solitary tasks."]
      }, {
        letters: "ESTP",
        pros: ["Flexible", "Tolerant", "Pragmatic", "Energetic", "Spontaneous"],
        cons: ["Very Competetive", "Weaknesses are Failures", "Easily Offends Others", "Arrogant", "Too Impulsive"],
        work: ["High Stress Levels Welcomed","Competition is Key","Social Intelligence","Throw Out the Rules","Immediate Results"],
        snippets: ["ESTPs enjoy drama, passion, and pleasure."],
        names: ["Ernest Hemingway", "Madonna", "Roy Rogers","Jack Nicholson", "Joan Cusack"],
        hell: ["You are completely paralyzed, lacking even the ability to speak."]
      }, {
        letters: "ESFP",
        pros: ["Outgoing", "Friendly", "Accepting", "Exuberant Lovers of Life", "Flexible"],
        cons: ["Can be Difficult to Follow their Logic", "Not Very Loyal", "Will Talk Your Ears Off", "May Leave Unexpectedly"],
        work: ["Work Directly with People", "Good in High Stress Positions","Freedom", "Novelty", "A Tad Chaotic"],
        snippets: ["ESFPs love people, excitement, telling stories and having fun."],
        names: ["Mary Lou Retton","Arsenio Hall","Bob Hope", "Eva Gabor","Kyle Petty"],
        hell: ["You are stuck in a room by yourself for the rest of eternity."]
      }, {
        letters: "ENTP",
        pros: ["Verbal Gymnasts", "Ingenious", "Stimulating", "Alert", "Outspoken"],
        cons: ["Overextend Themselves", "Easily Affected by Small Setbacks","Impatient","Show Offs","Arrogant"],
        work: ["Straightforward Communication","Big Challenges", "No Detail Work", "Prestige Positions", "Work with Similar Types"],
        snippets: ["ENTPs may sometimes give the impression of being largely oblivious to the rest of humanity except as an audience"],
        names: ["John Candy","Julia Child","Lewis Carrol","Thomas Edison", "John Adams"],
        hell: ["Freedom of speech is revoked from the constitution. Voicing your opinion in any way is now illegal."]
      }, {
        letters: "ESTJ",
        pros: ["Practical", "Realistic", "Matter-of-Fact", "Decisive", "Detail-Oriented"],
        cons: ["Judgmental of Those Outside the Norm","Narrow-minded", "Can Get Stuck in the Past", "Vocal Disapproval","Inflexible"],
        work: ["Can Organize Large Groups", "Work Well with Similar Types", "Rules Are Respected","Service-Oriented","Well-Established"],
        snippets: ["ESTJ humor is frequently centered around something or someone being off center or behaving abnormally."],
        names: ["George W. Bush", "Bette Davis", "Rev. Billy Graham", "Pat Summit", "Barbara Stanwyck"],
        hell: [" An incredibly impractical person is put in charge of all of your major life decisions. You have to do whatever they say and are powerless to argue or reason with them."]
      }, {
        letters: "ESFJ",
        pros: ["Warmhearted", "Conscientious", "Cooperative", "Work Well with Others", "Dependable"],
        cons: ["Easily Wounded","Conflicted", "No Gray Areas", "Paranoid", "Easily Angered"],
        work: ["Clear Hierarchy", "Make Good Supervisors", "Low Conflict", "Oraganized", "Human Interaction"],
        snippets: ["If you want to hurt an ESFJ, just be indifferent."],
        names: ["Sally Field","Nancy Kerrigan", "Danny Glover","Mary Tyler Moore", "Don Knotts"],
        hell: ["Someone you love is in dire need of practical help and you can’t give it to them. Worse yet, they think you’re refusing to help them out of pettiness and they’re mad at you."]
      }, {
        letters: "ENFJ",
        pros: ["Warm", "Empathetic", "Responsive", "Responsible", "See Potential in Everyone"],
        cons: ["Can be Manipulative","Often Abused by Less Sensitive People", "Intimate Friendships are Rare", "Too Sacrificial", ],
        work: ["Simultaneous Projects", "Startup Culture", "Fewer Coworkers", "Clear Separation of Duties", "Open Communication"],
        snippets: ["ENFJs often take on more of the burdens of others than they can bear."],
        names: ["Oprah Winfrey", "Dick Van Dyke","Ronald Reagan", "Diane Sawyer", "Lauren Graham"],
        hell: ["Your loved ones are in dire need of guidance but every piece of advice you gives them inadvertently makes things worse for them."]
      }, {
        letters: "ENTJ",
        pros: ["Frank", "Decisive", "Assume Leadership", "Problem Solvers", "Well-Informed"],
        cons: ["Argumentative","Bossy", "Insensitive", "Intolerant", "Stubborn"],
        work: ["Structure and Order", "High Standards", "Opportunities for Advancement", "New Challenges Available"],
        snippets: ["The underlying thought running through the ENTJ mind might be something like 'I don't care if you call me an insensitive bastard, as long as I remain an efficient bastard"],
        names: ["Newt Gingrich", "Steve Martin", "Steve Jobs", "Sigourney Weaver", "Whoopi Goldberg"],
        hell: ["Somebody is wrong, and they’re directing a large group of people! You can’t do anything about it and will have to obey whatever inefficient policies they decide to implement. (Wow. ENTJ's must be in hell 90% of the time.)"]
      } ];
    
    return types;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/