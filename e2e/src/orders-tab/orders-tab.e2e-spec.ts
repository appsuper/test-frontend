import { OrdersTabPage } from './orders-tab.po';
import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Element } from '@angular/compiler';

describe('Orders (Pedidos) Tab', () => {
  let page: OrdersTabPage = new OrdersTabPage();

  page.navigateTo();

  it('should display "SuperComprador" on title', () => {
    const title = page.getTitle();
    expect(title).toContain('SuperComprador');
  });

  // os testes abaixo esperam que existam mais de 12 pedidos no servidor

  it('should load the first page of orders', () => {
    browser.sleep(2000);
    expect(page.getOrdersList().count()).toBeGreaterThan(0);
  });

  // it('should load the second page of orders on scroll down', () => {
  //   browser.executeScript('document.querySelector(".inner-scroll").scrollTop = document.querySelector(".inner-scroll").scrollHeight;');
  //   browser.sleep(2000);
  //   expect(page.getOrdersList().count()).toBeGreaterThan(6);
  // });


});
