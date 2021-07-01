import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ServerServiceService } from './server-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesMainModule } from './movies-main/movies-main.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BooksComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MoviesMainModule
  ],
  providers: [ServerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
