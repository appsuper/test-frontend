import { browser, by, element, promise } from 'protractor';

export class OrdersTabPage {
  navigateTo() {
    return browser.get('');
  }

  getTitle(): promise.Promise<string> {
    return element(by.css('.title')).getText();
  }

  getOrdersList() {
      return element.all(by.tagName('app-order-card'));
  }

}
