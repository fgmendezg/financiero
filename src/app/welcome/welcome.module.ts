import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { routes } from  './welcome-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }
