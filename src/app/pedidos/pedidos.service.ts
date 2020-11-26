import { Pedido } from './../models/pedido';
import { map } from 'rxjs/operators';
import { API } from './../api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class PedidosService {

	constructor(private http: HttpClient) { }

	retornarPedidos() {
		return this.http.get<Pedido[]>(`${API}/pedidos`, { observe: 'response' }).pipe(
			map(response => response.body)
		);
	}
}
