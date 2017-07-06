import { Component, OnInit } from '@angular/core';
import { Hero } from './identifier';
import { HeroService } from './detail.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers:[HeroService]
})
export class ServiceComponent implements OnInit {

title = 'List of Employees';
heroes: Hero[];
selectedHero: Hero;
constructor(private heroService: HeroService) { }
getHeroes(): void {
this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
ngOnInit(): void {
this.getHeroes();
}
onSelect(hero: Hero): void {
this.selectedHero = hero;
}


}
