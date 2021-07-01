import { Injectable } from '@angular/core';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) { }
}
