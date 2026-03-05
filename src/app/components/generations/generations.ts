import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  imports: [],
  templateUrl: './generations.html',
  styleUrl: './generations.css',
})
export class Generations {
  public generations: Array<string> = [];

  constructor() {
    this.generateGenerationTable();
  }

  public generateGenerationTable() {
    this.generations = [
      'Génération I',
      'Génération II',
      'Génération III',
      'Génération IV',
      'Génération V',
      'Génération VI',
      'Génération VII',
    ];
  }
}
