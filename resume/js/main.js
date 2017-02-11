var insider;
var addContacts = function () {
    'use strict';
    var contacts = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        location: document.getElementById('location').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        website: document.getElementById('website').value
    };
    var header = document.createElement('ul');
    header.setAttribute("id","contactMe");
    var array = [contacts.name, contacts.address, contacts.location, contacts.phone, contacts.email, contacts.website];
    for(var i = 0; i < array.length; i++) {
        if (i === 0) {
            insider = document.createTextNode('<li class="contacts myName">'+array[i]+'</li>');
            header.innerHTML= header.innerHTML + insider.textContent;
            document.getElementById('header').appendChild(header);
        } else {
            insider = document.createTextNode('<li class="contacts">'+array[i]+'</li>');
            header.innerHTML= header.innerHTML + insider.textContent;
            document.getElementById('header').appendChild(header);
        }
    }
    $('#contactMe').append('<li><button onclick="correct()">Correct</button></li>');
    $('#contacted').addClass("hidden");
};

var correct = function() {
    $('#contacted').removeClass("hidden");
    $('#contactMe').addClass('hidden');
}