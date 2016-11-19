//Developed by Brent Dill with use of
//
//
//Significant portions of this content are derived from
//      The Myers & Briggs Foundation. 
//      (2015). The 16 MBTI Types. Retrieved April 19, 2015, 
//      from http://www.myersbriggs.org/my-mbti-personality-type/mbti-basics/the-16-mbti-types.htm

$(function() {
            $( "#selectable1" ).selectable({
                selected: function( event, ui ) {
                    if (ui.selected.innerText == "E"){
                        choose("e");
                    } else {
                        choose("i");
                    }
                }
            });
            $( "#selectable2" ).selectable({
                selected: function( event, ui ) {
                    if (ui.selected.innerText == "N"){
                        choose("n");
                    } else {
                        choose("s");
                    }
                }
            });
            $( "#selectable3" ).selectable({
                selected: function( event, ui ) {
                    if (ui.selected.innerText == "T"){
                        choose("t");
                    } else {
                        choose("f");
                    }
                }
            });
            $( "#selectable4" ).selectable({
                selected: function( event, ui ) {
                    if (ui.selected.innerText == "J"){
                        choose("j");
                    } else {
                        choose("p");
                    }
                }
            });
        });

var model = {
    "enfp": [{
        letters: "ENFP",
        pros: [
            "Spontaneous",
            "Comfortable in unfamiliar situations",
            "Energetic",
            "Keen observers",
            "Brilliantly perceptive"
        ],
        "cons": [
            "Seek attention",
            "Act irrationally",
            "Break rules",
            "Prone to fantasy",
            "Can make serious mistakes in judgment"
        ],
        "work": [
            "Has variety",
            "Full of Challenges",
            "Free from tight supervision",
            "Energetic",
            "Creative and original"
        ],
        "snippets": [
            "It might be argued that each type, when first in love, resembles a garden-variety ENFP, because ENFPs normally behave like people in love.",
            "For ENFPs nothing occurs which does not have some significance, and they have an uncanny sense of the motivations of others. ",
            "ENFPs tend to heap coals of fire on themselves, always berating themselves for being so conscious of self.",
            "Here is the herald, the spirited bearer of tiding. But underneath this effervescent enthusiasm is a person fiercely dedicated to 'meaning' in life.",
            "The ENFP is into everything, frisky, not unlike a puppy, sniffing around to see what's new."
        ],
        "names": [
            "Dr. Suess",
            "Mark Twain",
            "Ellen Degeneres",
            "Walt Disney",
            "Sandra Bullock"
        ]
    }],
    "istj": [{
        letters: "ISTJ",
        pros: ["Quiet", "Serious", "Dependable", "Practical", "Matter-of-fact"],
        cons: ["Take things too seriously at times", "Judgemental", "Very little abstract thinking", "Uncomfortable expressing emotions", "Hard on themselves"],
        work: ["Things done by the book", "Highly organized", "Clear expectations", "Teamwork should be rare", "Social justice" ],
        snippets: ["ISTJs keep their feet on the ground and make clear, rational decisions.",],
        names: ["Natalie Portman", "Herber Hoover", "Hermione Granger", "George Washington", "George H.W. Bush"]
    }],
    "isfj": [{
        letters: "ISFJ",
        pros: ["Supportive", "Friendly", "Responsible", "Conscientious", "Committed"],
        cons: ["Shy", "Too sensitive", "Repress emotions", "Resist change", "Will work themselves to death"],
        work: ["Not highly competive", "Lots of encouragement", "Service-oriented", "No conflict among co-workers", "Personal relationships important"],
        snippets: ["ISFJs need to be needed."],
        names: ["Queen Elizabeht II", "Robert E. Lee", "Dr. Watson", "Sam from Lord of the Rings", "Halle Berry"]
    }],
    "infj": [{
        letters: "INFJ",
        pros: ["Seek meaning in everythiing", "Insightful", "Persuasive", "Organized", "Decisive"],
        cons: ["Sensitive", "Closed books to all but a few", "Must always be fighting something", "Tire out easily"],
        work: ["Meaningful", "Creative", "Lots of independence", "Focus on communication", "Focus on individuals"],
        snippets: ["When INFJs come to believe that something is important, they pursue that goal with a conviction and energy that can catch even their friends and loved ones off guard."],
        names: ["Nicole Kidman", "Martin Luther King", "Jimmy Carter", "Nelson Mandela", "Mel Gibson"]
    }],
    "intj": [{
        letters: "INTJ",
        pros: ["Original and open-minded", "Great drive", "See patterns in external events", "High confidence", "Independent"],
        cons: ["Arrogant", "Judgmental", "Stuck in their heads", "Don't deal well with structure", "Hopeless in love"],
        work: ["Prefer to work alone", "High standards", "Meritocracy", "Loosely defined roles", "Lots of challenges"],
        snippets: ["A paradox to most observers, INTJs are able to live by glaring contradictions that nonetheless make perfect sense."],
        names: ["Vladimir Putin", "Thomas Jefferson", "John F. Kennedy", "Hannibal", "Gandalf the Grey"]
    }],
    "istp": [{
        letters: "ISTP",
        pros: ["Tolerant", "Great in a crisis", "Relaxed", "Spontaneous, but rational", "Creative, but practical"],
        cons: ["Stubborn", "Private and reserved", "Insensitive", "Risky behavior", "Easily bored"],
        work: ["Need to know how things work", "Hands-on experiences", "Independence", "Practical solutions", "Concrete results" ],
        snippets: ["Rather than some sort of vision quest, ISTPs are merely exploring the viability of a new interest when they make seismic shifts."],
        names: ["Clint Eastwood", "Tom Cruise", "Indiana Jones", "Jack Bauer", "Angus MacGuyver" ]
    }],
    "isfp": [{
        letters: "ISFP",
        pros: ["Charming", "Great imaginations", "Sensitive", "Curious", "Passion"],
        cons: ["Independent to a fault", "High anxiety", "Very competitive", "Love themselves, hate themselves", "Unpredictable"],
        work: ["Unpredictability", "Short term commitments", "Dynamic, always changing environments", "Freelancing and consulting","Room to improve things"],
        snippets: ["ISFPs always know just the compliment to soften a heart that's getting ready to call their risks irresponsible or reckless."],
        names: ["Bob Dylan", "Marie Antoinette", "Millard Filmore", "John Travolta", "Donald Trump"]
    }],
    "infp": [{
        letters: "INFP",
        pros: ["Idealistic", "loyal", "curious", "maximize potential of others", "adaptable"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "intp": [{
        letters: "INTP",
        pros: ["theoretical", "abstract", "quiet", "flexible", "incredible focus"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "estp": [{
        letters: "ESTP",
        pros: ["flexible", "tolerant", "pragmatic", "energetic", "spontaneous"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "esfp": [{
        letters: "ESFP",
        pros: ["outgoing", "friendly", "accepting", "exuberant lovers of life", "flexible"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "entp": [{
        letters: "ENTP",
        pros: ["quick", "ingenious", "stimulating", "alert", "outspoken"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "estj": [{
        letters: "ESTJ",
        pros: ["Practical", "realistic", "matter-of-fact", "decisive", "detail-oriented"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "esfj": [{
        letters: "ESFJ",
        pros: ["Warmhearted", "conscientious", "cooperative", "work well with others", "dependable"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "enfj": [{
        letters: "ENFJ",
        pros: ["warm", "empathetic", "responsive", "responsible", "see potential in everyone"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "entj": [{
        letters: "ENTJ",
        pros: ["frank", "decisive", "assume leadership readily", "problem solvers", "well-informed"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    get: function(type) {
        if (type == "enfp") {
            return model.enfp;
        } else if (type == "istj") {
            return model.istj;
        } else if (type == "infp") {
            return model.infp;
        } else if (type == "isfj") {
            return model.isfj;
        } else if (type == "infj") {
            return model.infj;
        } else if (type == "intj") {
            return model.intj;
        } else if (type == "istp") {
            return model.istp;
        } else if (type == "isfp") {
            return model.isfp;
        } else if (type == "infp") {
            return model.infp;
        } else if (type == "intp") {
            return model.intp;
        } else if (type == "estp") {
            return model.estp;
        } else if (type == "esfp") {
            return model.esfp;
        } else if (type == "entp") {
            return model.entp;
        } else if (type == "estj") {
            return model.estj;
        } else if (type == "esfj") {
            return model.esfj;
        } else if (type == "entj") {
            return model.entj;
        } else if (type == "enfj") {
            return model.enfj;
        } else {
            console.log('An error has occurred');
        }
    },
};

var octopus = {
    init: function() {
        view.init();
    },
    get: function(type) {
        return model.get(type);
    }
};

var view = {
    init: function() {
        var octograb = octopus.get("enfp")[0];
        $('#type').append("<span class=center>" + octograb.letters + "</span>");
        for (var i = 0; i < octograb.pros.length; i++) {
            $('#pros').append("<li>" + octograb.pros[i] + "</li>");
        }
        for (var x = 0; x < octograb.cons.length; x++) {
            $('#cons').append("<li>" + octograb.cons[x] + "</li>");
        }
        for (var job = 0; job < octograb.work.length; job++) {
            $('#jobs').append("<li>" + octograb.work[job] + "</li>");
        }
        for (var m = 0; m < octograb.names.length; m++) {
            $('#names').append("<li>" + octograb.names[m] + "</li>");
        }
        var l = Math.floor(Math.random() * 5);
        $('#snippet').append('<li>"' + octograb.snippets[l] + '"</li>');
    },
    render: function(type) {
        var octograb = octopus.get(type)[0];
        $('#type').empty();
        $('#type').append("<span class=center>" + octograb.letters + "</span>");
        $('#pros').empty();
        for (var i = 0; i < octograb.pros.length; i++) {
            $('#pros').append("<li>" + octograb.pros[i] + "</li>");
        }
        $('#cons').empty();
        for (var x = 0; x < octograb.cons.length; x++) {
            $('#cons').append("<li>" + octograb.cons[x] + "</li>");
        }
        $('#jobs').empty();
        for (var job = 0; job < octograb.work.length; job++) {
            $('#jobs').append("<li>" + octograb.work[job] + "</li>");
        }
        $('#names').empty();
        $('#typeNames').empty().append(octograb.letters);
        for (var m = 0; m < octograb.names.length; m++) {
            $('#names').append("<li>" + octograb.names[m] + "</li>");
        }
        $('#snippet').empty();
        var l = Math.floor(Math.random() * 5);
        $('#snippet').append('<li>"' + octograb.snippets[l] + '"</li>');
        $('#typeAdd').empty().append(octograb.letters);
    }
};
var newType = function() {
    var theNewType = document.getElementById('selectedType').value.toLowerCase();
    view.render(theNewType);
};
var addName = function() {
    var theOldNames = window.localStorage.getItem('enfpList');
    var theNewName = document.getElementById('name').value;
    var theNewNames = theOldNames + "," + theNewName;
    var myStorage = [window.localStorage.setItem('enfpList', [theNewNames])];
    console.log(localStorage.enfpList.split(','));
};
var mb_type_arr = [];
var choose = function(letter) {
    if (letter == "e" || letter == "i") {
        mb_type_arr[0] = letter;
        $('#choice1').empty().append('<span>' + letter.toUpperCase() + '</span>');
        if (letter == "e") {
            $('#choice1a').empty().append('<span>Extrovert</span>');
        } else {
            $('#choice1a').empty().append('<span>Introvert</span>');
        }
    } else if (letter == "n" || letter == "s") {
        mb_type_arr[1] = letter;
        $('#choice2').empty().append('<span>' + letter.toUpperCase() + '</span>');
        if (letter == "n") {
            $('#choice2a').empty().append('<span>Intuitive</span>');
        } else {
            $('#choice2a').empty().append('<span>Sensing</span>');
        }
    } else if (letter == "t" || letter == "f") {
        mb_type_arr[2] = letter;
        $('#choice3').empty().append('<span>' + letter.toUpperCase() + '</span>');
        if (letter == "t") {
            $('#choice3a').empty().append('<span>Thinking</span>');
        } else {
            $('#choice3a').empty().append('<span>Feeling</span>');
        }
    } else {
        mb_type_arr[3] = letter;
        $('#choice4').empty().append('<span>' + letter.toUpperCase() + '</span>');
        if (letter == "p") {
            $('#choice4a').empty().append('<span>Perceiving</span>');
        } else {
            $('#choice4a').empty().append('<span>Judging</span>');
        }
    }

    if (mb_type_arr.length == 4) {
        view.render(mb_type_arr.join(""));
    }
};
octopus.init();