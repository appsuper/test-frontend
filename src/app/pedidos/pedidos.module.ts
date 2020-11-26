import { PedidosService } from './pedidos.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidosPage } from './pedidos.page';

import { PedidosPageRoutingModule } from './Pedidos-routing.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		PedidosPageRoutingModule,
		HttpClientModule
	],
	providers: [PedidosService],
	declarations: [PedidosPage]
})
export class PedidosPageModule { }
