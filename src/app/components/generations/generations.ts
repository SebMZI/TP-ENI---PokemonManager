import { Component, Inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Generation } from '../../models/generation';

@Component({
  selector: 'app-generations',
  imports: [],
  providers: [PokemonService],
  templateUrl: './generations.html',
  styleUrl: './generations.css',
})
export class Generations {
  public generations: Generation[] = [];

  constructor(@Inject(PokemonService) private apiService: PokemonService) {
    this.apiService.getGenerations().subscribe((value) => {
      this.generations = value.results;
    });
  }
}
