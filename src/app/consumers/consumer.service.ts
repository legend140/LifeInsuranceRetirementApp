import { Injectable } from '@angular/core';
import { IConsumer } from './consumer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private endpoint = 'https://localhost:7070/api/Consumer';

  constructor(private http: HttpClient) { }

  getConsumers(): Observable<IConsumer[]> {
    return this.http.get<IConsumer[]>(this.endpoint).pipe(
      tap(data => console.log('All:', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(()=>errorMessage);
  }
}
