import { Component } from '@angular/core';
import { ListPedidosComponent } from '../list-pedidos/list-pedidos.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  comprador: boolean = true;

  constructor(private _listPedidos: ListPedidosComponent) {}
  ngOnInit() {}

  atualizarBtnIniciar(event: any) {
    this.comprador = !this.comprador;
    this._listPedidos.atualizarStatusComprador(this.comprador);
  }
}
