import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Ambient } from '../../models/ambient';

@Component({
  selector: 'app-ambient',
  templateUrl: './ambient.component.html',
  styleUrls: ['./ambient.component.scss']
})
export class AmbientComponent implements OnInit {
  @Input() ambient: Ambient;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }
}
