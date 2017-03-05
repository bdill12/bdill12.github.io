project_render = function() {
    var htmlstr = '';
    var indicator = '';

    octopus.getInfo('project').forEach(function(project) {
        htmlstr += '<div class="dev w3-display-middle w3-center w3-margin-0 w3-mobile"><h2>' + project.title + '</h2><a target="_none" href="' + project.url + '"><img src="' + project.image + '" class="w3-image devImage"></a><footer class="w3-center">' + project.description + '</footer></div>';
        indicator += '<button class="w3-btn w3-round-large w3-margin w3-border w3-border-green w3-hover-green w3-cell devSlide w3-white w3-text-green" id="devIndicator' + project.index + '">' + project.index + '</button>';
    });
    $('#devProjects').prepend(htmlstr);
    $('#devIndicators').append(indicator);
};

function displayDev(n) {
    var d = document.getElementsByClassName('dev');
    var e = document.getElementsByClassName('devSlide');
    for (var i = 0; i < d.length; i++) {
        d[i].style.display = "none";
        e[i].className = e[i].className.replace(' w3-green w3-text-white', ' w3-white w3-text-green');

    }
    d[n].style.display = "block";
    e[n].className = e[n].className.replace(' w3-white w3-text-green', ' w3-green w3-text-white');
}

$('#devLeft').click(function() {
    devIndex = devIndex - 1;
    if (devIndex < 0) { devIndex = d.length - 1; }
    displayDev(devIndex);
});


$('#devRight').click(function() {
    devIndex = devIndex + 1;
    if (devIndex == d.length) { devIndex = 0; }
    displayDev(devIndex);
});

$('.devSlide').click(function(event) {
    console.log(event);

    devIndex = event.target.innerHTML - 1;
    displayDev(devIndex);
});
