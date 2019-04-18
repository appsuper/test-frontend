import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-item-pedido',
  templateUrl: './card-item-pedido.component.html',
  styleUrls: ['./card-item-pedido.component.scss'],
})
export class CardItemPedidoComponent implements OnInit {
  
  @Input() items: any[];

  constructor() { }

  ngOnInit() {}

}
