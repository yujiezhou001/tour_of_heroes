import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //receives hero variable passed down from parent component
  //in order to receive, need a Input() decorator to make hero 
  //a input property

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
