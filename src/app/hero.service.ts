import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//register it with the injector, which is the object that is responsible 
//for choosing and injecting the provider where the app requires it.

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
