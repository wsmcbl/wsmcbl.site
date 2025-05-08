import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ModuleType} from './module-type';
import {catchError, Observable, throwError} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({providedIn: 'root'})

export class ApiConsumer
{
  private readonly server = this.getServerUri();

  constructor(private httpClient: HttpClient)
  {
  }

  private buildUri(module: ModuleType, resource: string): string
  {
    return `${this.server}/${module}/${resource.replace(/^\/+/, '')}`;
  }

  get<T>(module: ModuleType, resource: string, defaultResult: T): Observable<T>
  {
    const url = this.buildUri(module, resource);

    return this.httpClient.get<T>(url).pipe(
      catchError((error) => this.handleError<T>(error, defaultResult)));
  }

  getFile(module: ModuleType, resource: string): Observable<Blob> {
    const url = this.buildUri(module, resource);

    return this.httpClient.get(url, { responseType: 'blob' }).pipe(
      catchError((error) => this.handleError<Blob>(error, new Blob()))
    );
  }

  private getServerUri(): string
  {
    const api = environment.apiUrl;

    if (!api)
    {
      throw new Error('API URL is not configured.');
    }

    return `${api}/v6`;
  }

  private handleError<T>(error: HttpErrorResponse, fallback: T): Observable<T>
  {
    console.error('API error:', error);
    return throwError(() => new Error(error.error?.detail || 'Error de servidor'));
  }
}
