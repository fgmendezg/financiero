import { Component, OnInit } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent {

  // Registra el usuario en base de datos
  onSubmit(f: NgForm):void {
    console.log(f.value.fullName);
  }
  
}
