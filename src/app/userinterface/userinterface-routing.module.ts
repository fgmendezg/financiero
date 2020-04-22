import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComofuncionaComponent } from './comofunciona/comofunciona.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';
import { TabsethomeComponent } from './tabsethome/tabsethome.component'

export const routes: Routes = [
  {
    path: '',
    component: TabsethomeComponent
  },
  {
    path: 'ComofuncionaComponent',
    component:ComofuncionaComponent
  },
  {
    path: 'home',
    component:TabsethomeComponent
  },
  {
    path: 'frecuentes',
    component:PreguntasfrecuentesComponent
  },
  {
    path: 'auth/login',
    loadChildren: () => import('../auth/auth.module').then(m => m.NgxAuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}