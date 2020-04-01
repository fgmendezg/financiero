import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComofuncionaComponent } from './comofunciona.component'

export const routes: Routes = [
  {
    path: '',
    component: ComofuncionaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}