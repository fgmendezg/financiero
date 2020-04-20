import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinterfaceModule } from './userinterface/userinterface.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbDummyAuthStrategy, NbOAuth2AuthStrategy, NbOAuth2ResponseType } from '@nebular/auth';
import { NbSidebarService, NbCardModule } from '@nebular/theme';
import { HomeuserModule } from './userinterface/homeuser/homeuser.module';
import { OAuth2CallbackComponentComponent } from './auth/login/oauth2-callback-component/oauth2-callback-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OAuth2CallbackComponentComponent
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
    NbButtonModule,
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
        /* NbDummyAuthStrategy.setup({
          name: 'email'
        }), */
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '104502519653-uohig6lveg0reet2hsherfit0gdm8ln2.apps.googleusercontent.com',
          clientSecret: '',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            redirectUri: 'http://localhost:4200/callback'
          }
        })
      ],
      forms: {},
    }),
    UserinterfaceModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
  //bootstrap: [UserinterfaceComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
