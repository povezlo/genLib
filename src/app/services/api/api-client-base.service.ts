import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IHttpParams } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiClientBaseService {

  constructor(
    @Inject('ENV_API') private readonly apiUrl: string,
    @Inject('BASE_URL') private readonly baseUrl: string,
    private http: HttpClient
    ) { }

    
  get<T>(path: string, params?: IHttpParams): Observable<T> {
    const url = `${this.baseUrl}/${this.apiUrl}/${path}`;
    let httpParams: HttpParams;

    if(params) {
      httpParams = new HttpParams();
      Object.keys(params).forEach(function (key) {
      httpParams.append(key, params[key]);
    });
    }

    return this.http.get<T>(url, { params })
    .pipe(catchError((error: HttpErrorResponse) => throwError(() => error)),
      );
  }
}
