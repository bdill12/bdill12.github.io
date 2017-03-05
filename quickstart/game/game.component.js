"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
//import { ScoreboardComponent }                                from './scoreboard.component';
//import { ModalComponent }                                     from './modal.component';
//import { Modal }                                              from './modal';
var game_service_1 = require('./game.service');
var common_1 = require('@angular/common');
var GameComponent = (function () {
    function GameComponent(router, location, gameService) {
        this.router = router;
        this.location = location;
        this.gameService = gameService;
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.goBack = function () {
        this.location.back();
    };
    GameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-game',
            template: "\n              <div id=\"canvas\"></div>\n              <script src=\"app/project/game/resources.js\"></script>\n              <script src=\"app/project/game/app.js\"></script>\n              <script src=\"app/project/game/engine.js\"></script>\n              ",
            styleUrls: ['game.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, game_service_1.GameService])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map