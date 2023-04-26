import { Injectable } from '@angular/core';
import { HEROES  } from './heroes/mock-heroes'
import { Hero } from './heroes/hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes (): Hero[]{
    return HEROES
  }
}
