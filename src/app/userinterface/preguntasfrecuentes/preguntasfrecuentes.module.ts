import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes.component';
import { NbAccordionModule } from '@nebular/theme';


@NgModule({
  declarations: [PreguntasfrecuentesComponent],
  imports: [
    CommonModule,
    NbAccordionModule
  ],
  exports: [
    PreguntasfrecuentesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PreguntasfrecuentesModule { }
