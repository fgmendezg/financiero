import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComofuncionaComponent } from './comofunciona.component';
import { NbStepperModule, NbButtonModule, NbCardModule, NbInputModule, NbWindowModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { FormularioComponent } from './formulario/formulario.component';
import { AdDocumentosComponent } from './ad-documentos/ad-documentos.component';
import { EditarDatosComponent } from './formulario/editar-datos/editar-datos.component';
import { DialogArchivosCargadosComponent } from './ad-documentos/dialog-archivos-cargados/dialog-archivos-cargados.component';



@NgModule({
  declarations: [ComofuncionaComponent, FormularioComponent, AdDocumentosComponent, EditarDatosComponent, DialogArchivosCargadosComponent],
  imports: [
    CommonModule,
    NbStepperModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbWindowModule.forChild(),
    NbSelectModule,
    NbSpinnerModule
  ],
  exports: [
    ComofuncionaComponent,
    FormularioComponent,
    AdDocumentosComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComofuncionaModule { }
