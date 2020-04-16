import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComofuncionaComponent } from './comofunciona.component';
import { NbStepperModule, NbButtonModule, NbCardModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { FormularioComponent } from './formulario/formulario.component';
import { AdDocumentosComponent } from './ad-documentos/ad-documentos.component';
import { EditarDatosComponent } from './formulario/editar-datos/editar-datos.component';



@NgModule({
  declarations: [ComofuncionaComponent, FormularioComponent, AdDocumentosComponent, EditarDatosComponent],
  imports: [
    CommonModule,
    NbStepperModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbWindowModule.forChild(),
  ],
  exports: [
    ComofuncionaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComofuncionaModule { }
