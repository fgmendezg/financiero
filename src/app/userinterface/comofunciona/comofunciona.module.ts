import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComofuncionaComponent } from './comofunciona.component';
import { NbStepperModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { FormularioComponent } from './formulario/formulario.component';
import { AdDocumentosComponent } from './ad-documentos/ad-documentos.component';



@NgModule({
  declarations: [ComofuncionaComponent, FormularioComponent, AdDocumentosComponent],
  imports: [
    CommonModule,
    NbStepperModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule
  ],
  exports: [
    ComofuncionaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComofuncionaModule { }
