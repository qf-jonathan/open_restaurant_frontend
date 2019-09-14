import { Component, OnDestroy, OnInit } from '@angular/core';
import { WsService } from '../../services/ws.service';
import { WebSocketSubject } from 'rxjs/webSocket';
import { ActivatedRoute } from '@angular/router';
import { Ambient } from '../../models/ambient';
import { MatDialog } from '@angular/material';
import { OrderCreatorComponent } from '../../components/order-creator/order-creator.component';
import { Table } from '../../models/table';

@Component({
  selector: 'app-ambient-page',
  templateUrl: './ambient-page.component.html',
  styleUrls: ['./ambient-page.component.scss']
})
export class AmbientPageComponent implements OnInit, OnDestroy {
  ambientId: number;
  ambientSocket: WebSocketSubject<any>;

  ambient: Ambient;

  constructor(private ws: WsService, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ambientId = Number(params.id);
      this.ambientSocket = this.ws.getAmbientSocket();
      this.ambientSocket.subscribe(
        (data) => this.eventConsumer(data),
        (error) => console.log(error),
        () => console.warn('closed socket')
      );
    });
  }

  ngOnDestroy(): void {
    if (this.ambientSocket) {
      this.ambientSocket.unsubscribe();
    }
  }

  private eventConsumer(data) {
    if (data.type === 'initial_ambients') {
      const selecteAmbient = data.ambients.find(ambient => ambient.id === this.ambientId);
      if (selecteAmbient) {
        this.prepareAmbient(selecteAmbient);
      } else {
        // todo invalid ambient
      }
    }
  }

  private prepareAmbient(selectedAmbient) {
    this.ambient = selectedAmbient as Ambient;
    console.log(this.ambient);
  }

  openOrderCreator(table: Table) {
    const dialogRef = this.dialog.open(OrderCreatorComponent, {
      width: 'calc(100vw - 20px)',
      height: 'calc(100vh - 20px)',
      data: table
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.processOrder(result);
    });
  }

  processOrder(result: any) {
    console.log(result);
  }
}
