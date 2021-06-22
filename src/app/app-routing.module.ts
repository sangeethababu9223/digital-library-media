import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { BookListComponent } from './books-main/book-list/book-list.component';
import { MovieListComponent } from './movies-main/movie-list/movie-list.component';


const routes: Routes = [
  { path:'books', component: BooksComponent},
  { path:'movies', component: MoviesComponent},
  { path:'books-home', component: BookListComponent},
  { path:'movies-home', component: MovieListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
