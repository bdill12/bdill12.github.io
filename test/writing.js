
writing_render = function() {
    var htmlstr = '';
    var indicator = '';
    octopus.getInfo('writing').forEach(function(project) {
        htmlstr += '<div class="writing"><header class="w3-center"><h2>' + project.title + '</h2></header><a class="w3-display-middle" target="_none" href="' + project.url + '"><img src="' + project.image + '"class="w3-image"></a><footer class="w3-center">' + project.description + '</footer></div>';
        indicator += '<button class="w3-btn w3-round-large w3-margin w3-border w3-border-teal w3-hover-teal w3-cell writeSlide w3-white w3-text-teal" id="indicator' + project.index + '">' + project.index + '</button>';
    });
    $('#projects').prepend(htmlstr);
    $('#indicators').append(indicator);
};
function displayWriting(n) {

    var y = document.getElementsByClassName('writeSlide');
    var x = document.getElementsByClassName("writing");


    
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].className = y[i].className.replace(' w3-teal w3-text-white', ' w3-white w3-text-teal');
        }
        x[n].style.display = "block";
        y[n].className = y[n].className.replace(' w3-white w3-text-teal', ' w3-teal w3-text-white');
    }
    $('#writeLeft').click(function() {
                writeIndex = writeIndex - 1;
                if (writeIndex < 0) { writeIndex = x.length - 1; }
                displayWriting(writeIndex);
            });
    $('#writeRight').click(function() {
                writeIndex = writeIndex + 1;
                if (writeIndex == x.length) { writeIndex = 0; }
                displayWriting(writeIndex);
            });

                $('.writeSlide').click(function(event) {
                console.log(event);
                writeIndex = event.target.innerHTML - 1;

                displayWriting(writeIndex);
            });