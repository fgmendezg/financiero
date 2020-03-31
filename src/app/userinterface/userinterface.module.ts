import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { UserinterfaceComponent } from './userinterface.component';
import { routes } from  './userinterface-routing.module';



@NgModule({
  declarations: [
    UserinterfaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
  ],
  exports: [
    UserinterfaceComponent
  ]
})
export class UserinterfaceModule { }
