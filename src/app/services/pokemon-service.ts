import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  constructor() {}

  public getGenerations(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/generation/');
  }

  public getPokemonList(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  public getPokemonDetail(url: string): Observable<any> {
    return this.http.get(url);
  }
}
