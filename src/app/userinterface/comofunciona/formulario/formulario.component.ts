import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { EditarDatosComponent } from './editar-datos/editar-datos.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }

  openEditDates(){
    this.windowService.open(EditarDatosComponent, { title: `Información Personal` });
  }

}
