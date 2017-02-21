// DOM is loaded.
$(function() {

    // ==============================Model=============================//
    // The model contains all the data with which the site will be populated
    // and getAll functions to return the data to the Octopus.

    var model = {
        'jobs': [{
            'employer': 'Warner Bros. Studios Tour Hollywood',
            'title': 'Tour Guide (Seasonal)',
            'location': 'Burbank, CA',
            'dates': 'June 2015 - September 2015',
            'description': 'Guided guests around the 110-acre lot while highlighting facts from the 90+ year history of the studio and promoting current and past projects',
            'url': 'http://www.wbstudiotour.com/'
        }, {
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
            'dates': '2010-2012',
            'url': 'http://www.acu.edu'
        }, {
            'name': 'Abilene Christian University',
            'degree': 'Bachelor of Arts',
            'majors': ['English - Language and Literature'],
            'location': ['Abilene, TX', ' Oxford, United Kingdom'],
            'dates': '2006-2010',
            'url': 'http://www.acu.edu'
        }, {
            'name': 'Udacity',
            'degree': 'Nanodegree',
            'majors': 'Front-End Development',
            'location': 'Pasadena, CA',
            'dates': 'February-May 2015',
            'url': 'http://www.udacity.com'
        }],
        getAllSchools: function() {
            return model.schools;
        },
        'projects': [{
            'title': 'This Bugs Me!',
            'image': 'img/project_photos/froggorProj.JPG',
            'dates': 'March 2015',
            'description': 'Game similar to Froggor built with Javascript in which you guide children across a path to the water and avoid bugs.',
            'url': 'pages/froggor.html'
        }, {
            'title': 'The Myers-Briggs Types',
            'image': 'img/project_photos/blogs.JPG',
            'dates': 'April 2015',
            'description': 'Under Construction: Get to know the 16 personality types.',
            'url': 'myers_briggs/index.html'
        }, {
            'title': 'Make Your Own Meme App',
            'image': 'img/project_photos/memeProj.JPG',
            'dates': 'March 2015',
            'description': 'Upload your own photo and add a meme message to it. Save it to your local files and share it with friends.',
            'url': 'mememaker/MemeMaker.html'
        }],
        getAllProjects: function() {
            return model.projects;
        },
        'writingProjects': [{
            'title': 'Full Writing Portfolio',
            'image': 'img/project_photos/writing.jpg',
            'type': 'writing',
            'description': 'Writing Samples: All types of writing compiled into one document for your consideration.',
            'url': 'img/Brent_C_Dill_Writing_Portfolio.pdf'
        }, {
            'title': 'Product Blogs',
            'image': 'img/project_photos/blogs.JPG',
            'type': 'writing',
            'description': 'Blog posts to promote online retailers. Researched with Moz and Google Adwords.',
            'url': 'http://couponpal.com/blog/author/brent-dill'
        }, {
            'title': 'Commercials',
            'image': 'img/project_photos/commercials.JPG',
            'type': 'writing',
            'description': 'Series of three commercials featuring a very likable copy machine named Mark',
            'url': 'img/Commercials.pdf'
        }, {
            'title': 'Short Story Excerpt',
            'image': 'img/project_photos/story.jpg',
            'type': 'writing',
            'description': 'The opening to a short story which is to be published later in 2015. Click to Download.',
            'url': 'img/What_happened_with_Jacob_sample.pdf'
        }],
        getAllWriting: function() {
            return model.writingProjects;
        }
    };

    var octopus = {
        init: function() {
            view.exp_render();
            view.edu_render();
            view.writing_render();
            view.project_render();
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
        exp_render: function() {
            var htmlstr = '';
            octopus.getInfo('jobs').forEach(function(job) {
                htmlstr += '<div class="work-entry w3-container"><h4><a rel="nofollow" target="_blank" href="' +
                    job.url + '">' + job.employer + '</a></h4><div>' + job.title + '<span class="pull-right">' + job.dates +
                    '</span></div><p>' + job.description + '</p></div>';
            });
            $('#workExperience').append(htmlstr);
        },
        edu_render: function() {
            var htmlstr = '';
            octopus.getInfo('schools').forEach(function(school) {
                htmlstr += '<div class="school-entry" w3-container><h3><a target="_blank" href="' +
                    school.url + '">' + school.name + '</a></h3><h4>' + school.degree +
                    '</h4><h5>' + school.majors + ' - (' + school.dates + ')</h5><div>' + school.location +
                    '</div></div>';
            });
            $('#education').append(htmlstr);
        },
        writing_render: function() {
            var htmlstr = '';
            var smhtmlstr = '';

            octopus.getInfo('writing').forEach(function(project) {
                htmlstr += '<div class="writing-entry w3-col m5 s2 w3-margin"><div class="w3-card-4 w3-center"><header class="w3-container green"><h4>'+project.title+'</h4></header><div class="w3-container w3-center w3-section"><img src="'+project.image+'" class="img-responsive" alt="writing samples"></div><div class="w3-container footer green"></div></div></div>';
                //htmlArray.push(htmlstr);
            });
            $('#grid').append(htmlstr);
        },
        project_render: function() {
            var htmlstr = '';
            octopus.getInfo('project').forEach(function(project) {
                htmlstr += '<div class="w3-col m5 s2 w3-margin"><div class="w3-card-4 w3-center"><header class="w3-container blue"><h4>'+project.title+'</h4></header><div class="w3-container w3-center w3-section"><img src="'+project.image+'" class="img-responsive" alt="writing samples"></div><div class="w3-container footer blue"></div></div></div>';

                //htmlstr += '<div class="dev-entry"><img class="project-image" src="' + project.image + '"><a target="_blank" href="' + project.url + '">' + project.title + '</a><div>' +
              //      project.dates + '</div><p>' + project.description +
              //      '</p></div></div';
            });
            $('#projects').append(htmlstr);
        }
    };
    // Initialize the page by running octopus.init.
    octopus.init();
});
