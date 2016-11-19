$(function() {
    var model = {
        'jobs': [{
            'employer': 'Warner Bros. Studios Tour Hollywood',
            'title': 'Clerk/Floater (Tour Guide)',
            'location': 'Burbank, CA',
            'dates': 'June 2015 - Present',
            'description': 'Guided guests around the 110-acre lot while highlighting facts from the 90+ year history of the studio and promoting current and past projects',
            'url': 'http://www.wbstudiotour.com/',
            'key': 'tourguide'
        }, {
            'employer': 'CouponPal',
            'title': 'Content Specialist',
            'location': 'Santa Monica, CA',
            'dates': 'September 2014 - January 2015',
            'description': 'Wrote FAQ and How-to articles for store pages, Wrote blogs featuring and promoting retailers',
            'url': 'http://couponpal.com/blog',
            'key': 'blogger'
        }, {
            'employer': 'Pasadena Humane Society',
            'title': 'Developement Assistant',
            'location': 'Pasadena, CA',
            'dates': 'September 2013 - June 2014',
            'description': 'Edited development publications, managed office supplies, maintained database of donor information',
            'url': 'http://www.pasadenahumane.org',
            'key': 'dev'
        }, {
            'employer': 'Grassroots Campaigns',
            'title': 'Field Manager',
            'location': 'Pasadena, CA',
            'dates': 'August 2013 - October 2013',
            'description': 'Solicited donataions on behalf of the Southern Poverty Law Center, Oversaw a team of canvassers',
            'url': 'http://grassrootscampaigns.com',
            'key': 'grass'
        }, {
            'employer': 'Kaplan Stahler Agency',
            'title': 'Intern',
            'location': 'Beverly Hills, CA',
            'dates': 'August 2012 - December 2012',
            'description': 'Provided coverage on scripts, Researched potential clients, Maintained databases',
            'url': 'http://kaplanstahler.com/',
            'key': 'intern'
        }, {
            'employer': 'Abilene Christian University',
            'title': 'Graduate Assistant',
            'location': 'Abilene, TX',
            'dates': 'August 2010 - May 2012',
            'description': 'Taught Freshman-level English courses, Assisted professors with research, Tutored students in University Writing Center, Instructor for University English Language Learners Program',
            'url': 'http://www.acu.edu/',
            'key': 'prof'
        }],
        getAllJobs: function() {
            return model.jobs;
        },
        'schools': [{
            'name': 'Abilene Christian University',
            'degree': 'Master of Arts',
            'majors': ['English - Composition and Rhetoric'],
            'location': 'Abilene, Texas',
            'dates': '2010 - 2012',
            'url': 'http://www.acu.edu'
        }, {
            'name': 'Abilene Christian University',
            'degree': 'Bachelor of Arts',
            'majors': ['English - Language and Literature'],
            'location': ['Abilene, TX', ' Oxford, United Kingdom'],
            'dates': '2006 - 2010',
            'url': 'http://www.acu.edu'
        }, {
            'name': 'Udacity',
            'degree': 'Nanodegree',
            'majors': 'Front-End Development',
            'location': 'Pasadena, CA',
            'dates': 'February 2015 - May 2015',
            'url': 'http://www.udacity.com'
        }],
        'onlineCourses': [{
            'url': 'https://www.udacity.com/nanodegree',
            'title': 'Intro to HTML and CSS',
            'school': 'Udacity.com',
            'dates': 'January 2015'
        }, {
            'url': 'https://www.udacity.com/nanodegree',
            'title': 'Javascript Basics',
            'school': 'Udacity.com',
            'dates': 'February 2015'
        }, {
            'url': 'https://www.udacity.com/nanodegree',
            'title': 'Intro to jQuery',
            'school': 'Udacity.com',
            'dates': 'February 2015'
        }, {
            'url': 'https://www.udacity.com/nanodegree',
            'title': 'Object-Oriented JS',
            'school': 'Udacity.com',
            'dates': 'March 2015'
        }, {
            'url': 'https://www.udacity.com/nanodegree',
            'title': 'Responsive Web Design',
            'school': 'Udacity.com',
            'dates': 'March 2015'
        }, {
            'url': 'https://www.udacity.com/nanodegree',
            'title': 'HTML5 Canvas',
            'school': 'Udacity.com',
            'dates': 'March 2015'
        }, {
            'url': 'https://www.udacity.com/nanodegree',
            'title': 'How to Use Git and GitHub',
            'school': 'Udacity.com',
            'dates': 'March 2015'
        }],
        getAllSchools: function() {
            return model.schools;
        },
        getAllOnline: function() {
            return model.onlineCourses;
        },
        'projects': [{
            'title': 'This Bugs Me!',
            'image': 'images/froggorProj.JPG',
            'dates': 'March 2015',
            'description': 'Game similar to Froggor built with Javascript in which you guide children across a path to the water and avoid bugs.',
            'url': 'pages/froggor.html'
        }, {
            'title': 'The Myers-Briggs Types',
            'image': 'images/blogs.JPG',
            'dates': 'April 2015',
            'description': 'Under Construction: Get to know the 16 personality types.',
            'url': 'myers_briggs/index.html'
        }, {
            'title': 'Make Your Own Meme App',
            'image': 'images/memeProj.JPG',
            'dates': 'March 2015',
            'description': 'Upload your own photo and add a meme message to it. Save it to your local files and share it with friends.',
            'url': 'mememaker/MemeMaker.html'
        }],
        getAllProjects: function() {
            return model.projects;
        },
        'writingProjects': [{
            'title': 'Full Writing Portfolio',
            'image': 'images/writing.jpg',
            'dates': '2010 - 2015',
            'description': 'Writing Samples: All types of writing compiled into one document for your consideration.',
            'url': 'images/Brent_C_Dill_Writing_Portfolio.pdf'
        }, {
            'title': 'Keyword Researched Blogs',
            'image': 'images/blogs.JPG',
            'dates': '2014 - 2015',
            'description': 'Blog posts to promote online retailers. Researched with Moz and Google Adwords.',
            'url': 'http://couponpal.com/blog/author/brent-dill'
        }, {
            'title': 'Commercials',
            'image': 'images/commercials.JPG',
            'dates': '2014 - 2015',
            'description': 'Series of three commercials featuring a very likable copy machine named Mark',
            'url': 'images/Commercials.pdf'
        }, {
            'title': 'Short Story Excerpt',
            'image': 'images/story.jpg',
            'dates': '2015',
            'description': 'The opening to a short story which is to be published later in 2015. Click to Download.',
            'url': 'images/What_happened_with_Jacob_sample.pdf'
        }],
        getAllWriting: function() {
            return model.writingProjects;
        },
        'contacts': [{
            'email': ' bdill12@gmail.com',
            'mobile': '(806)470-3013',
            'twitter': ' @bdill12',
            'location': ' Los Angeles, CA',
            'github': ' bdill12'
        }],
        getAllContact: function() {
            return model.contacts;
        }
    };

    var octopus = {
        /*init: function() {
            ViewModel.exp_render();
            ViewModel.edu_render();
            ViewModel.online_render();
            ViewModel.writing_render();
            ViewModel.project_render();
            ViewModel.bio_render();
        },*/
        getInfo: function(info) {
            if (info == 'jobs') {
                return model.getAllJobs();
            } else if (info == 'schools') {
                return model.getAllSchools();
            } else if (info == 'project') {
                return model.getAllProjects();
            } else if (info == 'writing') {
                return model.getAllWriting();
            } else if (info == 'online') {
                return model.getAllOnline();
            } else if (info == 'bio') {
                return model.getAllContact();
            } else {
                console.log('Error.');
            }
        }
    };

    var ViewModel = function() {
        var self = this;

        self.jobs = ko.observableArray(model[0].jobs);


        self.title = ko.observable();
        self.employer = ko.observable();
        self.location = ko.observable();
        self.dates = ko.observable();
        self.description = ko.observable();
        self.url = ko.observable();
        self.email = ko.observable();
        self.github = ko.observable();
        self.mobile = ko.observable();
        self.twitter = ko.observable();
        self.image = ko.observable();
        self.school = ko.observable();
        self.majors = ko.observable();
        self.degree = ko.observable();

        self.showJob = ko.observable(false);

        self.exp_render = function(e, x) {
            console.log(e);
            console.log(x);
            octopus.getInfo('jobs');
            self.showJob(true);
            self.title();

        };
        self.edu_render = function() {

        };
        self.online_render = function() {

        };
        self.writing_render = function() {

        };
        self.project_render = function() {

        };
        self.bio_render = function() {

        };
        console.log(self.jobs);
    };

    ko.applyBindings(new ViewModel());

});

