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
var game_service_1 = require('./game.service');
var ScoreboardComponent = (function () {
    function ScoreboardComponent(gameService) {
        this.gameService = gameService;
    }
    ScoreboardComponent.prototype.getScore = function () {
        var _this = this;
        this.gameService
            .getScore()
            .then(function (scoreboard) { return _this.scoreboard = scoreboard; });
    };
    ScoreboardComponent.prototype.ngOnInit = function () {
        this.getScore();
    };
    ScoreboardComponent.prototype.addScore = function (scoreboard) {
        this.scoreboard.collection[this.scoreboard.score] = true;
        this.scoreboard.score++;
        this.gameService.update(this.scoreboard);
    };
    ;
    ScoreboardComponent.prototype.subLives = function (scoreboard) {
        this.scoreboard.lives--;
        this.gameService.update(this.scoreboard);
    };
    ScoreboardComponent.prototype.resetScore = function (scoreboard) {
        this.scoreboard.collection = [false, false, false, false, false, false];
        this.scoreboard.lives = 5;
        this.scoreboard.score = 0;
        this.gameService.update(this.scoreboard);
    };
    ScoreboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-scoreboard',
            templateUrl: './scoreboard.component.html',
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());
exports.ScoreboardComponent = ScoreboardComponent;
//# sourceMappingURL=scoreboard.component.js.map