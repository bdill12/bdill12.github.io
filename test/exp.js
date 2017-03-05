exp_render = function() {
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
};
