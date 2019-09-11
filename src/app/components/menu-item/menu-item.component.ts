import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menu: Menu;
  @Input() counter: number;
  @Output() addOrder = new EventEmitter();
  @Output() removeOrder = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.addOrder.emit(this.menu);
  }

  remove() {
    this.removeOrder.emit(this.menu);
  }
}
