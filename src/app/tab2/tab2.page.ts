import { Component } from '@angular/core';
import { PedidoService } from '@services/api/pedido/pedido.service'
import { LoadingController } from '@ionic/angular';
import { LoadConfig }  from '@services/config/loading.js'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  allPedidos: any = [{
    data: []
  }];

  response: any = {
    data: [],
    page: 1,
    per_page: 3,
    total: 12,
    total_pages: 4,
  };

  constructor(
    public pedido: PedidoService,
    public loadingController: LoadingController
  ) {
    this.getPedidos()
  }

  async getPedidos(){
    const loading = await this.loadingController.create(LoadConfig);
    await loading.present();

    this.response = await this.pedido.getAllPedidos()
    this.allPedidos = this.response.data;
    loading.onDidDismiss(); 
  }

}
