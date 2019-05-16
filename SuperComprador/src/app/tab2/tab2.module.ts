import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ListPedidosComponent } from '../list-pedidos/list-pedidos.component';
import { PedidosService } from '../shared/services/pedidos.service';
import { HttpService } from '../shared/services/http.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab2Page },
      { path: '/list', component: ListPedidosComponent }
    ])
  ],
  declarations: [Tab2Page, ListPedidosComponent],
  providers: [PedidosService, HttpService, ListPedidosComponent]
})
export class Tab2PageModule {}
