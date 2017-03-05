import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Job } 							from './exp/exp';
import { School } 						from './edu/edu';
import { Project } 						from './project/project';
import { Sample } 						from './sample/sample';
import { Type }               from './personality-types/type';


@Injectable()
export class InfoService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private jobsUrl = 'api/jobs';  // URL to web api
  private schoolsUrl = 'api/schools';  // URL to web api
  private samplesUrl = 'api/samples';  // URL to web api
  private projectsUrl = 'api/projects';  // URL to web api
  private typesUrl = 'api/types';  // URL to web api
  constructor(private http: Http) { }
  getJobs(): Promise<Job[]> {
    return this.http.get(this.jobsUrl)
               .toPromise()
               .then(response => response.json().data as Job[])
               .catch(this.handleError);
  }
  getSchools(): Promise<School[]> {
  	return this.http.get(this.schoolsUrl)
               .toPromise()
               .then(response => response.json().data as School[])
               .catch(this.handleError);
  }
  getSamples(): Promise<Sample[]> {
  	return this.http.get(this.samplesUrl)
               .toPromise()
               .then(response => response.json().data as Sample[])
               .catch(this.handleError);
  }
  getProjects(): Promise<Project[]> {
  	return this.http.get(this.projectsUrl)
               .toPromise()
               .then(response => response.json().data as Project[])
               .catch(this.handleError);
  }
  getProject(id: number): Promise<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get(url)
              .toPromise()
              .then(response => response.json().data as Project)
              .catch(this.handleError);
  }
  getTypes(): Promise<Type[]> {
    return this.http.get(this.typesUrl)
               .toPromise()
               .then(response => response.json().data as Type[])
               .catch(this.handleError);
  }
  getType(id: number): Promise<Type> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Type)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
