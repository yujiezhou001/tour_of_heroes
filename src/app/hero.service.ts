import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//register it with the injector, which is the object that is responsible 
//for choosing and injecting the provider where the app requires it

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  //create messageService, a parameter that declares a private 
  //messageService property Angular will inject the singleton 
  //MessageService into that property when it creates the HeroService
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // my code:
    // var hero: Hero;
    // HEROES.forEach(function(hero){
    //   if (hero.id === id) {
    //     hero = hero;
    //   }
    // })
    // return of (hero);

    //returns an object
    return of (HEROES.find(hero => hero.id === id));
  }
}
