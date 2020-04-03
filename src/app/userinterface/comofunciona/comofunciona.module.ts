import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComofuncionaComponent } from './comofunciona.component';
import { NbStepperModule, NbButtonModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [ComofuncionaComponent],
  imports: [
    CommonModule,
    NbStepperModule,
    NbButtonModule,
    NbCardModule
  ],
  exports: [
    ComofuncionaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComofuncionaModule { }
