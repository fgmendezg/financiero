import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuItem, NbMenuModule } from '@nebular/theme';
import { UserinterfaceComponent } from './userinterface.component';
import { routes } from  './userinterface-routing.module';
import { NbIconModule, NbActionsModule } from '@nebular/theme';



@NgModule({
  declarations: [
    UserinterfaceComponent
  ],
  imports: [
    NbMenuModule,
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbIconModule,
    NbActionsModule
  ],
  exports: [
    UserinterfaceComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserinterfaceModule { }
