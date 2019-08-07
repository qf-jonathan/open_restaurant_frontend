import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Ambient } from '../../models/ambient';

@Component({
  selector: 'app-attention',
  templateUrl: './attention-page.component.html',
  styleUrls: ['./attention-page.component.scss']
})
export class AttentionPageComponent implements OnInit {
  ambients: Ambient[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getAmbients().subscribe(data => {
      this.ambients = data;
    });
  }
}
