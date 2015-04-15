// Experience 
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a rel="nofollow" target="_blank" href="%data2%">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div>%data%</div>';
var HTMLworkLocation = '<div>%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

// Use jQuery to populate the DOM in sliders
var work = {
	'jobs' :  [
		{
			'employer': 'CouponPal',
			'title': 'Content Specialist',
			'location': 'Santa Monica, CA',
			'dates': 'September 2014 - January 2015',
			'description': 'Wrote FAQ and How-to articles for store pages, Wrote blogs featuring and promoting retailers',
			'url': 'http://couponpal.com/blog'
		},
		{
			'employer': 'Pasadena Humane Society',
			'title': 'Developement Assistant',
			'location': 'Pasadena, CA',
			'dates': 'September 2013 - June 2014',
			'description': 'Edited development publications, managed office supplies, maintained database of donor information',
			'url': 'http://www.pasadenahumane.org'
		},
		{
			'employer': 'Grassroots Campaigns',
			'title': 'Field Manager',
			'location': 'Pasadena, CA',
			'dates': 'August 2013 - October 2013',
			'description': 'Solicited donataions on behalf of the Southern Poverty Law Center, Oversaw a team of canvassers',
			'url': 'http://grassrootscampaigns.com'
		},
		{
			'employer': 'Kaplan Stahler Agency',
			'title': 'Intern',
			'location': 'Beverly Hills, CA',
			'dates': 'August 2012 - December 2012',
			'description': 'Provided coverage on scripts, Researched potential clients, Maintained databases',
			'url': 'http://kaplanstahler.com/'
		},
		{
			'employer': 'Abilene Christian University',
			'title': 'Graduate Assistant',
			'location': 'Abilene, TX',
			'dates': 'August 2010 - May 2012',
			'description': 'Taught Freshman-level English courses, Assisted professors with research, Tutored students in University Writing Center, Instructor for University English Language Learners Program',
			'url': 'http://www.acu.edu/'
		}
		],
		'display' : function() {
			for (var job in this.jobs) {
				$('#workExperience').append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				var formattedEmployerTitleLink = formattedEmployerTitle.replace('%data2%', this.jobs[job].url);
				var formattedDates = HTMLworkDates.replace('%data%', this.jobs[job].dates);
				var formattedDescription = HTMLworkDescription.replace('%data%', this.jobs[job].description);
				var formattedLocation = HTMLworkLocation.replace('%data%', this.jobs[job].location);
				$('.work-entry:last').append(formattedEmployerTitleLink);
				$('.work-entry:last').append(formattedDates);
				$('.work-entry:last').append(formattedLocation);
				$('.work-entry:last').append(formattedDescription);
			}
		}
	};


work.display();

// Education
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a target="_blank" href="%data2%">%data%</a>';
var HTMLschoolDegree = '<h3>%data%</h3>';
var HTMLschoolDates = '<div>%data%</div>';
var HTMLschoolLocation = '<div>%data%</div>';
var HTMLschoolMajor = '<h4>Major: %data%</h4>';
// Online Education
var HTMLonlineEduStart = '<div class="online-entry"></div>';
var HTMLonlineTitle = '<a target="_blank" href="%data2%">%data%</a>';
var HTMLonlineSchool = '<div>%data%';
var HTMLonlineDates = '%data%</div>';
// Manipulate the DOM
var education = {
		'schools' : [
		{
			'name': 'Abilene Christian University',
			'degree': 'Master of Arts',
			'majors': ['English - Composition and Rhetoric'],
			'location': 'Abilene, Texas',
			'dates': '2010 - 2012',
			'url': 'http://www.acu.edu'
		},
		{
			'name': 'Abilene Christian University',
			'degree': 'Bachelor of Arts',
			'majors': ['English - Language and Literature'],
			'location': ['Abilene, TX', ' Oxford, United Kingdom'],
			'dates': '2006 - 2010',
			'url': 'http://www.acu.edu'
		},
		{
			'name': 'The Groundlings School',
			'degree': 'Yes, And...',
			'majors': 'Waiting for Others to Speak',
			'location': 'Hollywood, California',
			'dates': '2013 - 2014',
			'url': 'http://www.groundlings.com/'
		},
		{
			'name': 'Udacity',
			'degree': 'Nanodegree',
			'majors': 'Front-End Development',
			'location': 'Pasadena, CA',
			'dates': 'February 2015 - Present',
			'url' : 'http://www.udacity.com'
		}
		],
		'onlineCourses': [
		{
			'url': 'https://www.udacity.com/nanodegree',
			'title': 'Intro to HTML and CSS',
			'school': 'Udacity.com',
			'dates': 'January 2015'
		},
		{
			'url': 'https://www.udacity.com/nanodegree',
			'title': 'Javascript Basics',
			'school': 'Udacity.com',
			'dates': 'February 2015'
		},
		{
			'url': 'https://www.udacity.com/nanodegree',
			'title': 'Intro to jQuery',
			'school': 'Udacity.com',
			'dates': 'February 2015'
		},
		{
			'url': 'https://www.udacity.com/nanodegree',
			'title': 'Object-Oriented JS',
			'school': 'Udacity.com',
			'dates': 'March 2015'
		},
		{
			'url': 'https://www.udacity.com/nanodegree',
			'title': 'Responsive Web Design',
			'school': 'Udacity.com',
			'dates': 'March 2015'
		},
		{
			'url': 'https://www.udacity.com/nanodegree',
			'title': 'HTML5 Canvas',
			'school': 'Udacity.com',
			'dates': 'March 2015'
		},
		{
			'url': 'https://www.udacity.com/nanodegree',
			'title': 'How to Use Git and GitHub',
			'school': 'Udacity.com',
			'dates': 'March 2015'
		}
		],
	'display' : function() {
		for (var school in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace('%data%', this.schools[school].name);
			var formattedNameLink = formattedName.replace('%data2%', this.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
			var formattedMajors = HTMLschoolMajor.replace('%data%', this.schools[school].majors);
			var formattedDates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace('%data%', this.schools[school].location);
			$('.education-entry:last').append(formattedNameLink);
			$('.education-entry:last').append(formattedDegree);
			$('.education-entry:last').append(formattedMajors);
			$('.education-entry:last').append(formattedLocation);
			$('.education-entry:last').append(formattedDates);
		}
			for (var course in this.onlineCourses) {
				$('#online').append(HTMLonlineEduStart);
				var formattedTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[course].title);
				var formattedSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[course].school);
				var formattedTitleLink = formattedTitle.replace('%data2%', this.onlineCourses[course].url);
				var formattedDate = HTMLonlineDates.replace('%data%', this.onlineCourses[course].dates);
				$('.online-entry:last').append(formattedTitleLink);
				$('.online-entry:last').append(formattedSchool);
				$('.online-entry:last').append(formattedDate);
				}
			}
		};

education.display();

// Projects
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a target="_blank" href="%data2%">%data%</a>';
var HTMLprojectDates = '<div>%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img class="project-image" src="%data%">';

var projects = { 
	'projects' : [
	{
		'title': 'This Bugs Me!',
		'image': 'images/froggorProj.JPG',
		'dates': 'March 2015',
		'description': 'Game similar to Froggor built with Javascript in which you guide children across a path to the water and avoid bugs.',
		'url': 'pages/froggor.html'
	},
	{
		'title': 'Make Your Own Meme App',
		'image': 'images/memeProj.JPG',
		'dates': 'March 2015',
		'description': 'Upload your own photo and add a meme message to it. Save it to your local files and share it with friends.',
		'url': 'mememaker/MemeMaker.html'
	}],
	'display' : function (){
		for (var project in this.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedProjName = HTMLprojectTitle.replace('%data%', this.projects[project].title);
			var formattedProjTitle = formattedProjName.replace('%data2%', this.projects[project].url);
			var formattedProjDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
			var formattedProjDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);
			var formattedProjImage = HTMLprojectImage.replace('%data%', this.projects[project].image);
			$('.project-entry:last').append(formattedProjImage);
			$('.project-entry:last').append(formattedProjTitle);
			$('.project-entry:last').append(formattedProjDates);
			$('.project-entry:last').append(formattedProjDescription);}
	}
};

projects.display();

var HTMLwritingStart = '<div class="writing-entry"></div>';
var HTMLwritingTitle = '<a target="_blank" href="%data2%">%data%</a>';
var HTMLwritingDates = '<div>%data%</div>';
var HTMLwritingDescription = '<p>%data%</p>';
var HTMLwritingImage = '<img class="project-image" src="%data%">';


var writingProjects = {
	'projects' : [
	{
		'title': 'Full Writing Portfolio',
		'image': 'images/writing.jpg',
		'dates': '2010 - 2015',
		'description': 'Writing Samples: All types of writing compiled into one document for your consideration.',
		'url': 'images/Brent_C_Dill_Writing_Portfolio.pdf'
	},
	{
		'title': 'Keyword Researched Blogs',
		'image': 'images/blogs.JPG',
		'dates': '2014 - 2015',
		'description': 'Blog posts to promote online retailers. Researched with Moz and Google Adwords.',
		'url': 'http://couponpal.com/blog/author/brent-dill'
	},
	{
		'title': 'Commercials',
		'image': 'images/commercials.JPG',
		'dates': '2014 - 2015',
		'description': 'Series of three commercials featuring a very likable copy machine named Mark',
		'url': 'images/Commercials.pdf'
	},
	{
		'title': 'Short Story Excerpt',
		'image': 'images/story.jpg',
		'dates': '2015',
		'description': 'The opening to a short story which is to be published later in 2015. Click to Download.',
		'url': 'images/What_happened_with_Jacob_snippet.pdf'
	}
	],
	'display' : function (){
		for (var work in this.projects) {
			$('#writingProjects').append(HTMLwritingStart);
			var formattedProjName = HTMLwritingTitle.replace('%data%', this.projects[work].title);
			var formattedProjTitle = formattedProjName.replace('%data2%', this.projects[work].url);
			var formattedProjDates = HTMLwritingDates.replace('%data%', this.projects[work].dates);
			var formattedProjDescription = HTMLwritingDescription.replace('%data%', this.projects[work].description);
			var formattedProjImage = HTMLwritingImage.replace('%data%', this.projects[work].image);
			$('.writing-entry:last').append(formattedProjImage);
			$('.writing-entry:last').append(formattedProjTitle);
			$('.writing-entry:last').append(formattedProjDates);
			$('.writing-entry:last').append(formattedProjDescription);}
	}
};

writingProjects.display();