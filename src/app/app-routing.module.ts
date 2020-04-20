import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinterfaceComponent } from './userinterface/userinterface.component';
import { HomeuserComponent } from './userinterface/homeuser/homeuser.component';
import { ComofuncionaComponent } from './userinterface/comofunciona/comofunciona.component';
import { PreguntasfrecuentesComponent } from './userinterface/preguntasfrecuentes/preguntasfrecuentes.component';

export const routes: Routes = [
  /* {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule)
  }, */
  {
    path: 'dashboard',
    component:UserinterfaceComponent,
    children: [
      {
        path: '',
        component: HomeuserComponent
      },
      {
        path: 'home',
        component: HomeuserComponent
      },
      {
        path: 'ComofuncionaComponent',
        component: ComofuncionaComponent
      },
      {
        path: 'frecuentes',
        component: PreguntasfrecuentesComponent
      }
    ]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
    //component: UserinterfaceComponent
  }
];

/*
export const routes: Routes = [
  // ... 

  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },

];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
