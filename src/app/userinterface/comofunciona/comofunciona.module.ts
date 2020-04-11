import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComofuncionaComponent } from './comofunciona.component';
import { NbStepperModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [ComofuncionaComponent, FormularioComponent],
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
