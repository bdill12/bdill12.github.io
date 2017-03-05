"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var schools = [{
                id: 1,
                name: 'Abilene Christian University',
                degree: 'Master of Arts',
                majors: 'English - Composition and Rhetoric',
                gpa: 'GPA : 4.0',
                tag: 'acu',
                location: 'Abilene, Texas',
                dates: '2010-2012',
                url: 'http://www.acu.edu',
                certificates: [{ name: 'English Graduate Student of the Year, 2010-2011', url: '#' },
                    { name: 'William E. Tanner Award for Best Paper by a Graduate Student, Conference of College Teachers of English, 2011', url: '#' }]
            }, {
                id: 2,
                name: 'Abilene Christian University',
                degree: 'Bachelor of Arts',
                majors: 'English - Language and Literature',
                gpa: 'GPA : 3.6, cum laude',
                tag: 'acu',
                location: 'Abilene, TX',
                dates: '2006-2010',
                url: 'http://www.acu.edu',
                certificates: [{ name: 'First Prize for Fiction, 2009 Conference on Christianity and Literature', url: '#' },
                    { name: 'Studied abroad in Oxford, United Kiingdom', url: '#' }]
            }, {
                id: 3,
                name: 'Udacity',
                degree: 'Nanodegree',
                majors: 'Front-End Development',
                gpa: ' - ',
                tag: 'udacity',
                location: 'Online',
                dates: 'February-May 2015',
                url: 'http://www.udacity.com',
                certificates: [{ url: 'img/reviews/udacityCertificate.pdf', name: 'See Front-End Developer Nanodegree Certificate' },
                    { url: 'img/reviews/certificate.pdf', name: 'See Javascript Certificate' }]
            }];
        var jobs = [
            {
                id: 1,
                tag: 'wb',
                employer: 'Warner Bros. Studios Tour Hollywood',
                title: 'Tour Guide',
                location: 'Burbank, CA',
                dates: 'June 2015 - September 2015',
                description: ['Delivered unique, unscripted 2-hour tours of the backlot for up to 15 guests',
                    'Displayed expert knowledge of the 110-acre studio lot, film and television history, and every aspect of production',
                    'Tailored each tour to the taste preferences of the guests while promoting the studio\'s current and past projects'],
                url: 'http://www.wbstudiotour.com/',
            }, {
                id: 2,
                tag: 'cp',
                employer: 'CouponPal',
                title: 'Content Specialist',
                location: 'Santa Monica, CA',
                dates: 'September 2014 - January 2015',
                description: ['Determined target keywords for articles, store pages, and blogs using Google Adwords',
                    'Researched, wrote, and edited blogs to feature and promote retailers',
                    'Managed deal and coupon content for over 60 online retailers, including Macy\'s, GAP, 1-800-Flowers, Best Buy, and Target',
                    'Wrote FAQ and How-to articles for store pages'],
                url: 'http://couponpal.com/blog'
            }, {
                id: 3,
                tag: 'phs',
                employer: 'Pasadena Humane Society',
                title: 'Development Assistant',
                location: 'Pasadena, CA',
                dates: 'September 2013 - June 2014',
                description: ['Served as primary point of contact for all non-major gift donations',
                    'Created new gift coding system to keep track of how each donation was solicited',
                    'Managed office supplies, maintained database of donor information',
                    'Wrote and edited development publications, donor letters, and tax acknowledgements',
                    'Built relationships with major donors, board members, and local businesses',
                    'Solicited in-kind donations for annual silent auction'],
                url: 'http://www.pasadenahumane.org'
            }, {
                id: 4,
                tag: 'gc',
                employer: 'Grassroots Campaigns',
                title: 'Field Manager',
                location: 'Pasadena, CA',
                dates: 'August 2013 - October 2013',
                description: ['Oversaw a team of 4 to 6 canvassers',
                    'Determined locations and permissions for each team member while at the canvassing site',
                    'Solicited donataions on behalf of the Southern Poverty Law Center using a three-ask structure',
                    'Conducted daily training exercises and team building activities'],
                url: 'http://grassrootscampaigns.com'
            }, {
                id: 5,
                tag: 'ksa',
                employer: 'Kaplan Stahler Agency',
                title: 'Intern',
                location: 'Beverly Hills, CA',
                dates: 'August 2012 - December 2012',
                description: ['Provided notes on story, characters, themes, and effectiveness of scripts from potential clients',
                    'Researched strengthspective talent',
                    'Updated information for industry contacts'],
                url: 'http://kaplanstahler.com/'
            }, {
                id: 6,
                tag: 'acu',
                employer: 'Abilene Christian University',
                title: 'Graduate Assistant',
                location: 'Abilene, TX',
                dates: 'August 2010 - May 2012',
                description: ['Served as teacher of record for Freshman-level English and English Language Learning courses',
                    'Assisted professors with research',
                    'Tutored students one-on-one in the University Writing Center'],
                url: 'http://www.acu.edu/'
            }];
        var samples = [
            {
                id: 1,
                title: '"What Happened with Jacob"',
                location: 'Dammit, I Love You',
                type: 'Non-fiction short story published in an anthology',
                image: 'img/project_photos/dammit.PNG',
                description: 'Love can hurt. We all know that. Whether the love has been a parent, a child, a lover, a friend, we\'ve all walked into a situation with stars in our eyes and left with a black eye instead. The 15 courageous people in this book share those stories. They remind us of what it feels like to hurt, but they also remind us of the strength those scars can foster. Being torn apart can be the one thing that makes us whole.',
                url: 'https://goo.gl/vlpUmY'
            }, {
                id: 2,
                title: 'Product Blogs',
                type: 'Keyword-researched blogs featuring CouponPal clients',
                image: 'img/project_photos/blogs.png',
                description: 'These blog posts promoted various online retailers. Each was researched for SEO optimization using Moz and Google Adwords.',
                url: 'http://couponpal.com/blog/author/brent-dill'
            }, {
                id: 3,
                title: 'TV Commercials',
                image: 'img/logos/owen.png',
                type: 'Spec scripts for ad campaign pitch',
                description: 'Series of three commercials featuring a very likable copy machine named Mark',
                url: 'samples/Commercials.pdf'
            }, {
                id: 4,
                title: 'Where\'s Eleven?',
                type: 'Fiction short story on Kindle Direct',
                image: 'img/project_photos/eleven.PNG',
                description: 'Where\'s Eleven is the short story of how a troubled man, Reese, spends an evening looking for enemies in every person he encounters. You\'ll find enemies if you look for them, he learns, but the same isn\'t always true of your pet hamster. This dark comedy explores the relationship between addiction and mental illness and the weaknessesequences of hiding the truth.',
                url: 'https://goo.gl/fkPd0m'
            }, {
                id: 5,
                title: 'It All Started Three Hours from Now',
                type: 'Humor / travel essay',
                image: 'img/project_photos/time.png',
                description: 'It All Started Three Hours from Now is the somewhat embarassing tale of my flight from Sydney, Australia, to Los Angeles, California. A lack of sleep, an abundance of awkward, and most of <i>Marley and Me</i> helped confuse me as we landed in Los Angeles three hours before our flight took off from Sydney.',
                url: ''
            }, {
                id: 6,
                title: 'Kenzie-Frog\'s Tender Toes',
                type: 'Children\'s book, written and illustrated (available on iTunes)',
                image: 'img/project_photos/kenzie.png',
                description: 'Kenzie-Frog wants to hop higher, but her feet hurt and she needs some shoes. Luckily, her Nana comes to the rescue to help her try on pair after pair to find the ones that will help Kenzie-Frog\'s tender toes.',
                url: 'https://itunes.apple.com/us/book/kenzie-frogs-tender-toes/id932275276?mt=11'
            }, {
                id: 7,
                title: 'Community Theater',
                type: 'Award-winning story story',
                image: 'img/project_photos/theater.png',
                description: 'Elaine doesn\'t know how to act. . . on stage or off. After being lightly chastised by the amateur director of the community theater production she has joined, Elaine starts to examine how the people around her act. Her loneliness leads her to liquor, her couch, and Audrey Hepburn. Named first prize for fiction at the 2009 Conference on Christianity and Literature',
                url: ''
            }];
        var projects = [{
                id: 1,
                title: 'Kenzie-Frog\'s Scattered Shoes',
                image: 'img/project_photos/shoes.png',
                type: 'Online Game made with HTML5 and Javascript',
                description: 'Kenzie-Frog\'s shoes are scattered all over the swamp. Guide her across the water to put away her collection of footwear. Avoid the bugs!',
                url: '/html5game/index.html',
            }, {
                id: 2,
                title: 'The Myers-Briggs Types',
                image: 'img/project_photos/myers.png',
                type: 'Angular 2',
                description: 'Get to know the 16 personality types.',
                url: '/types',
            }];
        var types = [{
                id: 1,
                name: "ISTJ",
                strengths: ["Quiet", "Serious", "Dependable", "Practical", "Matter-of-fact"],
                weaknesses: ["Take things too seriously at times", "Judgemental", "Very little abstract thinking", "Uncomfortable expressing emotions", "Hard on themselves"],
                work: ["Things done by the book", "Highly organized", "Clear expectations", "Teamwork should be rare", "Social justice"],
                snippet: ["ISTJs keep their feet on the ground and make clear, rational decisions.",],
                famous: ["Natalie Portman", "Herber Hoover", "Hermione Granger", "George Washington", "George H.W. Bush"],
                hell: ["You are eternally damned to working for a morally corrupt company that aims to exploit the weak and generally degrade conditions for all of society."]
            }, {
                id: 2,
                name: "ISFJ",
                strengths: ["Supportive", "Friendly", "Responsible", "Conscientious", "Committed"],
                weaknesses: ["Shy", "Too sensitive", "Repress emotions", "Resist change", "Will work themselves to death"],
                work: ["Not highly competive", "Lots of encouragement", "Service-oriented", "No conflict among co-workers", "Personal relationships important"],
                snippet: ["ISFJs need to be needed."],
                famous: ["Queen Elizabeht II", "Robert E. Lee", "Dr. Watson", "Sam from Lord of the Rings", "Halle Berry"],
                hell: ["Everyone you love is yelling at each other and it’s all your fault."]
            }, {
                id: 3,
                name: "INFJ",
                strengths: ["Seek meaning in everythiing", "Insightful", "Persuasive", "Organized", "Decisive"],
                weaknesses: ["Sensitive", "Closed books to all but a few", "Must always be fighting something", "Tire out easily"],
                work: ["Meaningful", "Creative", "Lots of independence", "Focus on communication", "Focus on individuals"],
                snippet: ["When INFJs come to believe that something is important, they pursue that goal with a conviction and energy that can catch even their friends and loved ones off guard."],
                famous: ["Nicole Kidman", "Martin Luther King", "Jimmy Carter", "Nelson Mandela", "Mel Gibson"],
                hell: ["You are eternally damned to working for a morally corrupt company that aims to exploit the weak and generally degrade conditions for all of society."]
            }, {
                id: 4,
                name: "INTJ",
                strengths: ["Original and open-minded", "Great drive", "See patterns in external events", "High confidence", "Independent"],
                weaknesses: ["Arrogant", "Judgmental", "Stuck in their heads", "Don't deal well with structure", "Hopeless in love"],
                work: ["Prefer to work alone", "High standards", "Meritocracy", "Loosely defined roles", "Lots of challenges"],
                snippet: ["A paradox to most observers, INTJs are able to live by glaring contradictions that nonetheless make perfect sense."],
                famous: ["Vladimir Putin", "Thomas Jefferson", "John F. Kennedy", "Hannibal", "Gandalf the Grey"],
                hell: ["Every time you open your mouth to say something intelligent, something entirely idiotic comes out instead. (Putin is living this. . . )"]
            }, {
                id: 5,
                name: "ISTP",
                strengths: ["Tolerant", "Great in a crisis", "Relaxed", "Spontaneous, but rational", "Creative, but practical"],
                weaknesses: ["Stubborn", "Private and reserved", "Insensitive", "Risky behavior", "Easily bored"],
                work: ["Need to know how things work", "Hands-on experiences", "Independence", "Practical solutions", "Concrete results"],
                snippet: ["Rather than some sort of vision quest, ISTPs are merely exploring the viability of a new interest when they make seismic shifts."],
                famous: ["Clint Eastwood", "Tom Cruise", "Indiana Jones", "Jack Bauer", "Angus MacGuyver"],
                hell: ["The Zombie apocalypse happens but you’re suddenly the world’s weakest fighter and must depend solely on your loved ones to keep you alive."]
            }, {
                id: 6,
                name: "ISFP",
                strengths: ["Charming", "Great imaginations", "Sensitive", "Curious", "Passion"],
                weaknesses: ["Independent to a fault", "High anxiety", "Very competitive", "Love themselves, hate themselves", "Unpredictable"],
                work: ["Unpredictability", "Short term commitments", "Dynamic, always changing environments", "Freelancing and weaknessesulting", "Room to improve things"],
                snippet: ["ISFPs always know just the compliment to soften a heart that's getting ready to call their risks irresponsible or reckless."],
                famous: ["Bob Dylan", "Marie Antoinette", "Millard Filmore", "John Travolta", "Donald Trump"],
                hell: ["You have to listen to rude people criticizing your personal choices, your appearance and your art form all day long. Nobody cares that they’re hurting your feelings."]
            }, { id: 7,
                name: "INFP",
                strengths: ["True Idealists", "Motivated by Pure Intentions", "Curious", "Maximize the Potential of Others", "Deep Communicators"],
                weaknesses: ["Shy", "Neglect Day-to-Day Activities", "Impractical", "Everything is Personal", "Very Private"],
                work: ["Keep the Data far Away", "High Level of Independence", "Face-to-Face Interactions", "More than Just a Job", "Down with Bureaucracy"],
                snippet: ["Few personality types are as poetic and kind-hearted as INFPs."],
                famous: ["William Shakespeare", "Julia Roberts", "Homer", "Lisa Kudrow", "J.R.R. Tolkien"],
                hell: ["Your deepest thoughts and feelings are exposed to a large audience and everyone thinks that you’re pathetic and unoriginal."]
            }, { id: 8,
                name: "INTP",
                strengths: ["Theoretical", "Vigorous Intellect", "Unique Perspective", "Flexible", "Incredible Focus"],
                weaknesses: ["Extremely Private", "Absent-minded", "Can't Stand Rules", "Condescending", "Insensitive"],
                work: ["They'll Do the Math", "Self-Motivating", "Perfectionism is the Standard", "Analysts", "People Skills Not a Priority"],
                snippet: ["INTPs are the most logically precise of all the personality types."],
                famous: ["Albert Einstein", "Carl Jung", "Gerald Ford", "Isaac Newton", "Rene Descartes"],
                hell: ["You are eternally condemned to researching an extremely vapid topic using wildly inaccurate methods, mostly involving interviewing people who have no idea what they’re talking about."]
            }, { id: 9,
                name: "ENFP",
                strengths: ["Spontaneous", "Comfortable in Unfamiliar Situations", "Energetic", "Pay Attention to Everything", "Brilliantly perceptive"],
                weaknesses: ["Attention Seekers", "Irrational", "Rule Breakers", "Prone to Flights of Fantasy", "Can Make Serious Mistakes in Judgment"],
                work: ["Variety", "Full of Challenges", "Free from Tight Supervision", "Many Activities", "Creativity and Originality are Highly Valued"],
                snippet: ["When people fall in love, they resemble garden-variety ENFPs because ENFPs normally behave like people in love."],
                famous: ["Dr. Suess", "Mark Twain", "Ellen Degeneres", "Walt Disney", "Sandra Bullock"],
                hell: ["Every minute of the rest of your life has been scheduled for you – and it’s a long series of arbitrary, solitary tasks."]
            }, { id: 10,
                name: "ESTP",
                strengths: ["Flexible", "Tolerant", "Pragmatic", "Energetic", "Spontaneous"],
                weaknesses: ["Very Competetive", "Weaknesses are Failures", "Easily Offends Others", "Arrogant", "Too Impulsive"],
                work: ["High Stress Levels Welcomed", "Competition is Key", "Social Intelligence", "Throw Out the Rules", "Immediate Results"],
                snippet: ["ESTPs enjoy drama, passion, and pleasure."],
                famous: ["Ernest Hemingway", "Madonna", "Roy Rogers", "Jack Nicholson", "Joan Cusack"],
                hell: ["You are completely paralyzed, lacking even the ability to speak."]
            }, { id: 11,
                name: "ESFP",
                strengths: ["Outgoing", "Friendly", "Accepting", "Exuberant Lovers of Life", "Flexible"],
                weaknesses: ["Can be Difficult to Follow their Logic", "Not Very Loyal", "Will Talk Your Ears Off", "May Leave Unexpectedly"],
                work: ["Work Directly with People", "Good in High Stress Positions", "Freedom", "Novelty", "A Tad Chaotic"],
                snippet: ["ESFPs love people, excitement, telling stories and having fun."],
                famous: ["Mary Lou Retton", "Arsenio Hall", "Bob Hope", "Eva Gabor", "Kyle Petty"],
                hell: ["You are stuck in a room by yourself for the rest of eternity."]
            }, { id: 12,
                name: "ENTP",
                strengths: ["Verbal Gymnasts", "Ingenious", "Stimulating", "Alert", "Outspoken"],
                weaknesses: ["Overextend Themselves", "Easily Affected by Small Setbacks", "Impatient", "Show Offs", "Arrogant"],
                work: ["Straightforward Communication", "Big Challenges", "No Detail Work", "Prestige Positions", "Work with Similar Types"],
                snippet: ["ENTPs may sometimes give the impression of being largely oblivious to the rest of humanity except as an audience"],
                famous: ["John Candy", "Julia Child", "Lewis Carrol", "Thomas Edison", "John Adams"],
                hell: ["Freedom of speech is revoked from the weaknessestitution. Voicing your opinion in any way is now illegal."]
            }, { id: 13,
                name: "ESTJ",
                strengths: ["Practical", "Realistic", "Matter-of-Fact", "Decisive", "Detail-Oriented"],
                weaknesses: ["Judgmental of Those Outside the Norm", "Narrow-minded", "Can Get Stuck in the Past", "Vocal Disapproval", "Inflexible"],
                work: ["Can Organize Large Groups", "Work Well with Similar Types", "Rules Are Respected", "Service-Oriented", "Well-Established"],
                snippet: ["ESTJ humor is frequently centered around something or someone being off center or behaving abnormally."],
                famous: ["George W. Bush", "Bette Davis", "Rev. Billy Graham", "Pat Summit", "Barbara Stanwyck"],
                hell: [" An incredibly impractical person is put in charge of all of your major life decisions. You have to do whatever they say and are powerless to argue or reason with them."]
            }, { id: 14,
                name: "ESFJ",
                strengths: ["Warmhearted", "Conscientious", "Cooperative", "Work Well with Others", "Dependable"],
                weaknesses: ["Easily Wounded", "Conflicted", "No Gray Areas", "Paranoid", "Easily Angered"],
                work: ["Clear Hierarchy", "Make Good Supervisors", "Low Conflict", "Oraganized", "Human Interaction"],
                snippet: ["If you want to hurt an ESFJ, just be indifferent."],
                famous: ["Sally Field", "Nancy Kerrigan", "Danny Glover", "Mary Tyler Moore", "Don Knotts"],
                hell: ["Someone you love is in dire need of practical help and you can’t give it to them. Worse yet, they think you’re refusing to help them out of pettiness and they’re mad at you."]
            }, { id: 15,
                name: "ENFJ",
                strengths: ["Warm", "Empathetic", "Responsive", "Responsible", "See Potential in Everyone"],
                weaknesses: ["Can be Manipulative", "Often Abused by Less Sensitive People", "Intimate Friendships are Rare", "Too Sacrificial",],
                work: ["Simultaneous Projects", "Startup Culture", "Fewer Coworkers", "Clear Separation of Duties", "Open Communication"],
                snippet: ["ENFJs often take on more of the burdens of others than they can bear."],
                famous: ["Oprah Winfrey", "Dick Van Dyke", "Ronald Reagan", "Diane Sawyer", "Lauren Graham"],
                hell: ["Your loved ones are in dire need of guidance but every piece of advice you gives them inadvertently makes things worse for them."]
            }, { id: 16,
                name: "ENTJ",
                strengths: ["Frank", "Decisive", "Assume Leadership", "Problem Solvers", "Well-Informed"],
                weaknesses: ["Argumentative", "Bossy", "Insensitive", "Intolerant", "Stubborn"],
                work: ["Structure and Order", "High Standards", "Opportunities for Advancement", "New Challenges Available"],
                snippet: ["The underlying thought running through the ENTJ mind might be something like 'I don't care if you call me an insensitive bastard, as long as I remain an efficient bastard"],
                famous: ["Newt Gingrich", "Steve Martin", "Steve Jobs", "Sigourney Weaver", "Whoopi Goldberg"],
                hell: ["Somebody is wrong, and they’re directing a large group of people! You can’t do anything about it and will have to obey whatever inefficient policies they decide to implement. (Wow. ENTJ's must be in hell 90% of the time.)"]
            }];
        return { samples: samples, jobs: jobs, schools: schools, projects: projects, types: types };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=in-memory-data.service.js.map