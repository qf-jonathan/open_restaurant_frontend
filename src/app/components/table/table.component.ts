import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Table } from '../../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: Table;

  @Input() set size(value: number) {
    this.el.nativeElement.style.height = `${value}px`;
    this.el.nativeElement.style.width = `${value}px`;
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  orderFilter(state: number) {
    return this.table.orders.filter(e => e.state === state);
  }
}
