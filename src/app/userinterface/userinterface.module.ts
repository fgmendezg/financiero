import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuItem, NbMenuModule, NbUserModule } from '@nebular/theme';
import { UserinterfaceComponent } from './userinterface.component';
import { routes } from  './userinterface-routing.module';
import { NbIconModule, NbActionsModule, NbCardModule } from '@nebular/theme';
import { ComofuncionaModule } from './comofunciona/comofunciona.module'
import { HomeuserModule } from './homeuser/homeuser.module';
import { PreguntasfrecuentesModule } from './preguntasfrecuentes/preguntasfrecuentes.module';

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
    NbActionsModule,
    ComofuncionaModule,
    HomeuserModule,
    NbCardModule,
    PreguntasfrecuentesModule,
    NbUserModule
  ],
  exports: [
    UserinterfaceComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserinterfaceModule { }
