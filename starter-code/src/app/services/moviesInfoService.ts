import { Injectable } from '@angular/core';
import  Movies  from '../../sample-movies';
import { Movie } from '../movie-interface';
@Injectable()
export class MoviesInfoLog {
    movies: Array<Movie> = Movies;
    movie: Object;    
    
    constructor() { }

    getMovies() {
      console.log(this.movies);
      return this.movies;       
    }
    getMovie(id) {  
      const movie = this.movies.filter((e)=> e.id==id)
      return movie[0]
    }
  
}