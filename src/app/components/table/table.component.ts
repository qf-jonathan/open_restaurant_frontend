import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: Table;

  constructor() {
  }

  ngOnInit() {
  }

  orderFilter(state: number) {
    return this.table.orders.filter(e => e.state === state);
  }
}
