import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Type }           from './type';
import { InfoService }       from '../info.service';

@Component({
	moduleId: module.id,
	selector: 'types',
	templateUrl: './types.component.html'
})
export class TypesComponent implements OnInit {
  types: Type[];
  selectedType: Type;

  constructor(
    private infoService: InfoService,
    private router: Router) { }

  getTypes(): void {
    this.infoService
        .getTypes()
        .then(types => this.types = types);
  }

  ngOnInit(): void {
    this.getTypes();
  }
  onSelect(type: Type): void {
    this.selectedType = type;
    console.log(this.selectedType.id);
  }
  gotoType(type: Type): void {
    this.selectedType = type;
    this.router.navigate(['/types', this.selectedType.id]);
  }
}
