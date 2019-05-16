import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../shared/services/pedidos.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.scss']
})
export class ListPedidosComponent implements OnInit {
  pedidos: Array<Pedido>;
  statusComprador = true;
  constructor(private _pedidosService: PedidosService) {}
  ngOnInit() {
    this.ListarPedidos();
  }

  atualizarStatusComprador(status: boolean) {
    this.statusComprador = status;
  }
  ListarPedidos(): void {
    this.pedidos = this._pedidosService.getPedidos();
  }
}
