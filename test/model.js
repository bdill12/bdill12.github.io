var model = {
        'jobs': [{
            'tag': 'wb',
            'employer': 'Warner Bros. Studios Tour Hollywood',
            'title': 'Tour Guide (Seasonal)',
            'location': 'Burbank, CA',
            'dates': 'June 2015 - September 2015',
            'description': ['Delivered unique, unscripted 2-hour tours of the backlot for up to 15 guests', 'Displayed expert knowledge of the 110-acre studio lot, film and television history, and every aspect of production', 'Tailored each tour to the taste preferences of the guests while promoting the studio\'s current and past projects'],
            'url': 'http://www.wbstudiotour.com/',
            'image': 'img/logos/shortlogos/wblogo.png'
        }, {
            'tag': 'cp',
            'employer': 'CouponPal',
            'title': 'Content Specialist',
            'location': 'Santa Monica, CA',
            'dates': 'September 2014 - January 2015',
            'description': ['Determined target keywords for articles, store pages, and blogs using Google Adwords', 'Researched, wrote, and edited blogs to feature and promote retailers', 'Managed deal and coupon content for over 60 online retailers, including Macy\'s, GAP, 1-800-Flowers, Best Buy, and Target', 'Wrote FAQ and How-to articles for store pages'],
            'url': 'http://couponpal.com/blog'
        }, {
            'tag': 'phs',
            'employer': 'Pasadena Humane Society',
            'title': 'Development Assistant',
            'location': 'Pasadena, CA',
            'dates': 'September 2013 - June 2014',
            'description': ['Served as primary point of contact for all non-major gift donations', 'Created new gift coding system to keep track of how each donation was solicited', 'Managed office supplies, maintained database of donor information', 'Wrote and edited development publications, donor letters, and tax acknowledgements', 'Built relationships with major donors, board members, and local businesses', 'Solicited in-kind donations for annual silent auction'],
            'url': 'http://www.pasadenahumane.org'
        }, {
            'tag': 'gc',
            'employer': 'Grassroots Campaigns',
            'title': 'Field Manager',
            'location': 'Pasadena, CA',
            'dates': 'August 2013 - October 2013',
            'description': ['Oversaw a team of 4 to 6 canvassers', 'Determined locations and permissions for each team member while at the canvassing site', 'Solicited donataions on behalf of the Southern Poverty Law Center using a three-ask structure', 'Conducted daily training exercises and team building activities'],
            'url': 'http://grassrootscampaigns.com'
        }, {
            'tag': 'ksa',
            'employer': 'Kaplan Stahler Agency',
            'title': 'Intern',
            'location': 'Beverly Hills, CA',
            'dates': 'August 2012 - December 2012',
            'description': ['Provided notes on story, characters, themes, and effectiveness of scripts from potential clients', 'Researched prospective talent', 'Updated information for industry contacts'],
            'url': 'http://kaplanstahler.com/'
        }, {
            'tag': 'acu',
            'employer': 'Abilene Christian University',
            'title': 'Graduate Assistant',
            'location': 'Abilene, TX',
            'dates': 'August 2010 - May 2012',
            'description': ['Served as teacher of record for Freshman-level English and English Language Learning courses', 'Assisted professors with research', 'Tutored students one-on-one in the University Writing Center'],
            'url': 'http://www.acu.edu/'
        }],
        getAllJobs: function() {
            return model.jobs;
        },
        'schools': [{
            'name': 'Abilene Christian University',
            'degree': 'Master of Arts',
            'majors': ['English - Composition and Rhetoric'],
            'gpa': '<h5 class="w3-third">GPA : 4.0</h5>',
            'image': "acugrad",
            'tag': 'acugrad',
            'location': 'Abilene, Texas',
            'dates': '2010-2012',
            'url': 'http://www.acu.edu',
            'awards': ['English Graduate Student of the Year, 2010-2011 ', 'William E. Tanner Award for Best Paper by a Graduate Student, Conference of College Teachers of English, 2011']
        }, {
            'name': 'Abilene Christian University',
            'degree': 'Bachelor of Arts',
            'majors': ['English - Language and Literature'],
            "gpa": '<h5 class="w3-third">GPA : 3.6</h5>',
            'image': "acugrad",
            'tag': 'acuunder',
            'location': 'Abilene, TX',
            'dates': '2006-2010',
            'url': 'http://www.acu.edu',
            'awards': ['Graduated Cum Laude', 'First Prize for Fiction, 2009 Conference on Christianity and Literature', 'Sigma Tau Delta Honor Society', 'Studied abroad in Oxford, United Kiingdom']

        }, {
            'name': 'Udacity',
            'degree': 'Nanodegree',
            'majors': 'Front-End Development',
            'gpa': '<h5 class="w3-third"><i class="fa fa-graduation-cap fa-3x fa-border"></i></h5>',
            'image': 'nano',
            'tag': 'nano',
            'location': 'Online',
            'dates': 'February-May 2015',
            'url': 'http://www.udacity.com',
            'awards': ['Completed degree in under four months and recieved tuition reimbursement', '<li><a target="_none" href="img/reviews/udacityCertificate.pdf">See Nanodegree Document</a></li>', '<li><a target="_none" href="img/reviews/certificate.pdf">See Javascript Certificate</a></li>']
        }],
        getAllSchools: function() {
            return model.schools;
        },
        'projects': [{
            'title': 'The Collector',
            'image': 'img/project_photos/collector.png',
            'type': 'Online Game made with HTML5 and Javascript',
            'description': 'Be a ninja. Collect hearts, keys, stars, and gems. avoid bugs.',
            'url': 'html5game/index.html',
            'index': 1
        }, {
            'title': 'The Myers-Briggs Types',
            'image': 'img/project_photos/blogs.JPG',
            'type': 'Site',
            'description': 'Under Construction: Get to know the 16 personality types.',
            'url': 'myers_briggs/index.html',
            'index': 2
        }, {
            'title': 'Make Your Own Meme App',
            'image': 'img/project_photos/memeProj.JPG',
            'type': 'Site',
            'description': 'Upload your own photo and add a meme message to it. Save it to your local files and share it with friends.',
            'url': 'mememaker/MemeMaker.html',
            'index': 3
        }],
        getAllProjects: function() {
            return model.projects;
        },
        'writingProjects': [{
            'title': '"What Happened with Jacob"',
            'type': 'Non-fiction short story in <i>Dammit, I Love You</i>',
            'image': 'img/project_photos/dammit.PNG',
            'description': 'Love can hurt. We all know that. Whether the love has been a parent, a child, a lover, a friend, we\'ve all walked into a situation with stars in our eyes and left with a black eye instead. The 15 courageous people in this book share those stories. They remind us of what it feels like to hurt, but they also remind us of the strength those scars can foster. Being torn apart can be the one thing that makes us whole.',
            'url': 'https://goo.gl/vlpUmY',
            'index': 1,
        }, {
            'title': 'Product Blogs',
            'type': 'Keyword-researched blogs featuring CouponPal clients',
            'image': 'img/project_photos/blogs.PNG',
            'description': 'These blog posts promoted various online retailers. Each was researched for SEO optimization using Moz and Google Adwords.',
            'url': 'http://couponpal.com/blog/author/brent-dill',
            'index': 2,
        }, {
            'title': 'TV Commercials',
            'image': 'img/project_photos/wacky.PNG',
            'type': 'Spec scripts for ad campaign pitch',
            'description': 'Series of three commercials featuring a very likable copy machine named Mark',
            'url': 'samples/Commercials.pdf',
            'index': 3,
        }, {
            'title': 'Where\'s Eleven?',
            'type': 'Fiction short story on Kindle Direct',
            'image': 'img/project_photos/eleven.PNG',
            'description': 'Where\'s Eleven is the short story of how a troubled man, Reese, spends an evening looking for enemies in every person he encounters. You\'ll find enemies if you look for them, he learns, but the same isn\'t always true of your pet hamster. This dark comedy explores the relationship between addiction and mental illness and the consequences of hiding the truth.',
            'url': 'https://goo.gl/fkPd0m',
            'index': 4,
        }, {
            'title': 'It All Started Three Hours from Now<',
            'type': 'Humor / travel essay',
            'image': 'img/project_photos/sydney.PNG',
            'description': '<i>It All Started Three Hours from Now</i> is the somewhat embarassing tale of my flight from Sydney, Australia, to Los Angeles, California. A lack of sleep, an abundance of awkward, and most of <i>Marley and Me</i> helped confuse me as we landed in Los Angeles three hours before our flight took off from Sydney.',
            'url': '',
            'index': 5,
        }, {
            'title': 'Kenzie-Frog\'s Tender Toes',
            'type': 'Children\'s book, written and illustrated (available on iTunes)',
            'image': 'img/project_photos/kenziefrog2.PNG',
            'description': 'Kenzie-Frog wants to hop higher, but her feet hurt and she needs some shoes. Luckily, her Nana comes to the rescue to help her try on pair after pair to find the ones that will help Kenzie-Frog\'s tender toes.',
            'url': 'https://itunes.apple.com/us/book/kenzie-frogs-tender-toes/id932275276?mt=11',
            'index': 6,
        }, {
            'title': 'Community Theater',
            'type': 'Award-winning story story',
            'image': 'img/project_photos/elaine.svg',
            'description': 'Elaine doesn\'t know how to act. . . on stage or off. After being lightly chastised by the amateur director of the community theater production she has joined, Elaine starts to examine how the people around her act. Her loneliness leads her to liquor, her couch, and Audrey Hepburn. Named first prize for fiction at the 2009 Conference on Christianity and Literature',
            'url': '',
            'index': 7,
        }],
        getAllWriting: function() {
            return model.writingProjects;
        }
    };