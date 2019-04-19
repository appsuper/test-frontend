import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { ordersPage1 } from './mocks/orders-page1';
import { ordersPage2 } from './mocks/orders-page2';
import { of } from 'rxjs';
import { OrdersService } from './orders.service';



describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(() => {
    const ordersService = jasmine.createSpyObj('OrdersService', ['getOrders']);
    ordersService.getOrders.and.returnValue( of(ordersPage1) );
    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      providers: [
        { provide: OrdersService, useValue: ordersService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have orders page 1 metadata on init',  () => {
    fixture.detectChanges();
    expect(component.pagesMeta).toEqual(ordersPage1.meta);
  });

});
