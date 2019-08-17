import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatToolbarModule } from '@angular/material';

const MODULES = [
  MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialContainerModule {
}
