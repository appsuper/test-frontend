import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardComponent } from './order-card.component';

describe('OrderCardComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCardComponent, TestHostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should show data passed as @Input', () => {
    expect(testHostFixture.nativeElement.querySelector('.order-id').innerText).toEqual('Pedido #00001');
    expect(testHostFixture.nativeElement.querySelector('.order-status').innerText).toEqual('Pagamento confirmado');
    expect(testHostFixture.nativeElement.querySelector('.order-delivery').innerText).toEqual('Delivery');
  });

  it('should format correctly the colors according to data passed as @Input', () => {
    expect(testHostFixture.nativeElement.querySelector('.order-card').className.split(' ').find((c) => c === 'border-color-purple')).toBeTruthy();
    expect(testHostFixture.nativeElement.querySelector('.order-status').className.split(' ').find((c) => c === 'color-green')).toBeTruthy();
    expect(testHostFixture.nativeElement.querySelector('.order-delivery').className.split(' ').find((c) => c === 'color-purple')).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    template: `<app-order-card [order]="orderMock"></app-order-card>`
  })
  class TestHostComponent {
    orderMock = {
      "id": "00001",
      "status": "Pagamento confirmado",
      "statusCode": 2,
      "delivery": "Delivery",
      "deliveryCode": 1
    };
  }

});
