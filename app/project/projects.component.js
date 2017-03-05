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
var ProjectsComponent = (function () {
    function ProjectsComponent(infoService, router) {
        this.infoService = infoService;
        this.router = router;
        this.title = "Development Projects";
        this.heading = '"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."';
        this.subheading = '- Waseem Latif';
    }
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.infoService
            .getProjects()
            .then(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./project.component.css']
        }), 
        __metadata('design:paramtypes', [info_service_1.InfoService, router_1.Router])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map