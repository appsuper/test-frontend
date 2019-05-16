import { HttpService } from '../services/http.service';
import { Pedido } from '../../models/pedido';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PedidosService {
  constructor(private http: HttpService) {}

  getPedidos(): any {
    let pedidos = new Array<Pedido>();
    let r = this.http.getObs('pedidos').subscribe(peds => {
      peds.forEach(ped => {
        pedidos.push(ped);
      });
    });
    return pedidos;
  }
}
