import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialContainerModule } from './modules/material-container.module';
import { AttentionPageComponent } from './pages/attention-page/attention-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AmbientComponent } from './components/ambient/ambient.component';
import { AmbientPageComponent } from './pages/ambient-page/ambient-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AttentionPageComponent,
    TableComponent,
    AmbientComponent,
    AmbientPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialContainerModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
