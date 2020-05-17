import { Component, ViewChild } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { NgForm } from '@angular/forms';
import { ConexionloginComponent } from './conexionlogin/conexionlogin.component'

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
  @ViewChild('cnlogin') cnlogin:ConexionloginComponent;

  onSubmit(f: NgForm): void {
    this.cnlogin.login(f.value.email, f.value.password);
  }

}