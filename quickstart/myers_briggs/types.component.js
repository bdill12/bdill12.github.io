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
var info_service_1 = require('./info.service');
var TypesComponent = (function () {
    function TypesComponent(infoService, router) {
        this.infoService = infoService;
        this.router = router;
    }
    TypesComponent.prototype.getTypes = function () {
        var _this = this;
        this.infoService
            .getTypes()
            .then(function (types) { return _this.types = types; });
    };
    TypesComponent.prototype.ngOnInit = function () {
        this.getTypess();
    };
    TypesComponent.prototype.onSelect = function (type) {
        this.selectedType = type;
        this.router.navigate(['/types', this.selectedType.name]);
    };
    TypesComponent.prototype.gotoType = function () {
        this.router.navigate(['/types', this.selectedType.name]);
    };
    TypesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'types',
            templateUrl: './TypesComponent.component.html'
        }), 
        __metadata('design:paramtypes', [info_service_1.InfoService, router_1.Router])
    ], TypesComponent);
    return TypesComponent;
}());
exports.TypesComponent = TypesComponent;
//# sourceMappingURL=types.component.js.map