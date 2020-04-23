import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datosfinancieros',
  templateUrl: './datosfinancieros.component.html',
  styleUrls: ['./datosfinancieros.component.scss']
})
export class DatosfinancierosComponent implements OnInit {

  sector = [];
  convenios = [];

  constructor() { 
    this.sector = [
      "Fuerzas Armadas",
      "Salud",
      "Edicación",
      "Administrativo",
      "Judicial",
      "Otro"
    ];
    this.convenios = [
      "Convenio 1",
      "Convenio 2",
      "Convenio 3",
      "Convenio 4",
      "Convenio 5",
      "Convenio 6"
    ];
  }

  ngOnInit(): void {
  }

  //TODO: envia los datos cargados en el formulario
  // Primero deberia mostrar un resumen de lo que va a enviar.
  enviarDatos(){

  }

}
