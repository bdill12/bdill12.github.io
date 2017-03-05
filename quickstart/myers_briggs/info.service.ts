import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Type } from './type';
@Injectable()
export class InfoService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private typesUrl = 'api/types';  // URL to web api
  constructor(private http: Http) { }
  getTypes(): Promise<Type[]> {
    return this.http.get(this.typesUrl)
               .toPromise()
               .then(response => response.json().data as Type[])
               .catch(this.handleError);
  }
  getType(name: string): Promise<Type> {
    const url = `${this.typesUrl}/${name}`;
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
