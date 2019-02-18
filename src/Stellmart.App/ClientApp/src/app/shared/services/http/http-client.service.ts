import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { Dictionary } from '../../models/dictionary.model';
import { AppFacade } from 'src/app/store/facades/app,facade';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private facade: AppFacade
  ) {}

  /**
   * Get API wrapper
   * @param endpoint The endpoint you want to call;
   * @param params The params you want to pass in
   */
  public get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.facade.getConfig.pipe(
      withLatestFrom(this.authenticationService.GetToken()),
      map(([config, jwt]: [AppConfig, string]) => ({
        headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`),
        config: config
      })),
      mergeMap((options: { headers: HttpHeaders; config: AppConfig }) =>
        this.http.get<T>(options.config.AppSettings.ApiUrl + endpoint, {
          headers: options.headers,
          params: params
        })
      )
    );
  }

  /**
   * Post API wrapper
   * @param endpoint The endpoint you want to call
   * @param body The body for the post request
   * @param params The params you want to pass in
   */
  public post<T>(
    endpoint: string,
    body: any,
    params?: HttpParams
  ): Observable<T> {
    return this.facade.getConfig.pipe(
      withLatestFrom(this.authenticationService.GetToken()),
      map(([config, jwt]: [AppConfig, string]) => ({
        headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`),
        config: config
      })),
      mergeMap((options: { headers: HttpHeaders; config: AppConfig }) =>
        this.http.post<T>(options.config.AppSettings.ApiUrl + endpoint, body, {
          headers: options.headers,
          params: params
        })
      )
    );
  }

  /**
   * Put API wrapper
   * @param endpoint The endpoint you want to call
   * @param body The body for the post request
   * @param params The params you want to pass in
   */
  public put<T>(
    endpoint: string,
    body: any,
    params?: HttpParams
  ): Observable<T> {
    return this.facade.getConfig.pipe(
      withLatestFrom(this.authenticationService.GetToken()),
      map(([config, jwt]: [AppConfig, string]) => ({
        headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`),
        config: config
      })),
      mergeMap((options: { headers: HttpHeaders; config: AppConfig }) =>
        this.http.put<T>(options.config.AppSettings.ApiUrl + endpoint, body, {
          headers: options.headers,
          params: params
        })
      )
    );
  }

  /**
   * Patch API wrapper
   * @param endpoint The endpoint you want to call
   * @param body The body for the post request
   * @param params The params you want to pass in
   */
  public patch<T>(
    endpoint: string,
    body: any,
    params?: HttpParams
  ): Observable<T> {
    return this.facade.getConfig.pipe(
      withLatestFrom(this.authenticationService.GetToken()),
      map(([config, jwt]: [AppConfig, string]) => ({
        headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`),
        config: config
      })),
      mergeMap((options: { headers: HttpHeaders; config: AppConfig }) =>
        this.http.patch<T>(options.config.AppSettings.ApiUrl + endpoint, body, {
          headers: options.headers,
          params: params
        })
      )
    );
  }

  /**
   * Delete API wrapper
   * @param endpoint The endpoint you want to call
   * @param params The params you want to pass in
   */
  public delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.facade.getConfig.pipe(
      withLatestFrom(this.authenticationService.GetToken()),
      map(([config, jwt]: [AppConfig, string]) => ({
        headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`),
        config: config
      })),
      mergeMap((options: { headers: HttpHeaders; config: AppConfig }) =>
        this.http.delete<T>(options.config.AppSettings.ApiUrl + endpoint, {
          headers: options.headers,
          params: params
        })
      )
    );
  }

  /**
   * Builds the HTTP Params up
   * @param params The params you want in your httpParams
   */
  public buildHttpParams(params: Dictionary[]): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    for (let i: number = 0; i < params.length; i++) {
      httpParams = httpParams.append(params[i].key, params[i].value);
    }

    return httpParams;
  }
}
