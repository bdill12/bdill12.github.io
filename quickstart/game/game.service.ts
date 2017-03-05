import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Scoreboard } 							from './scoreboard';
import { Modal }                     from './modal';

@Injectable()
export class GameService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private scoreUrl = 'api/score'; // URL to web api
  private newGameUrl = 'api/newGameModal';  
  constructor(private http: Http) { }
  getScore(): Promise<Scoreboard> {
    return this.http.get(this.scoreUrl)
                .toPromise()
                .then(response => response.json().data as Scoreboard)
                .catch(this.handleError);
  }

  newGameModal(): Promise<Modal> {
    return this.http.get(this.newGameUrl)
                    .toPromise()
                    .then(response => response.json().data as Modal)
                    .catch(this.handleError);
  }
  
  updateScore(scoreboard: Scoreboard): Promise<Scoreboard> {
    return this.http
                .put(scoreUrl, JSON.stringify(scoreboard), {headers: this.headers})
                .toPromise()
                .then(() => scoreboard)
                .catch(this.handleError);
  }
    
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
