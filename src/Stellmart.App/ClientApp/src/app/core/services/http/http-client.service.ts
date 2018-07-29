import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService,
      ) { }

      /**
       * Get API wrapper
       * @param endpoint The endpoint you want to call;
       * @param params The params you want to pass in
      */
      public get<T>(endpoint: string, params: HttpParams): Observable<T> {
        return this.authenticationService.GetToken()
          .map((jwtToken: string) => ({
            headers: new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`),
            params: params
          }))
          .mergeMap((options: { headers: HttpHeaders, params: HttpParams }) =>
            this.http.get<T>(endpoint, options)
          );
      }

      /**
       * Post API wrapper
       * @param endpoint The endpoint you want to call
       * @param body The body for the post request
       * @param params The params you want to pass in
      */
      public post<T>(endpoint: string, body: any, params: HttpParams): Observable<T> {
        return this.authenticationService.GetToken()
          .map((jwtToken: string) => ({
            headers: new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`),
            params: params
          }))
          .mergeMap((options: { headers: HttpHeaders, params: HttpParams }) =>
            this.http.post<T>(endpoint, body, options)
          );
      }

      /**
       * Put API wrapper
       * @param endpoint The endpoint you want to call
       * @param body The body for the post request
       * @param params The params you want to pass in
      */
      public put<T>(endpoint: string, body: any, params: HttpParams): Observable<T> {
        return this.authenticationService.GetToken()
          .map((jwtToken: string) => ({
            headers: new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`),
            params: params
          }))
          .mergeMap((options: { headers: HttpHeaders, params: HttpParams }) =>
            this.http.put<T>(endpoint, body, options)
          );
      }

      /**
       * Delete API wrapper
       * @param endpoint The endpoint you want to call
       * @param params The params you want to pass in
      */
      public delete<T>(endpoint: string, params: HttpParams): Observable<T> {
        return this.authenticationService.GetToken()
          .map((jwtToken: string) => ({
            headers: new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`),
            params: params
          }))
          .mergeMap((options: { headers: HttpHeaders, params: HttpParams }) =>
            this.http.delete<T>(endpoint, options)
          );
      }
}
