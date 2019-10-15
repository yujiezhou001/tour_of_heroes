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

  selectedHero: Hero;

  onSelect (hero: Hero): void  {
    this.selectedHero = hero;
  }

  //simple declaration
  heroes: Hero[];

  //use created heroService to fetch data
  //create a function to retrieve the heroes from the service
  getHeroes (): void {
    this.heroes = this.heroService.getHeroes();
  }

  //is this equivalent to ComponentDidMount in React?
  ngOnInit() {
    this.getHeroes;
  }
  
}
