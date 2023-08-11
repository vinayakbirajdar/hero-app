import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './mockheroes';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HeroesComponent,CommonModule,HerodetailsComponent],
  
})
export class AppComponent implements OnInit {

  title  = "Tour of Heroes";

  // heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}