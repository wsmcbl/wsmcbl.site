import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {ModuleType} from './module-type';
import {environment} from '../environments/environment';

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

  async get<T>(module: ModuleType, resource: string, defaultResult: T): Promise<T>
  {
    const url = this.buildUri(module, resource);

    try
    {
      return await firstValueFrom(this.httpClient.get<T>(url));
    }
    catch (error: any)
    {
      this.handleError(error);
      return defaultResult;
    }
  }

  async getFile(module: ModuleType, resource: string): Promise<Blob>
  {
    const url = this.buildUri(module, resource);

    try
    {
      return await firstValueFrom(this.httpClient.get(url, { responseType: 'blob' }));
    }
    catch (error: any)
    {
      this.handleError(error);
      return new Blob();
    }
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

  private handleError(error: any): void
  {
    if (error.error?.detail)
    {
      console.error('API Error:', error.error.detail);
      throw new Error(error.error.detail);
    }

    throw new Error('Unexpected API error.git');
  }
}
