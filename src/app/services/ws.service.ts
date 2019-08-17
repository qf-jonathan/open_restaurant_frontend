import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  wsUrl = environment.wsUrl;

  constructor() {
  }

  getAmbientSocket() {
    return new WebSocketSubject(`${this.wsUrl}ambient/`);
  }

  getKitchenSocket() {
    return new WebSocketSubject(`${this.wsUrl}kitchen/`);
  }
}
