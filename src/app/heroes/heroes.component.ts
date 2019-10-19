import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //defines heroService property and HeroService injection site
  constructor(private heroService: HeroService) { }

  //replaced by detail/:id routing and router outlet
  // selectedHero: Hero;

  // onSelect (hero: Hero): void  {
  //   this.selectedHero = hero;
  // }

  //simple declaration
  heroes: Hero[];

  //use created heroService to fetch data
  //create a function to retrieve the heroes from the service
  //original synchronous version:
  // getHeroes (): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //this asynchronous approach will work when the HeroService requests heroes from the server
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  //is this equivalent to ComponentDidMount in React?
  ngOnInit() {
    this.getHeroes();
  }
  
}
