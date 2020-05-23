import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule,
  NbSpinnerModule
} from '@nebular/theme';
import { NgxLoginComponent } from './login/login.component';
import { OAuth2LoginComponentComponent } from './login/oauth2-login-component/oauth2-login-component.component';
import { RegisterComponent } from './register/register.component';
import { ConexionregistroComponent } from './register/conexionregistro/conexionregistro.component';
import { ConexionloginComponent } from './login/conexionlogin/conexionlogin.component';


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
    NbAuthModule,
    NbSpinnerModule
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    OAuth2LoginComponentComponent,
    RegisterComponent,
    ConexionregistroComponent,
    ConexionloginComponent,
  ],
  exports: [
    NgxLoginComponent,
    OAuth2LoginComponentComponent,
    RegisterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NgxAuthModule {
}