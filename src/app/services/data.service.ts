import { Injectable } from '@angular/core';
import { pokeData } from '../data/pokeData'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFullPokeList() {
    return of(pokeData)
  }

  getPokemonByGen(gen: number) {
    return of(pokeData.filter(p => p.generation === gen))
  }

  getPokemonByType(type: string) {
    return of(pokeData.filter(p => p.type1 === type || p.type2 === type))
  }

  getPokemonByName(name: string) {
    return of(pokeData.filter(p => p.name === name))
  }

  getPokemonByNumber(number: number) {
    return of(pokeData.filter(p => p.pokedex_number === number))
  }
}
