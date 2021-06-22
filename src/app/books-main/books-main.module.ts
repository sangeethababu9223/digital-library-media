import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class BooksMainModule { }
