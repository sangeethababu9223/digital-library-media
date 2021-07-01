import { Component, OnInit } from '@angular/core';
import moviesData from '../../_files/movies.json';
// import countriesData from '../../_files/countries.json';
// interface  country { 
//   name: string; 
//   code: string; 
// }
interface  movie { 
  id: string; 
  title: string; 
  poster: string; 
  overview: string; 
  release_date: number; 
  genres: string[];
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  title = "movie-list-json";
  movies: movie[] = moviesData;
  constructor() { }

  ngOnInit(): void {
  }

}
