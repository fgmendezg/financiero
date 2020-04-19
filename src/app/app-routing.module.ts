import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinterfaceComponent } from './userinterface/userinterface.component';

export const routes: Routes = [
  {
    path: 'auth',
    //loadChildren: './auth/auth.module#NgxAuthModule'
    loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule)
  },
  /* {
    path: '',
    loadChildren: () => import('./userinterface/userinterface.module').then(m => m.UserinterfaceModule)
  }, */
  {
    path: 'dashboard',
    //component:UserinterfaceComponent
    loadChildren: () => import('./userinterface/userinterface.module').then(m => m.UserinterfaceModule)
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
