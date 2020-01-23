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

  getListByPrimaryType() {
    let list: Array<{ type: string, count: number }> = new Array()

    pokeData.map(p => {
      let index = list.findIndex(fi => fi.type === p.type1)

      if (index === -1) {
        list = [...list, { type: p.type1, count: 1 }]
      } else {
        list[index].count++
      }
    })

    return of(list)
  }

  getListByGeneration() {
    let list: Array<{ gen: string, count: number }> = new Array()

    pokeData.map(p => {
      let index = list.findIndex(fi => fi.gen === `Generation ${p.generation}`)

      if (index === -1) {
        list = [...list, { gen: `Generation ${p.generation}`, count: 1 }]
      } else {
        list[index].count++
      }
    })

    return of(list)
  }
}
