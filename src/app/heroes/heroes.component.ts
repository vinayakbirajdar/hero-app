import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero }  from '../hero';


@Component({
  standalone:true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[CommonModule, FormsModule],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id : 1,
    name : 'vinay'
  }



  constructor() { }

  ngOnInit() {
  }

}