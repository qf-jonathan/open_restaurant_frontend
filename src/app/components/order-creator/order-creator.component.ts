import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Table } from '../../models/table';
import { ApiService } from '../../services/api.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-creator',
  templateUrl: './order-creator.component.html',
  styleUrls: ['./order-creator.component.scss']
})
export class OrderCreatorComponent implements OnInit {
  menu: Menu[];
  orderResume = {};

  constructor(
    public dialogRef: MatDialogRef<OrderCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public table: Table,
    private api: ApiService) {
  }

  ngOnInit() {
    this.api.getMenu().subscribe((menuList) => {
      this.menu = menuList;
    });
    this.setInitial();
  }

  setInitial() {
    this.table.orders.forEach((order) => {
      if (order.state === 1) {
        if (!(order.menu in this.orderResume)) {
          this.orderResume[order.menu] = [];
        }
        this.orderResume[order.menu].push({
          menu: order.menu,
          table: this.table.id,
          detail: ''
        });
      }
    });
  }

  addOrder(menu: Menu) {
    if (!(menu.id in this.orderResume)) {
      this.orderResume[menu.id] = [];
    }
    this.orderResume[menu.id].push({
      menu: menu.id,
      table: this.table.id,
      detail: ''
    });
  }

  removeOrder(menu: Menu) {
    if (menu.id in this.orderResume && this.orderResume[menu.id].length > 0) {
      this.orderResume[menu.id].splice(-1, 1);
    }
  }

  getOrderCounter(menu: Menu) {
    if (menu.id in this.orderResume) {
      return this.orderResume[menu.id].length;
    }
    return 0;
  }

  save() {
    this.dialogRef.close(this.orderResume);
  }

  close() {
    this.dialogRef.close();
  }
}
