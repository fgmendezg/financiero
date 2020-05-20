import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

//Servicios
import { ApirestService } from '../../../../services/apirest.service';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.component.html',
  styleUrls: ['./editar-datos.component.scss']
})
export class EditarDatosComponent implements OnInit {

  dateUser = {}
  p_nombre = "";
  s_nombre = "";
  p_apellido = "";
  s_apellido = "";
  numDocumento = "";
  email = "";
  departamento = "";
  ciudad = "";
  celular = "";
  telefono = "";

  isSelectDepartamento = true;

  ciudades = [];
  departamentos = [
    {
      name: 'Cundinamarca',
      value: [
        'Bogota',
        'Villeta'
      ]
    },
    {
      name: 'Antioquia',
      value: [
        'at1',
        'at2'
      ]
    }
  ];

  constructor(public windowRef: NbWindowRef, private apiService: ApirestService) {
    this.dateUser = JSON.parse(localStorage.getItem("data_user"));
    this.p_nombre = this.dateUser['primer_nombre'];
    this.s_nombre = this.dateUser['segundo_nombre'];
    this.p_apellido = this.dateUser['primer_apellido'];
    this.s_apellido = this.dateUser['segundo_apellido'];
    this.numDocumento = this.dateUser['num_identificacion'];
    this.email = this.dateUser['email'];
    this.departamento = this.dateUser['departamento'];
    this.ciudad = this.dateUser['ciudad'];
    this.celular = this.dateUser['celular'];
    this.telefono = this.dateUser['telefono'];
  }

  /* Evie los datos al back para se agregados o modificados */
  async eviarDatos() {
    this.numDocumento = (<HTMLInputElement>document.getElementById("input_documento")).value
    this.email = (<HTMLInputElement>document.getElementById("input_email")).value
    this.celular = (<HTMLInputElement>document.getElementById("input_celular")).value
    this.telefono = (<HTMLInputElement>document.getElementById("input_telefono")).value

    //TODO: Validar datos o habilitar boton hasta que todos los datos esten
    await this.apiService.standartUpdateUser(this.numDocumento, this.departamento, this.ciudad, this.celular, this.telefono);
    var segundosEspera = 0;
    for (segundosEspera = 0; segundosEspera <= 3; segundosEspera++) {
      if (localStorage.getItem("respose_standartUpdateUser") != null) {
        //console.log("esperando");
        await this.delay(500)
        segundosEspera++;
      } else {
        segundosEspera = 10;
      }
    }


    /* this.dateUser = localStorage.getItem("respose_standartUpdateUser");
    localStorage.setItem('data_user', JSON.stringify(this.dateUser));
    window.location.reload(); */
    //TODO: por que la concertir respose_standartUpdateUser genera un object object ? y asi evitar llamar a getCurrentUser
    await this.apiService.getCurrentUser();
    this.procesarDataUser();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async procesarDataUser() {

    var segundosEspera = 0;
    for (segundosEspera = 0; segundosEspera <= 3; segundosEspera++) {
      if (this.apiService.getResponse() == undefined) {
        console.log("esperando");
        await this.delay(500)
        segundosEspera++;
      } else {
        segundosEspera = 10;
      }
    }

    var data = this.apiService.getResponse();
    if (data != undefined) {
      localStorage.setItem('data_user', JSON.stringify(data));
      this.dateUser = data;
      console.log("DataUser: " + JSON.stringify(this.dateUser))
      window.location.reload();
    }
    //console.log(this.dateUser['primer_nombre']);

  }

  ngOnInit(): void {
  }

  close() {
    this.windowRef.close();
  }

  seleccionDeCiudades(dep: string) {
    this.isSelectDepartamento = false;
    this.ciudades = [];
    this.ciudades = this.departamentos[dep].value;

    this.departamento = this.departamentos[dep].name;
  }

  getCiudad(city: string) {
    this.ciudad = city;
  }

}
