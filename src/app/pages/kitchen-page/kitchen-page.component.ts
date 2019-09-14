import { Component, OnInit } from '@angular/core';
import { WsService } from '../../services/ws.service';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { Order } from '../../models/order';

@Component({
  selector: 'app-kitchen-page',
  templateUrl: './kitchen-page.component.html',
  styleUrls: ['./kitchen-page.component.scss']
})
export class KitchenPageComponent implements OnInit {
  kitchenSocket: WebSocketSubject<any>;
  orders: Order[] = [];

  constructor(private ws: WsService) {
  }

  ngOnInit() {
    this.kitchenSocket = this.ws.getKitchenSocket();
    this.kitchenSocket.subscribe(
      (data) => this.eventConsumer(data),
      (error) => console.log(error),
      () => console.warn('closed socket')
    );
  }

  private eventConsumer(data) {
    if (data.type === 'initial_orders') {
      this.orders = data.orders;
    }
  }

  ordersType(type: number) {
    return this.orders.filter((order) => order.state === type);
  }
}
