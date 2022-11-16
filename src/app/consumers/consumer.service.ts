import { Injectable } from '@angular/core';
import { IConsumer, IConsumerHistory } from './consumer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, take, throwError } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
      untilDestroyed(this),
      catchError(this.handleError)
    );
  }

  updateConsumer(id: number, consumer: IConsumer): Observable<IConsumer | undefined> {
    return this.http.put<IConsumer>(this.endpoint+'/'+id, consumer).pipe(
      untilDestroyed(this),
      catchError(this.handleError)
    );
  }

  addConsumer(consumer: IConsumer): Observable<IConsumer> {
    return this.http.post<IConsumer>(this.endpoint, consumer).pipe(
      untilDestroyed(this),
      catchError(this.handleError)
    );
  }

  deleteConsumer(id: number): Observable<IConsumer | undefined> {
    return this.http.delete<IConsumer>(this.endpoint+'/'+id).pipe(
      untilDestroyed(this),
      catchError(this.handleError)
    );
  }

  getConsumerLogs(id: number): Observable<IConsumerHistory[] | undefined> {
    return this.http.get<IConsumerHistory[]>(this.endpoint+'/History/'+id).pipe(
      untilDestroyed(this),
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

