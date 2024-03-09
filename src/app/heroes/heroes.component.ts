import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [CommonModule, FormsModule, HeroDetailComponent],
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
