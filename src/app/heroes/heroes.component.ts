import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  // hero: Hero = {
  //  id: 1,
  // name: 'Homem Aranha',
  //};
  heroes = HEROES;
  selectedHero?: Hero;
  // o ? sera do tipo hero ou underfed

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
