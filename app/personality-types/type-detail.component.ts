import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Type }           from './type';
import { InfoService }       from '../info.service';

@Component({
	moduleId: module.id,
	selector: 'type-detail',
	templateUrl: './type-detail.component.html'
})
export class TypeDetailComponent implements OnInit {
  type: Type;

  constructor(
    private infoService: InfoService,
    private route: ActivatedRoute,
    private location: Location) { }
   
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.infoService.getType(+params['id']))
      .subscribe(type => this.type = type);
  }
  goBack(): void {
    this.location.back();
  }
}
