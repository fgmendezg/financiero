import { Component, OnInit, Inject } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';
import { NgForm } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
/* import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core'; */


//Servicios
import { ApirestService } from '../../services/apirest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent {
  //private apiService: ApirestService
  /* protected http: HttpClient
  protected authService: NbAuthService
  protected router: Router */

  response: any = [];
  dateUserApi: any = [];

  //protected options: {};
  /* constructor(protected service: NbAuthService, @Inject({}) options: {}, protected cd: ChangeDetectorRef, protected router: Router, private apiService: ApirestService){
    super(service,options,cd,router);
  } */

  // Registra el usuario en base de datos
  onSubmit(f: NgForm): void {
    //this.apiService = new ApirestService(this.http, this.authService, this.router);

    var nombre = f.value.fullName.split(" ");
    var apellidos = f.value.fullLastName.split(" ");

    var losNombres = this.setNombres(nombre);
    var losApellidos = this.setNombres(apellidos);

    //var res = this.apiService.newUser(f.value.email, losNombres[0], losNombres[1], losApellidos[0], losApellidos[1], f.value.password);


    /* this.apiService.getNameDocs()
      .subscribe(
        (data) => { // Success
          this.dateUserApi = data;
          console.log(this.dateUserApi);
        },
        (error) => {
          console.error(error);
        }
      ); */

    //console.log(res);

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
