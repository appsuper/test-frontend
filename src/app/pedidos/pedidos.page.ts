import { Pedido } from './../models/pedido';
import { PedidosService } from './pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pedidos',
	templateUrl: 'pedidos.page.html',
	styleUrls: ['pedidos.page.scss']

})
export class PedidosPage implements OnInit {

	pedidos: Pedido[];

	constructor(private service: PedidosService) { }


	ngOnInit() {
		this.service.retornarPedidos().subscribe(
			(pedidos: Pedido[]) => {
				this.pedidos = pedidos;
				console.log(this.pedidos);
			}
		);
	}
}
