import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Table } from '../../models/table';
import { ApiService } from '../../services/api.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-creator',
  templateUrl: './menu-creator.component.html',
  styleUrls: ['./menu-creator.component.scss']
})
export class MenuCreatorComponent implements OnInit {
  menu: Menu[];

  constructor(
    public dialogRef: MatDialogRef<MenuCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public table: Table,
    private api: ApiService) {
  }

  ngOnInit() {
    this.api.getMenu().subscribe((menuList) => {
      this.menu = menuList;
    });
  }

  close() {
    this.dialogRef.close();
  }
}
