import { Component, signal } from '@angular/core';
import { Pokemons } from './components/pokemons/pokemons';
import { Generations } from './components/generations/generations';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Pokemons, Header],
  templateUrl: './app-components.html',
  styleUrl: './app-components.css',
})
export class App {
  protected readonly title = signal('PokemonManager');
}
