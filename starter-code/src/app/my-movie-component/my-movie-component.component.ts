import { Component, OnInit } from '@angular/core';
import { MoviesInfoLog } from '../services/moviesInfoService';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesInfoLog]
})
export class MyMovieComponentComponent implements OnInit {
  newMovie: object;
  movieId: number;
  constructor( private theMovie : MoviesInfoLog, private route: ActivatedRoute ) {
    
  } 

  ngOnInit() {    
    this.route.params
    .subscribe((params) => this.movieId = Number(params['id']));
    this.newMovie = this.theMovie.getMovie(this.movieId)
  }

}
