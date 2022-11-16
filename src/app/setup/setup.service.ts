import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, Observable, throwError } from 'rxjs';
import { ISetup } from './setup';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class SetupService {

  private endpoint = 'https://localhost:7070/api/Setup';

  constructor(private http: HttpClient) { }

  getSetup(): Observable<ISetup> {
    return this.http.get<ISetup>(this.endpoint).pipe(
      untilDestroyed(this),
      catchError(this.handleError)
    );
  }

  updateSetup(id: number, setup: ISetup): Observable<ISetup | undefined> {
    return this.http.put<ISetup>(this.endpoint+'/'+id, setup).pipe(
      untilDestroyed(this),
      catchError(this.handleError)
    );
  }

  addSetup(setup: ISetup): Observable<ISetup> {
    return this.http.post<ISetup>(this.endpoint, setup).pipe(
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
