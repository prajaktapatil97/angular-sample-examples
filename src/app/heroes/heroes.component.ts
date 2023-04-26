import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { HeroService } from '.././hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  herosList = HEROES;
  selectedHero: any;
  heroes: Hero[] = [];
  constructor(private heroService : HeroService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // eventBinding method
  onSelect(hero : Hero) :void{
    this.selectedHero = hero

  }
  getHeroes(){
    let servicedata = this.heroService.getHeroes();
    console.log("servicedata",servicedata);
  }

}
