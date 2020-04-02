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

@NgModule({
  declarations: [
    AppComponent
    //UserinterfaceComponent
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
          name: 'email',
        }),
      ],
      forms: {},
    })
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
  //bootstrap: [NgxLoginComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
