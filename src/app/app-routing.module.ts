import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinterfaceComponent } from './userinterface/userinterface.component';
import { ComofuncionaComponent } from './userinterface/comofunciona/comofunciona.component';
import { PreguntasfrecuentesComponent } from './userinterface/preguntasfrecuentes/preguntasfrecuentes.component';
import { OAuth2CallbackComponentComponent } from './auth/login/oauth2-callback-component/oauth2-callback-component.component';
import { TabsethomeComponent } from './userinterface/tabsethome/tabsethome.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { NgxLoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: UserinterfaceComponent,
    children: [
      {
        path: '',
        component: TabsethomeComponent
      },
      {
        path: 'home',
        component: TabsethomeComponent
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
    path: 'callback',
    component: OAuth2CallbackComponentComponent,
  },
  {
    path: 'welcome',
    //loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
    component: WelcomeComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
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
