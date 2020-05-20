import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { EditarDatosComponent } from './editar-datos/editar-datos.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
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

  constructor(private windowService: NbWindowService) {
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

  ngOnInit(): void {
  }

  openEditDates(){
    this.windowService.open(EditarDatosComponent, { title: `Información Personal` });
  }

}
