import { Component, OnInit }                                  from '@angular/core';
import { Router, ActivatedRoute, Params }                     from '@angular/router';
import 'rxjs/add/operator/switchMap';
//import { ScoreboardComponent }                                from './scoreboard.component';
//import { ModalComponent }                                     from './modal.component';
//import { Modal }                                              from './modal';

import { GameService }                                        from './game.service';
import { Location }                                           from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-game',
    template: `
              <div id="canvas"></div>
              <script src="app/project/game/resources.js"></script>
              <script src="app/project/game/app.js"></script>
              <script src="app/project/game/engine.js"></script>
              `,
    styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {

    constructor(
        private router: Router,
        private location: Location,
        private gameService: GameService) {}


    ngOnInit() {
        
    }

    goBack(): void {
        this.location.back();
    }

}
