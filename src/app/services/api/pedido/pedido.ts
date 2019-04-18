export class Pedido {
  id: number;
  customerName: string;
  status = '';
  complete = false;
  paymentStatus = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}