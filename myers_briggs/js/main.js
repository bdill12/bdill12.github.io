var model = {
    "enfp": [{
        "pros": ["outgoing",
            "social",
            "easily talked into doing silly things",
            "spontaneous",
            "wild and crazy",
            "good at getting people to have fun",
            "physically affectionate",
            "adventurous",
            "loves crowds",
            "seductive",
            "open",
            "comfortable in unfamiliar situations",
            "attracted to strange things",
            "likes to stand out",
            "likes to try new things",
            "fun seeker",
            "unconventional",
            "energetic",
            "impulsive",
            "empathetic",
            "loving",
            "strive toward the authentic",
            "keen and penetrating observers",
            "attention is never passive or casual",
            "brilliantly perceptive",
            "optimistic"
        ],
        "cons": [
            "disorganized",
            "easily talked into doing silly things",
            "spontaneous",
            "wild and crazy",
            "acts without thinking",
            "irresponsible",
            "unprepared",
            "attention seeking",
            "hyperactive",
            "irrational",
            "rule breaker",
            "prone to losing things",
            "easily distracted",
            "non punctual",
            "dangerous",
            "attachment prone",
            "prone to fantasy",
            "can make serious mistakes in judgment"
        ],
        "work": [
            "variety",
            "novelty",
            "challenging",
            "freedom from tight supervision",
            "idea-oriented",
            "imaginative",
            "lively",
            "energetic environment",
            "salespeople",
            "politicians",
            "writers",
            "actors",
            "high creativity and originality"
        ],
        "snippets": [
            "It might be argued that each type, when first in love, resembles a garden-variety ENFP, because ENFPs normally behave like people in love.",
            "When they are in love, they may either overcommit and ignore any unpleasant yet true facts; or they may undercommit, believing that there may be a better love 'just around the corner.' Therefore, ENFPs may be seen as fickle in their relationships as they search for the 'right one.'",
            "For ENFPs nothing occurs which does not have some significance, and they have an uncanny sense of the motivations of others. ",
            "ENFPs tend to heap coals of fire on themselves, always berating themselves for being so conscious of self.",
            "ENFPs are surprised when people or events do not turn out as anticipated. Often their confidence in the innate goodness of fate and human nature is a self-fulling prophecy.",
            "Here is the herald, the spirited bearer of tiding. But underneath this effervescent enthusiasm is a person fiercely dedicated to 'meaning' in life.",
            "The ENFP is into everything, frisky, not unlike a puppy, sniffing around to see what's new."
        ],
        "names": [
            "Brent",
            "Meg Ryan",
            "Dr. Suess"
        ]
    }],
    get: function(type, items) {
        return model.type.items;
    },
};

var octopus = function() {
    init: function() {
        view.init();
    },
    get: function(type, items) {
        return model.get(type, items);
    }
}

var view = function() {
        init: function() {
            octopus.get(enfp, pros);
            for (var i = 0; i < pros.length; i++) {
                $('#pros').append("<li>" + pros[i] + "</li>");
            }
            octopus.get(enfp, cons);
            for (var a = 0; a < cons.length; a++) {
                $('#cons').append("<li>" + cons[a] + "</li>");
            }
            octopus.get(enfp, work);
            for (var b = 0; b < work.length; b++) {
                $('#work').append("<li>" + work[b] + "</li>");
            }
            octopus.get(enfp, names);
            for (var c = 0; c < names.length; c++) {
                $('#names').append("<li>" + names[c] + "</li>");
            }
            octopus.get(enfp, snippet);
            var n = Math.floor(Math.random() * 7))
        $('#snippet').append("<li>" + snippet[n] + "</li>");
    },
    render: function() {}
}