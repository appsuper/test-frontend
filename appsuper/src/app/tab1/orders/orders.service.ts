import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'http(s)://5cb76829a3763800149fd698.mockapi.io/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(`${this.baseUrl}/orders`);
  }
}
