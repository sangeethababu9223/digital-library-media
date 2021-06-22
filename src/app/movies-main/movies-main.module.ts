import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';



@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MoviesMainModule { }
