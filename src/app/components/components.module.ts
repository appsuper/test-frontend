import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Components
import { CardItemPedidoComponent } from './card-item-pedido/card-item-pedido.component'

@NgModule({
  declarations: [CardItemPedidoComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CardItemPedidoComponent
  ]
})
export class ComponentsModule { }
