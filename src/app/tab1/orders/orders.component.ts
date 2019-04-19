import { Component, OnInit, ViewChild } from '@angular/core';

import { OrdersService } from './orders.service';
import { Order } from './entities/order.interface';
import { OrdersPageMeta } from './entities/orders-page-meta.interface';

import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  nextPage: number;
  pagesMeta: OrdersPageMeta; 
  orders: Order[] = [];

  error = false;
  errorMsg = '';
  isNoScrollLoading = true;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(event = null) {
    if (!event) {
      this.isNoScrollLoading = true;
    }
    this.ordersService.getOrders(this.nextPage).subscribe( res => {
      this.pagesMeta = res.meta;
      this.nextPage = this.pagesMeta.currentPage + 1;
      this.orders = this.orders.concat(res.orders);
      (event && event.target.complete()) || this.infiniteScroll.complete();
      if (this.pagesMeta.currentPage === this.pagesMeta.pages) {
        (event && (event.target.disabled = true)) || (this.infiniteScroll.disabled = true);
      }
    }, error => {
      this.error = true;
      this.errorMsg = 'Houve um erro ao carregar os seus pedidos!';
    },
      () => {
        this.isNoScrollLoading = false;
      }
    );
   
  }

  reloadOrders() {
    this.error = false;
    this.getOrders();
  }

}