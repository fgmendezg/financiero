import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { routes } from  './welcome-routing.module';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbButtonModule, NbSidebarModule, NbCardModule } from '@nebular/theme';
import { NgxAuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbSidebarModule,
    NgxAuthModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WelcomeModule { }
