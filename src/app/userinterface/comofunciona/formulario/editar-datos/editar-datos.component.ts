import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.component.html',
  styleUrls: ['./editar-datos.component.scss']
})
export class EditarDatosComponent implements OnInit {

  isSelectDepartamento = true;
  
  ciudades = [];
  departamentos = [
    { name: 'Cundinamarca',
      value: [
      'Bogota',
      'Vileta'
    ] },
    { name: 'Antioquia',
      value: [
      'at1',
      'at2'
    ] }
  ];

  constructor(public windowRef: NbWindowRef) { }

  ngOnInit(): void {
  }

  close() {
    this.windowRef.close();
  }

  seleccionDeCiudades( dep: string ){
    this.isSelectDepartamento = false;
    this.ciudades = [];
    this.ciudades = this.departamentos[dep].value;
  }

}
