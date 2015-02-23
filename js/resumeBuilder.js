var bio = {
	"name" : "Brent Dill",
	"role" : "Writer, Front End Developer",
	"welcomeMessage" : "I'm a creative looking for a place to create.",
	"contacts" : {
		"email" : "bdill12@gmail.com",
		"mobile" : "(806) 470-3013",
		"github" : "bdill12",
		"twitter" : "@bdill12",
		"location" : "Los Angeles, CA"
	},
	"url" : "images/profpic100100.jpg",
	"skills" : [" Creative Writing", " Social Media", " HTML", " CSS", " Proofreading", " Editing", "SEO Copywriting", "Public Speaking", "Keyword Research", "Storytelling" ],
	"display" : function() {
		var formattedName = HTMLheaderName.replace( "%data%", this.name );
		var formattedRole = HTMLheaderRole.replace( "%data%", this.role );
		var formattedMobile = HTMLmobile.replace( "%data%", this.contacts.mobile );
		var formattedEmail = HTMLemail.replace( "%data%", this.contacts.email );
		var formattedGithub = HTMLgithub.replace( "%data%", this.contacts.github );
		var formattedTwitter = HTMLtwitter.replace( "%data%", this.contacts.twitter );
		var formattedLocation = HTMLlocation.replace( "%data%", this.contacts.location );
		var formattedWelcomeMessage = HTMLWelcomeMsg.replace( "%data%", this.welcomeMessage );
		var formattedBiopic = HTMLbioPic.replace( "%data%", this.url );
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		$("#header").append(formattedWelcomeMessage);
		$("#header").append(formattedBiopic);
		if (this.skills.length > 0) {
				$("#header").append(HTMLskillsStart);
				for (var skill in this.skills) {
					var formattedSkills = HTMLskills.replace("%data%", this.skills[skill]);
					$("#skills").append(formattedSkills);
			}
		}
	}
};
bio.display();

var work = {
	"jobs" :  [
		{
			"employer": "CouponPal",
			"title": "Content Specialist",
			"location": "Santa Monica, CA",
			"dates": "September 2014 - January 2015",
			"description": "Wrote FAQ and How-to articles for store pages, Wrote blogs featuring and promoting retailers"
		},
		{
			"employer": "Pasadena Humane Society",
			"title": "Developement Assistant",
			"location": "Pasadena, CA",
			"dates": "September 2013 - June 2014",
			"description": "Edited development publications, managed office supplies, maintained database of donor information"
		},
		{
			"employer": "Grassroots Campaigns",
			"title": "Field Manager",
			"location": "Pasadena, CA",
			"dates": "August 2013 - October 2013",
			"description": "Solicited donataions on behalf of the Southern Poverty Law Center, Oversaw a team of canvassers"
		},
		{
			"employer": "Kaplan Stahler Agency",
			"title": "Intern",
			"location": "Beverly Hills, CA",
			"dates": "August 2012 - December 2012",
			"description": "Provided coverage on scripts, Researched potential clients, Maintained databases"
		},
		{
			"employer": "Abilene Christian University",
			"title": "Graduate Assistant",
			"location": "Abilene, TX",
			"dates": "August 2010 - May 2012",
			"description": "Taught Freshman-level English courses, Assisted professors with research, Tutored students in University Writing Center, Instructor for University English Language Learners Program"
		}
		],
		"display" : function() {
			for (var job in this.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
				var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
				var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
				$(".work-entry:last").append(formattedEmployer);
				$(".work-entry:last").append(formattedDates);
				$(".work-entry:last").append(formattedLocation);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	};

work.display();

var projects = { 
	"projects" : [
	{
		"title": "Keyword Researched Blog Posts",
		"url": "images/blog_project_photo.jpg",
		"dates": "2014 - 2015",
		"description": "Blog posts to promote online retailers. Researched with Moz and Google Adwords, among other tools."
	},
	{
		"title": "Interactive Online Résumé",
		"url": "images/resume_project_photo.jpg",
		"dates": "February 2015",
		"description": "A résumé with interactive elements, such as the animations and the Google Map below. Built 'by hand' from Javascript, HTML, and CSS."
	}
	],
	"display" : function ()
	{
		for (var project in this.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
			var formattedProjDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
			var formattedProjDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
			var formattedProjURL = HTMLprojectImage.replace("%data%", this.projects[project].url);
			$(".project-entry:last").append(formattedProjTitle);
			$(".project-entry:last").append(formattedProjDates);
			$(".project-entry:last").append(formattedProjDescription);
			$(".project-entry:last").append(formattedProjURL);
		}	
	}
};

projects.display();

var education = {
		"schools" : [
		{
			"name": "Abilene Christian University",
			"degree": "Master of Arts",
			"majors": ["English - Composition and Rhetoric"],
			"location": "Abilene, Texas",
			"dates": "2010 - 2012",
			"url": "http://www.acu.edu"
		},
		{
			"name": "Abilene Christian University",
			"degree": "Bachelor of Arts",
			"majors": ["English - Language and Literature"],
			"location": ["Abilene, TX", " Oxford, United Kingdom"],
			"dates": "2006 - 2010",
			"url": "http://www.acu.edu"
		},
		{
			"name": "The Groundlings School",
			"degree": "I can't think of anything funny.",
			"majors": [ "Spacework", " Waiting for Others to Speak", " 'Yes, and.'"],
			"location": "Hollywood, California",
			"dates": "2013 - 2014",
			"url": "http://www.groundlings.com/"
		}
		],
		"onlineCourses": [
		{
			"url": "Udacity.com/nanodegree",
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "January 2015"
		},
		{
			"url": "Udacity.com/nanodegree",
			"title": "Intro to Javascript",
			"school": "Udacity",
			"dates": "February 2015"
		},
		{
			"url": "Udacity.com/nanodegree",
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": "February 2015"
		}
		],
	"display" : function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			var formattedMajors = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedMajors);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);}
			if (education.onlineCourses.length > 0){
				$("#education").append(HTMLonlineClasses);
				for (var course in this.onlineCourses) {
					$("#education").append(HTMLschoolStart);
					var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
					var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
					var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
					var formattedDate = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
					$(".education-entry:last").append(formattedTitle);
					$(".education-entry:last").append(formattedSchool);
					$(".education-entry:last").append(formattedDate);
					$(".education-entry:last").append(formattedURL);
				}
			}
		}
	};

education.display();

//Log clicks to console 
$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

// Internationalize Name
$("#main").append(internationalizeButton);

var inName = function() {
  var oldName = $("#name").text();
  var finalName = oldName.trim().split(" ");
  finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName[1] = finalName[1].toUpperCase();
  finalName = finalName.join(" ");
  return finalName;
};

// Add map 
$("#mapDiv").append(googleMap);