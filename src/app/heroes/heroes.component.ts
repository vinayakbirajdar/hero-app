import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero }  from '../hero';
import { HEROES } from '../mockheroes';
import { HerodetailsComponent } from './herodetails/herodetails.component';


@Component({
  standalone:true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[CommonModule , FormsModule,HerodetailsComponent],
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id : 1,
  //   name : 'vinayak'
  // }
  heroes = HEROES;
  selectedHero?:Hero;
  // @Input() hero! : Hero;

  // ! means i will confrim the variable will apper while complilation
  // ? means i will confrim the variable will apper while complilation




  constructor() { }

  // getEven() {
  //   return this.hero.id % 2 != 0 ;

  // }
  onselect(hero: Hero) {
    this.selectedHero=hero;
  }
  ngOnInit() {}

}