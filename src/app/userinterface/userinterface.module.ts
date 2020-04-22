import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbTabsetModule, NbMenuModule, NbUserModule, NbInputModule } from '@nebular/theme';
import { UserinterfaceComponent } from './userinterface.component';
import { routes } from  './userinterface-routing.module';
import { NbIconModule, NbActionsModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { ComofuncionaModule } from './comofunciona/comofunciona.module'
import { HomeuserModule } from './homeuser/homeuser.module';
import { PreguntasfrecuentesModule } from './preguntasfrecuentes/preguntasfrecuentes.module';
import { TabsethomeComponent } from './tabsethome/tabsethome.component';
import { DatosfinancierosComponent } from './datosfinancieros/datosfinancieros.component';

@NgModule({
  declarations: [
    UserinterfaceComponent,
    TabsethomeComponent,
    DatosfinancierosComponent
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
    NbUserModule,
    NbTabsetModule,
    NbInputModule,
    NbSelectModule
  ],
  exports: [
    UserinterfaceComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserinterfaceModule { }
