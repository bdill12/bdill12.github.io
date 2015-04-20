//Developed by Brent Dill with use of
//
//
//Significant portions of this content are derived from
//      The Myers & Briggs Foundation. 
//      (2015). The 16 MBTI Types. Retrieved April 19, 2015, 
//      from http://www.myersbriggs.org/my-mbti-personality-type/mbti-basics/the-16-mbti-types.htm

var model = {
    "enfp": [{
        letters: "ENFP",
        pros: [
            "spontaneous",
            "comfortable in unfamiliar situations",
            "energetic",
            "keen and penetrating observers",
            "brilliantly perceptive"
        ],
        "cons": [
            "attention seeking",
            "irrational",
            "rule breaker",
            "prone to fantasy",
            "can make serious mistakes in judgment"
        ],
        "work": [
            "variety",
            "challenging",
            "freedom from tight supervision",
            "energetic environment",
            "high creativity and originality"
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
        cons: ["C0ming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "isfj": [{
        letters: "ISFJ",
        pros: ["Quiet", "friendly", "responsible", "conscientious", "committed"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "infj": [{
        letters: "INFJ",
        pros: ["Seek meaning", "insightful", "conscientious", "organized", "decisive"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "intj": [{
        letters: "INTJ",
        pros: ["Original minds", "great drive", "See patterns in external events", "organized", "independent"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "istp": [{
        letters: "ISTP",
        pros: ["Tolerant", "flexible", "quiet observers", "logical", "efficient"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
    }],
    "isfp": [{
        letters: "ISFP",
        pros: ["quiet", "friendly", "sensitive", "kind", "loyal"],
        cons: ["Other Types Coming Soon"],
        work: ["Other Types Coming Soon"],
        snippets: ["Other Types Coming Soon"],
        names: ["Other Types Coming Soon"]
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