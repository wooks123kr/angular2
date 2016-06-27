import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {OnInit} from '@angular/core';
import {Hero } from './hero';
import {HeroService } from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService){}
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail(){
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
}

