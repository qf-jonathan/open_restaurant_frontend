import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';

const MODULES = [
  MatButtonModule, MatToolbarModule, MatCardModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialContainerModule {
}
