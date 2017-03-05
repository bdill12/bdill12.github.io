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
var info_service_1 = require('../info.service');
var SamplesComponent = (function () {
    function SamplesComponent(infoService, router) {
        this.infoService = infoService;
        this.router = router;
        this.title = "Writing Samples";
        this.heading = '"There is nothing to writing. All you do is sit down at a typewriter and bleed."';
        this.subheading = '- Earnest Hemingway';
    }
    SamplesComponent.prototype.getSamples = function () {
        var _this = this;
        this.infoService
            .getSamples()
            .then(function (samples) { return _this.samples = samples; });
    };
    SamplesComponent.prototype.ngOnInit = function () {
        this.getSamples();
    };
    SamplesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-samples',
            templateUrl: './samples.component.html',
            styleUrls: ['./samples.component.css']
        }), 
        __metadata('design:paramtypes', [info_service_1.InfoService, router_1.Router])
    ], SamplesComponent);
    return SamplesComponent;
}());
exports.SamplesComponent = SamplesComponent;
//# sourceMappingURL=samples.component.js.map