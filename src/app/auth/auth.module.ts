import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme';
import { NgxLoginComponent } from './login/login.component';
import { OAuth2LoginComponentComponent } from './login/oauth2-login-component/oauth2-login-component.component';
import { RegisterComponent } from './register/register.component';
//import { OAuth2CallbackComponentComponent } from './login/oauth2-callback-component/oauth2-callback-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbLayoutModule,
    //NgxAuthRoutingModule,

    NbAuthModule,
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    OAuth2LoginComponentComponent,
    RegisterComponent,
    //OAuth2CallbackComponentComponent
  ],
  exports: [
    NgxLoginComponent,
    OAuth2LoginComponentComponent,
    RegisterComponent
  ]
})
export class NgxAuthModule {
}