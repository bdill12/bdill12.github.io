import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { School }                from './edu';
import { InfoService }         from '../info.service';

@Component({
	moduleId: module.id,
	selector: 'my-schools',
	templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools: School[];
  title: string = "Education";
  heading: string = '"No one is dumb who is curious. The people who don\'t ask questions remain clueless throughout their lives."';
  subheading: string = '-Neil deGrasse Tyson';    
  
  constructor(
    private infoService: InfoService,
    private router: Router) { }

  getSchools(): void {
    this.infoService
        .getSchools()
        .then(schools => this.schools = schools);
  }

  ngOnInit(): void {
    this.getSchools();
  }
}