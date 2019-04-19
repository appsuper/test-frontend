import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { ordersPage1 } from './mocks/orders-page1';
import { of } from 'rxjs';
import { OrdersService } from './orders.service';
import { HttpErrorResponse } from '@angular/common/http';



describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let ordersService;

  const createSpy = () => {
    ordersService = jasmine.createSpyObj('OrdersService', ['getOrders']);
  };

  const beforeSteps = () => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      providers: [
        { provide: OrdersService, useValue: ordersService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
  };

  const beforeSpyWithResponse = () => {
    createSpy();
    ordersService.getOrders.and.returnValue( of(ordersPage1) );
    beforeSteps();
  };

  const beforeSpyWithError = () => {
    createSpy();
    ordersService.getOrders.and.throwError("Http Error");
    beforeSteps();
  };

  

  it('should create', () => {
    beforeSpyWithResponse();
    expect(component).toBeTruthy();
  });

  it('should have orders page 1 metadata on init',  () => {
    beforeSpyWithResponse();
    fixture.detectChanges();
    expect(component.pagesMeta).toEqual(ordersPage1.meta);
    expect([].concat(component.orders)).toEqual(ordersPage1.orders);
  });

  // it('should set error variable as true and show error message when the call to getOrders return an error',  () => {
  //   beforeSpyWithError();
  //   fixture.detectChanges();
  //   expect(component.error).toBeTruthy();
  //   const ordersComponentDe: DebugElement = fixture.debugElement;
  //   const ordersComponentEl: HTMLElement = ordersComponentDe.nativeElement;
  //   const errorMsg = ordersComponentEl.querySelector('.errorMsg');
  //   expect(errorMsg).toBeDefined();
  // });

});
