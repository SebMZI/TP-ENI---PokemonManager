import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons {
  public pokemons: Array<Pokemon> = [];

  constructor() {
    this.generatePokemonTable();
  }

  public generatePokemonTable() {
    this.pokemons.push({
      id: 1,
      name: 'Bulbizarre',
      category: 'graine',
      type: ['Plante', 'Poison'],
      height: 70,
      weight: 690,
    });
    this.pokemons.push({
      id: 2,
      name: 'Herbizarre',
      category: 'graine',
      type: ['Plante', 'Poison'],
      height: 100,
      weight: 1300,
    });
    this.pokemons.push({
      id: 3,
      name: 'Florizarre',
      category: 'graine',
      type: ['Plante', 'Poison'],
      height: 200,
      weight: 10000,
    });
    this.pokemons.push({
      id: 4,
      name: 'Salamèche',
      category: 'lezard',
      type: ['Feu'],
      height: 60,
      weight: 850,
    });
    this.pokemons.push({
      id: 5,
      name: 'Reptincel',
      category: 'flamme',
      type: ['Feu'],
      height: 110,
      weight: 1900,
    });
    this.pokemons.push({
      id: 6,
      name: 'Dracaufeu',
      category: 'flamme',
      type: ['Feu', 'Vol'],
      height: 170,
      weight: 9050,
    });
  }
}
