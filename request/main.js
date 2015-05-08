var mailDoc = function(chosen) {
	console.log(document.getElementById("email").value);
	var link = "mailto:"+ recipient + "?subject=A Document from Brent C Dill&body=Thank You. Please See Attachment&attachment=" + chosen;
		window.location.href = link;
	};

function sendMail() {
	 var recipient = document.getElementById("email").value;
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'GqXlKXrtVKcZqWyYoWCa5w',
        'message': {
          'from_email': 'brentcdill@gmail.com',
          'to': [
              {
                'email': recipient,
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Brent C Dill has sent you a document',
          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
}
