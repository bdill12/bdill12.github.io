import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent  {
    title = "Brent C Dill";
    heading = 'Web Developer, Writer';
    notMobile: boolean;

    constructor(private route: ActivatedRoute) {    }

    section(x, event) {
    	event.preventDefault();
        this.w3_close();
    }
    w3_close() {
          document.getElementById("nav").style.display = "none";
    }
    w3_open() {
          document.getElementById("nav").style.display = "block";
    }

    ngOnInit() {
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        if (isMobile.any()) {
            this.notMobile = false;
            $(window).scroll(function() {
                var scrolledY = $(window).scrollTop();
                $('.w3-main').css('background-position', 'center ' + ((scrolledY)) + 'px');
            });
        } else {
            this.notMobile = true;
        }
    }
}
