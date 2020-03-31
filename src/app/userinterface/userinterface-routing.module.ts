import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserinterfaceComponent } from './userinterface.component' 

export const routes: Routes = [
  {
    path: '',
    component: UserinterfaceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}