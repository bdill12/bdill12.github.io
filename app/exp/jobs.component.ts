import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Job }                from './exp';
import { InfoService }         from '../info.service';

@Component({
	moduleId: module.id,
	selector: 'my-jobs',
	templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  title: string = "Experience";
  heading: string = '"I just believe that the interesting time in a career is pre-success, what shaped things, how did you get to this point?"';
  subheading: string = "- Steve Martin";
  constructor(
    private infoService: InfoService,
    private router: Router) { }

  getJobs(): void {
    this.infoService
        .getJobs()
        .then(jobs => this.jobs = jobs);
  }

  ngOnInit(): void {
    this.getJobs();
  }
}
