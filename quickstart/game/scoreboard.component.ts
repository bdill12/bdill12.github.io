import { Component, OnInit } from '@angular/core';
import { Scoreboard }        from './scoreboard';
import { GameService }       from './game.service';


@Component({
	moduleId: module.id,
	selector: 'my-scoreboard',
	templateUrl: './scoreboard.component.html',
})
export class ScoreboardComponent implements OnInit {
  scoreboard: Scoreboard;

  constructor(
     private gameService: GameService) { } 
  
  getScore(): void {
    this.gameService
        .getScore()
        .then(scoreboard => this.scoreboard = scoreboard);
  }

  ngOnInit() {
    this.getScore();
  }

  addScore(scoreboard: Scoreboard): void {
    this.scoreboard.collection[this.scoreboard.score] = true;
    this.scoreboard.score++;
    this.gameService.update(this.scoreboard);
   };

  subLives(scoreboard: Scoreboard): void {
    this.scoreboard.lives--;
    this.gameService.update(this.scoreboard);
  }

  resetScore(scoreboard: Scoreboard): void {
    this.scoreboard.collection = [false, false, false, false, false, false];
    this.scoreboard.lives = 5;
    this.scoreboard.score = 0;
    this.gameService.update(this.scoreboard);
  }

}
