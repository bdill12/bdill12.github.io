$(function() {
	var myJobs = {
			'jobs': [{
				'tag':'wb',
            'employer': 'Warner Bros. Studios Tour Hollywood',
            'title': 'Tour Guide (Seasonal)',
            'location': 'Burbank, CA',
            'dates': 'June 2015 - September 2015',
            'description': ["<li>Delivered unique, unscripted 2-hour tours of the backlot for up to 15 guests</li>", "<li>Displayed expert knowledge of the 110-acre stu…sion history, and every aspect of production</li>", "<li>Tailored each tour to the taste preferences of…oting the studio's current and past projects</li>"],
             'url': 'http://www.wbstudiotour.com/',
            'image': 'img/logos/shortlogos/wblogo.png'
        }, {
            'tag': 'cp',
            'employer': 'CouponPal',
            'title': 'Content Specialist',
            'location': 'Santa Monica, CA',
            'dates': 'September 2014 - January 2015',
            'description': ["<li>Determined target keywords for articles, store pages, and blogs using Google Adwords</li>", "<li>Researched, wrote, and edited blogs to feature and promote retailers</li>", "<li>Managed deal and coupon content for over 60 on…'s, GAP, 1-800-Flowers, Best Buy, and Target</li>", "<li>Wrote FAQ and How-to articles for store pages</li>"],
            'url': 'http://couponpal.com/blog'
        }, {
            'tag': 'phs',
            'employer': 'Pasadena Humane Society',
            'title': 'Development Assistant',
            'location': 'Pasadena, CA',
            'dates': 'September 2013 - June 2014',
            'description': ["<li>Served as primary point of contact for all non-major gift donations</li>", "<li>Created new gift coding system to keep track of how each donation was solicited</li>", "<li>Managed office supplies, maintained database of donor information</li>", "<li>Wrote and edited development publications, donor letters, and tax acknowledgements</li>", "<li>Built relationships with major donors, board members, and local businesses</li>", "<li>Solicited in-kind donations for annual silent auction</li>"],
        }, {
            'tag': 'gc',
            'employer': 'Grassroots Campaigns',
            'title': 'Field Manager',
            'location': 'Pasadena, CA',
            'dates': 'August 2013 - October 2013',
            'description': ["<li>Oversaw a team of 4 to 6 canvassers</li>", "<li>Determined locations and permissions for each team member while at the canvassing site</li>", "<li>Solicited donataions on behalf of the Southern…verty Law Center using a three-ask structure</li>", "<li>Conducted daily training exercises and team building activities</li>"],
            'url': 'http://grassrootscampaigns.com'
        }, {
            'tag': 'ksa',
            'employer': 'Kaplan Stahler Agency',
            'title': 'Intern',
            'location': 'Beverly Hills, CA',
            'dates': 'August 2012 - December 2012',
            'description': ["<li>Provided notes on story, characters, themes, a…ectiveness of scripts from potential clients</li>", "<li>Researched prospective talent</li>", "<li>Updated information for industry contacts</li>"],
            'url': 'http://kaplanstahler.com/'
        }, {
            'tag': 'acu',
            'employer': 'Abilene Christian University',
            'title': 'Graduate Assistant',
            'location': 'Abilene, TX',
            'dates': 'August 2010 - May 2012',
            'description': ["<li>Served as teacher of record for Freshman-level…nglish and English Language Learning courses</li>", "<li>Assisted professors with research</li>", "<li>Tutored students one-on-one in the University Writing Center</li>"],
            'url': 'http://www.acu.edu/'
        }]
};
function displayCard(n) {
	var jobCards = document.querySelectorAll('.jobCard');
	for (var i = 0; i < jobCards.length; i++) {
		jobCards[i].style.display = "none";
	}
	jobCards[n].style.display = "block";
}

w3DisplayData("mobileCard", myJobs);
displayCard(0);

});