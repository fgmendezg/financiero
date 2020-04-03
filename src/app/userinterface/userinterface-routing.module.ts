import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserinterfaceComponent } from './userinterface.component'
import { ComofuncionaComponent } from './comofunciona/comofunciona.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';

export const routes: Routes = [
  {
    path: '',
    component: UserinterfaceComponent
  },
  {
    path: 'ComofuncionaComponent',
    component:ComofuncionaComponent
  },
  {
    path: 'home',
    component:HomeuserComponent
  },
  {
    path: 'frecuentes',
    component:PreguntasfrecuentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}