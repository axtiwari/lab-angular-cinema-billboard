import { Component, OnInit } from '@angular/core';
import { MoviesInfoLog } from '../services/moviesInfoService';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesInfoLog]
})
export class MyHomeComponentComponent implements OnInit {
  newMovies: Array <Object>

  constructor( private theMovies : MoviesInfoLog ) { }

  ngOnInit() {
    this.newMovies = this.theMovies.getMovies();
  }
 

}
