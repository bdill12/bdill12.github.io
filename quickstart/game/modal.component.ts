import { Component, OnInit }                                  from '@angular/core';
import { Router, ActivatedRoute, Params }                     from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Modal }                                              from './modal';
import { GameService }                                        from './game.service';
import { Location }                                           from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html',
    providers: [GameService]
})
export class ModalComponent implements OnInit {
    modal: Modal;
    constructor(
        private router: Router,
        private location: Location
        private gameService: GameService) {}

    ngOnInit(){
        this.getNewGameModal();
    }

    getNewGameModal(): void {
        this.gameService
            .newGameModal()
            .then(modal => this.modal = modal);
    }

}
