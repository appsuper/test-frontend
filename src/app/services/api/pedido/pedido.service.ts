import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { HttpClient} from '@angular/common/http';
import { Pedido } from './pedido';

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

  public createPedido(pedido: Pedido) {
    // will use this.http.post()
  }

  public getPedidoById(pedidoId: number) {
    // will use this.http.get()
  }

  // API: PUT /pedidos/:id
  public updatePedido(pedido: Pedido) {
    // will use this.http.put()
  }

  public deletePedidoById(pedidoId: number) {
    // will use this.http.delete()
  }

}
