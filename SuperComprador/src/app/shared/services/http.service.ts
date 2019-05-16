import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, } from '@angular/common/http';

// CONSTANT
@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private router: Router) {}

  prepareUrl(endpoint, data: Array<any> = null): string {
    let url = 'http://demo0680981.mockable.io/' + endpoint;
    if (data) {
      url += '?';
    }
    for (const prop in data) {
      if (data[prop] !== null) {
        url += `${prop}=${data[prop]}&`;
      }
    }
    return url;
  }

  getObs(endpoint: string, data: any = null): Observable<any> {
    const url = this.prepareUrl(endpoint, data);
    return this.http.get<any>(url);
  }
}
