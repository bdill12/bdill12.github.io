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
var game_service_1 = require('./game.service');
var common_1 = require('@angular/common');
var ModalComponent = (function () {
    function ModalComponent(router, location, gameService) {
        this.router = router;
        this.location = location;
        this.gameService = gameService;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.getNewGameModal();
    };
    ModalComponent.prototype.getNewGameModal = function () {
        var _this = this;
        this.gameService
            .newGameModal()
            .then(function (modal) { return _this.modal = modal; });
    };
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal',
            templateUrl: './modal.component.html',
            providers: [game_service_1.GameService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, game_service_1.GameService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map