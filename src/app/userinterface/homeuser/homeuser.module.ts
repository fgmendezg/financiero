import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './homeuser.component';
import { NbStepperModule, NbButtonModule, NbCardModule, NbTreeGridModule } from '@nebular/theme';



@NgModule({
  declarations: [HomeuserComponent],
  imports: [
    CommonModule,
    NbStepperModule,
    NbButtonModule,
    NbCardModule,
    NbTreeGridModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [HomeuserComponent]
})
export class HomeuserModule { }
