import { Component, signal } from '@angular/core';
import { Pokemons } from './components/pokemons/pokemons';
import { Generations } from './components/generations/generations';

@Component({
  selector: 'app-root',
  imports: [Pokemons],
  templateUrl: './app-components.html',
  styleUrl: './app-components.css',
})
export class App {
  protected readonly title = signal('PokemonManager');
}
