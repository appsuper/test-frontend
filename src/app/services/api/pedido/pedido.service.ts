import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient} from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient,) {}

  getAllPedidos () {
    return new Promise(resolve => {
      this.http.get(API_URL + '/api/unknown')
        .subscribe(res => resolve(res));
    });
  }

}
