$(function() {

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

    var octopus = {
        init: function() {
            var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };
            if (!isMobile.any()) {
                view.exp_render();
                view.edu_render();
                view.writing_render();
                view.project_render();
                view.showDivs(0);
                view.addEvents();
                view.scrolling_render();
            } else {
                view.exp_render();
                view.edu_render();
                view.writing_render();
                view.project_render();
                view.showDivs(0);
                view.addEvents();
            }

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

    var y = document.getElementsByClassName('writeSlide');
    var x = document.getElementsByClassName("writing");
    var d = document.getElementsByClassName('dev');
    var e = document.getElementsByClassName('devSlide');

    function displayWriting(n) {
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].className = y[i].className.replace(' w3-teal w3-text-white', ' w3-white w3-text-teal');
        }
        x[n].style.display = "block";
        y[n].className = y[n].className.replace(' w3-white w3-text-teal', ' w3-teal w3-text-white');
    }

    function displayDev(n) {
        for (var i = 0; i < d.length; i++) {
            d[i].style.display = "none";
            e[i].className = e[i].className.replace(' w3-green w3-text-white', ' w3-white w3-text-green');

        }
        d[n].style.display = "block";
        e[n].className = e[n].className.replace(' w3-white w3-text-green', ' w3-green w3-text-white');
    }




    //=============================View==============================//
    //The view contains render functions for each data section. Each
    //function declares a string variable, asks the Octopus to getInfo(),
    //and fills the string variable with the necessary HTML for each
    //element added to the page.

    var view = {
        exp_render: function() {
            var htmlstr = '';
            var modalstr = '';

            octopus.getInfo('jobs').forEach(function(job) {
                var closeAction = "document.getElementById('modal-" + job.tag + "').style.display='none'";
                var openAction = "document.getElementById('modal-" + job.tag + "').style.display='block'";
                htmlstr += '<div class="work-entry w3-container w3-row w3-panel w3-hover w3-hover-indigo w3-hover-text-indigo w3-border w3-border-indigo" onclick="' + openAction + '"><div class="w3-display-container w3-round-large"><div class="w3-text-white w3-display-hover w3-display-middle w3-xxlarge">Click for more info. . . </div><h5 class="w3-half">' + job.employer + '</h5><h6 class="w3-cell w3-cell-middle w3-half w3-large w3-right-align">' + job.title + '</h6><div class="w3-row"><div class="w3-cell w3-cell-middle w3-half">' + job.location + '</div><div class="w3-cell w3-cell-middle w3-right-align w3-half">' + job.dates + '</div></div></div></div>';
                modalstr += '<div id="modal-' + job.tag + '" class="w3-modal w-col s x3-round-large"><div class="w3-modal-content  w3-round-xlarge"><header class="w3-container w3-padding w3-indigo w3-round-xlarge"><div class="w3-right w3-closebtn" onclick="' + closeAction + '"><i class="material-icons">close</i></div><a href="' + job.url + '" rel="nofollow" class="w3-half"><img src="img/logos/' + job.tag + 'logo.png" class="w3-image jobImage w3-round-large" alt="' + job.employer + '"></a><h2 class="w3-half w3-right-align">' + job.title + '</h2></header><div class="w3-container w3-center"><h5 class="w3-half">' + job.dates + '</h5><h5 class="w3-half">' + job.location + '</h5><h6>Description and Accomplishments:</h6><ul class="w3-ul x3-hoverable-indigo w3-left-align">';
                for (var i = 0; i < job.description.length; i++) {
                    modalstr += '<li>' + job.description[i] + '</li>';
                }
                modalstr += '</ul></div><footer class="w3-container"></footer></div></div>';
            });
            $('#experience').prepend(htmlstr);
            $('#modalstore').append(modalstr);
        },
        edu_render: function() {
            var htmlstr = '';
            var modalstr = '';
            octopus.getInfo('schools').forEach(function(school) {
                var closeAction = "document.getElementById('modal-" + school.tag + "').style.display='none'";

                var openAction = "document.getElementById('modal-" + school.tag + "').style.display='block'";

                htmlstr += '<div class="school-entry"><div class="w3-container w3-row w3-panel w3-border w3-round-large" onclick="' + openAction + '"><h5 class="w3-cell w3-cell-middle w3-half">' + school.degree + '</h5><h6 class="w3-cell w3-cell-middle w3-half w3-large w3-right-align">' + school.name + '</h6><div class="w3-row"><div class="w3-cell w3-cell-middle w3-half">' + school.majors + '</div><div class="w3-cell w3-cell-middle w3-right-align w3-half">' + school.location + '</div></div></div></div>';
                modalstr += '<div id="modal-' + school.tag + '" class="w3-modal"><div class="w3-modal-content w3-round-xlarge"><header class="w3-container w3-padding purple  w3-round-xlarge"><div class="w3-right w3-closebtn" onclick="' + closeAction + '"><i class="material-icons">close</i></div><a href="' + school.url + '" rel="nofollow" class="w3-half"><img src="img/logos/' + school.image + '.png" class="w3-image schoolImage w3-round-large" alt="' + school.name + '"></a><h4 class="w3-half w3-right-align">' + school.degree + ' - ' + school.majors + '</h4></header><div class="w3-container w3-center"><h5 class="w3-third">' + school.dates + '</h5><h5 class="w3-third">' + school.location + '</h5>' + school.gpa + '<h6>Activities and Awards</h6><ul class="w3-container w3-ul">';
                for (var i = 0; i < school.awards.length; i++) {
                    modalstr += '<li>' + school.awards[i] + '</li>';
                }
            });
            $('#education').prepend(htmlstr);
            $('#modalstore').append(modalstr);
        },
        writing_render: function() {
            var htmlstr = '';
            var indicator = '';
            octopus.getInfo('writing').forEach(function(project) {
                htmlstr += '<div class="writing"><header class="w3-center"><h2>' + project.title + '</h2></header><a class="w3-display-middle" target="_none" href="' + project.url + '"><img src="' + project.image + '"class="w3-image"></a><footer class="w3-center">' + project.description + '</footer></div>';
                indicator += '<button class="w3-btn w3-round-large w3-margin w3-border w3-border-teal w3-hover-teal w3-cell writeSlide w3-white w3-text-teal" id="indicator' + project.index + '">' + project.index + '</button>';
            });
            $('#projects').prepend(htmlstr);
            $('#indicators').append(indicator);
        },
        project_render: function() {
            var htmlstr = '';
            var indicator = '';

            octopus.getInfo('project').forEach(function(project) {
                htmlstr += '<div class="dev w3-display-middle w3-center w3-margin-0 w3-mobile"><h2>' + project.title + '</h2><a target="_none" href="' + project.url + '"><img src="' + project.image + '" class="w3-image devImage"></a><footer class="w3-center">' + project.description + '</footer></div>';
                indicator += '<button class="w3-btn w3-round-large w3-margin w3-border w3-border-green w3-hover-green w3-cell devSlide w3-white w3-text-green" id="devIndicator' + project.index + '">' + project.index + '</button>';
            });
            $('#devProjects').prepend(htmlstr);
            $('#devIndicators').append(indicator);
        },
        showDivs: function(n) {
            displayWriting(n);
            displayDev(n);
        },
        addEvents: function() {
            $('#writeLeft').click(function() {
                writeIndex = writeIndex - 1;
                if (writeIndex < 0) { writeIndex = x.length - 1; }
                displayWriting(writeIndex);
            });

            $('#devLeft').click(function() {
                devIndex = devIndex - 1;
                if (devIndex < 0) { devIndex = d.length - 1; }
                displayDev(devIndex);
            });

            $('#writeRight').click(function() {
                writeIndex = writeIndex + 1;
                if (writeIndex == x.length) { writeIndex = 0; }
                displayWriting(writeIndex);
            });
            $('#devRight').click(function() {
                devIndex = devIndex + 1;
                if (devIndex == d.length) { devIndex = 0; }
                displayDev(devIndex);
            });

            $('.writeSlide').click(function(event) {
                console.log(event);
                writeIndex = event.target.innerHTML - 1;

                displayWriting(writeIndex);
            });

            $('.devSlide').click(function(event) {
                console.log(event);

                devIndex = event.target.innerHTML - 1;
                displayDev(devIndex);
            });

            $(window).click(function(event) {
                var modals = $(".w3-modal");
                for (var i = 0; i < modals.length; i++) {
                    if (event.target == modals[i]) {
                        modals[i].style.display = "none";
                    }
                }
            });
        },
        scrolling_render: function() {
            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: "onLeave"
                }
            });

            // get all slides
            var work = document.querySelectorAll('.work-entry');
            var schools = document.querySelectorAll('.school-entry');
            var slides = document.querySelectorAll('.section');
            var blockquotes = document.querySelectorAll("blockquote");
            var svgs = document.querySelectorAll("svg");
            var stagger = TweenMax.staggerFromTo(work, 0.5, { x: "100%" }, { x: "0%" }, 0.5);
            var stagger2 = TweenMax.staggerFromTo(schools, 0.75, { x: "100%" }, { x: "0%" }, 0.5);

            var staggers = [stagger2, stagger];

            for (var i = 0; i < slides.length; i++) {
                new ScrollMagic.Scene({
                        triggerElement: slides[i],
                        duration: 800
                    })
                    .setPin(slides[i])
                    .addTo(controller);
                if (i < staggers.length) {
                    new ScrollMagic.Scene({
                            triggerElement: blockquotes[i]
                        })
                        .setTween(staggers[i])
                        .addTo(controller);
                }

            }

        }

    };
    // Initialize the page by running octopus.init.
    octopus.init();
});
