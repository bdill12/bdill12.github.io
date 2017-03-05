import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Project }           from './project';
import { InfoService }       from '../info.service';

@Component({
	moduleId: module.id,
	selector: 'my-projects',
	templateUrl: './projects.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  title: string = "Development Projects";
  heading: string = '"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."';
  subheading: string = '- Waseem Latif';

  constructor(
    private infoService: InfoService,
    private router: Router) { }

  getProjects(): void {
    this.infoService
        .getProjects()
        .then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }
  
}
