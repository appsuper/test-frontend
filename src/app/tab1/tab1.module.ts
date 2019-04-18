import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { OrdersComponent } from './orders/orders.component';
import { ComponentsModule } from './../components/components.module';
import { OrderCardComponent } from './orders/order-card/order-card.component';
import { OrdersService } from './orders/orders.service';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, OrdersComponent, OrderCardComponent],
  providers: [ 
    OrdersService
  ]
})
export class Tab1PageModule {}
