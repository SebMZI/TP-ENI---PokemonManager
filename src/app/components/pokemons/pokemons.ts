import { Component, Inject } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.html',
  providers: [PokemonService],
  styleUrl: './pokemons.css',
})
export class Pokemons {
  pokemons: Array<Pokemon> = [];
  noPokemon: number = 0;

  constructor(@Inject(PokemonService) public apiService: PokemonService) {
    this.apiService.getPokemonList().subscribe((value) => {
      value.results.forEach((element: any) => {
        this.apiService.getPokemonDetail(element.url).subscribe((pok: Pokemon) => {
          this.pokemons.push(pok);
        });
      });

      this.noPokemon = value.count;
    });
  }
}
