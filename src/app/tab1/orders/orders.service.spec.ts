import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { OrdersService } from './orders.service';
import { ordersPage1 } from './mocks/orders-page1';

describe('OrdersService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let ordersService: OrdersService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    ordersService = new OrdersService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(ordersService).toBeTruthy();
  });

  it('should return expected orders and pagination metadata', () => {
    httpClientSpy.get.and.returnValue(of(ordersPage1));
   
    ordersService.getOrders(1).subscribe(
      orders => expect(orders).toEqual(ordersPage1, 'expected orders'),
      fail
    );
  });
});
