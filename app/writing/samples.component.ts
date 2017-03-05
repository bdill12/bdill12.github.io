import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }            from '@angular/router';
import { Sample }                from './sample';
import { InfoService }         from '../info.service';

@Component({
	moduleId: module.id,
	selector: 'my-samples',
	templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  samples: Sample[];
  title: string = "Writing Samples";
  heading: string = '"There is nothing to writing. All you do is sit down at a typewriter and bleed."';
  subheading: string = '- Earnest Hemingway';
  
  constructor(
    private infoService: InfoService,
    private router: Router) { }

  getSamples(): void {
    this.infoService
        .getSamples()
        .then(samples => this.samples = samples);
  }

  ngOnInit(): void {
    this.getSamples();
  }
}
