import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  imports: [FormsModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class Leaderboard {
  userInput = '';
  leaderboard: Array<{name: string; score: number}> = [];

  // Adds a new entry to the leaderboard
  addEntry() {
    const name = this.userInput.trim(); // remove blankspaces
    if (!name) return alert("Please enter a name.");

    this.leaderboard.push({name, score: this.generateScore()})
    this.leaderboard.sort((a, b) => b.score - a.score);
    this.userInput = ""; // reset user input
  }

  // Generates a random score between 1-100
  generateScore(){
    return Math.floor(Math.random() * 100) + 1;
  }
}
