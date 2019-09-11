import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialContainerModule } from './modules/material-container.module';
import { AttentionPageComponent } from './pages/attention-page/attention-page.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AmbientComponent } from './components/ambient/ambient.component';
import { AmbientPageComponent } from './pages/ambient-page/ambient-page.component';
import { OrderCreatorComponent } from './components/order-creator/order-creator.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AttentionPageComponent,
    TableComponent,
    AmbientComponent,
    AmbientPageComponent,
    OrderCreatorComponent,
    MenuItemComponent
  ],
  entryComponents: [OrderCreatorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
