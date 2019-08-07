import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() set size(value: number) {
    this.el.nativeElement.style.height = `${value}px`;
    this.el.nativeElement.style.width = `${value}px`;
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

}
