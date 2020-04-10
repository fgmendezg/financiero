import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbDummyAuthStrategy, } from '@nebular/auth';
import { NbSidebarService, NbCardModule } from '@nebular/theme';
import { HomeuserModule } from './userinterface/homeuser/homeuser.module';
//import { UserinterfaceModule } from './userinterface/userinterface.module';
import { UserinterfaceComponent } from './userinterface/userinterface.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NbMenuModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbCardModule,
    HomeuserModule,
    NbAuthModule.forRoot({
      strategies: [
        /*NbPasswordAuthStrategy.setup({
          name: 'email',
          
          login: {
            redirect: {
              success: '/dashboard/',
              failure: null, // stay on the same page
            },
          }
        }),*/
        NbDummyAuthStrategy.setup({
          name: 'email'
        }),
      ],
      forms: {},
    })
  ],
  providers: [NbSidebarService],
  //bootstrap: [AppComponent],
  bootstrap: [UserinterfaceComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
