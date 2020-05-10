import { Component, ViewChild } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';
import { NgForm } from '@angular/forms';
import { ConexionregistroComponent } from './conexionregistro/conexionregistro.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent {
  @ViewChild('cnregistro') cnRegistro:ConexionregistroComponent;

  // Registra el usuario en base de datos
  onSubmit(f: NgForm): void {
    var nombre = f.value.fullName.split(" ");
    var apellidos = f.value.fullLastName.split(" ");

    var losNombres = this.setNombres(nombre);
    var losApellidos = this.setNombres(apellidos);

    this.cnRegistro.register(losNombres, losApellidos, f.value.email, f.value.password);
  }

  // Recibe una lista de Nombres o apellidos y lo asigna a las dos cadenas correspondientes
  setNombres(cadena: string[]) {
    var variable1 = "";
    var variable2 = "";

    for (var i = 0; i < cadena.length; i++) {
      if (i == 0) {
        variable1 = cadena[i];
      }
      else {
        if (variable2 == "") { variable2 = cadena[i]; }
        else { variable2 = variable2 + " " + cadena[i]; }
      }
    }

    return [variable1, variable2];

  }

}
