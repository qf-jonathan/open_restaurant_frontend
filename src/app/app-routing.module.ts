import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttentionPageComponent } from './pages/attention-page/attention-page.component';
import { AmbientPageComponent } from './pages/ambient-page/ambient-page.component';
import { KitchenPageComponent } from './pages/kitchen-page/kitchen-page.component';


const routes: Routes = [
  {path: '', component: AttentionPageComponent},
  {path: 'ambient/:id', component: AmbientPageComponent},
  {path: 'kitchen', component: KitchenPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
