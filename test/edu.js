
edu_render = function() {
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
};
