// This jQuery call is a way of telling the browser to run the script
// when the DOM is done loading.
$(function() {

    // ==============================Model=============================//
    // The model contains all the data with which the site will be populated
    // and getAll functions to return the data to the Octopus.

    var model = {
        'jobs': [{
            'employer': 'Warner Bros. Studios Tour Hollywood',
            'title': 'Clerk/Floater (Tour Guide)',
            'location': 'Burbank, CA',
            'dates': 'June 2015 - Present',
            'description': 'Guided guests around the 110-acre lot while highlighting facts from the 90+ year history of the studio and promoting current and past projects',
            'url': 'http://www.wbstudiotour.com/'
        },
        {
            'employer': 'CouponPal',
            'title': 'Content Specialist',
            'location': 'Santa Monica, CA',
            'dates': 'September 2014 - January 2015',
            'description': 'Wrote FAQ and How-to articles for store pages, Wrote blogs featuring and promoting retailers',
            'url': 'http://couponpal.com/blog'
        }, {
            'employer': 'Pasadena Humane Society',
            'title': 'Developement Assistant',
            'location': 'Pasadena, CA',
            'dates': 'September 2013 - June 2014',
            'description': 'Edited development publications, managed office supplies, maintained database of donor information',
            'url': 'http://www.pasadenahumane.org'
        }, {
            'employer': 'Grassroots Campaigns',
            'title': 'Field Manager',
            'location': 'Pasadena, CA',
            'dates': 'August 2013 - October 2013',
            'description': 'Solicited donataions on behalf of the Southern Poverty Law Center, Oversaw a team of canvassers',
            'url': 'http://grassrootscampaigns.com'
        }, {
            'employer': 'Kaplan Stahler Agency',
            'title': 'Intern',
            'location': 'Beverly Hills, CA',
            'dates': 'August 2012 - December 2012',
            'description': 'Provided coverage on scripts, Researched potential clients, Maintained databases',
            'url': 'http://kaplanstahler.com/'
        }, {
            'employer': 'Abilene Christian University',
            'title': 'Graduate Assistant',
            'location': 'Abilene, TX',
            'dates': 'August 2010 - May 2012',
            'description': 'Taught Freshman-level English courses, Assisted professors with research, Tutored students in University Writing Center, Instructor for University English Language Learners Program',
            'url': 'http://www.acu.edu/'
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
        init: function() {
            view.exp_render();
            view.edu_render();
            view.online_render();
            view.writing_render();
            view.project_render();
            view.bio_render();
        },
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

    //=============================View==============================//
    //The view contains render functions for each data section. Each
    //function declares a string variable, asks the Octopus to getInfo(),
    //and fills the string variable with the necessary HTML for each
    //element added to the page.

    var view = {
        bio_render: function() {

            // Declare a string variable.
            var htmlstr = '';
            // Receive data from octopus and creates html for each item.
            octopus.getInfo('bio').forEach(function(contact) {
                htmlstr += '<div class="col-md-3">' + contact.mobile +
                    '</div><div class="col-md-3"><a class="darken" href="mailto:bdill12@gmail.com">' + contact.email +
                    '</a></div><div class="col-md-3"><a class="darken" href="http://twitter.com/bdill12">' + contact.twitter +
                    '</a></div><div class="col-md-3">' + contact.location + '</div>';
            });
            // Append the html string to the element.
            $('#contactInfo').append(htmlstr);
        },
        exp_render: function() {
            var htmlstr = '';
            octopus.getInfo('jobs').forEach(function(job) {
                htmlstr += '<div class="work-entry"><a rel="nofollow" target="_blank" href="' +
                    job.url + '">' + job.employer + ' - ' + job.title +
                    '</a><div>' + job.dates + '</div><div>' + job.location +
                    '</div><p>' + job.description + '</p></div>';
            });
            $('#workExperience').append(htmlstr);
        },
        edu_render: function() {
            var htmlstr = '';
            octopus.getInfo('schools').forEach(function(school) {
                htmlstr += '<div class="education-entry"><a target="_blank" href="' +
                    school.url + '">' + school.name + '</a><h3>' + school.degree +
                    '</h3><div>' + school.dates + '</div><div>' + school.location +
                    '</div><h4>Major: ' + school.majors + '</h4></div>';
            });
            $('#education').append(htmlstr);
        },
        online_render: function() {
            var htmlstr = '';
            octopus.getInfo('online').forEach(function(school) {
                htmlstr += '<div class="online-entry"><a target="_blank" href="' +
                    school.url + '">' + school.title + '</a><div>' + school.school + ' - ' +
                    school.dates + '</div>';
            });
            $('#online').append(htmlstr);
        },
        writing_render: function() {
            var htmlstr = '';
            octopus.getInfo('writing').forEach(function(project) {
                htmlstr += '<div class="writing-entry"><img class="project-image" src="' + project.image + '"><a target="_blank" href="' + project.url + '">' + project.title + '</a><div>' +
                    project.dates + '</div><p>' + project.description +
                    '</p></div>';
            });
            $('#writingProjects').append(htmlstr);
        },
        project_render: function() {
            var htmlstr = '';
            octopus.getInfo('project').forEach(function(project) {
                htmlstr += '<div class="project-entry"><img class="project-image" src="' + project.image + '"><a target="_blank" href="' + project.url + '">' + project.title + '</a><div>' +
                    project.dates + '</div><p>' + project.description +
                    '</p></div>';
            });
            $('#projects').append(htmlstr);
        }
    };
    // Initialize the page by running octopus.init.
    octopus.init();
});