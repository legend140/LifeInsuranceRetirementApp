import { Injectable } from '@angular/core';
import { IConsumer } from './consumer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private endpoint = 'https://localhost:7070/api/Consumer';

  constructor(private http: HttpClient) { }

  getConsumers(): Observable<IConsumer[]> {
    return this.http.get<IConsumer[]>(this.endpoint).pipe(
      catchError(this.handleError)
    );
  }

  getConsumer(id: number): Observable<IConsumer | undefined> {
    return this.http.get<IConsumer>(this.endpoint+'/'+id).pipe(
      catchError(this.handleError)
    );
  }

  updateConsumer(id: number, consumer: IConsumer): Observable<IConsumer | undefined> {
    return this.http.put<IConsumer>(this.endpoint+'/'+id, consumer).pipe(
      catchError(this.handleError)
    );
  }

  addConsumer(consumer: IConsumer): Observable<IConsumer> {
    return this.http.post<IConsumer>(this.endpoint, consumer).pipe(
      catchError(this.handleError)
    );
  }

  deleteConsumer(id: number): Observable<IConsumer | undefined> {
    return this.http.delete<IConsumer>(this.endpoint+'/'+id).pipe(
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
