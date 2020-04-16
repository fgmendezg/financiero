import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.component.html',
  styleUrls: ['./editar-datos.component.scss']
})
export class EditarDatosComponent implements OnInit {

  constructor(public windowRef: NbWindowRef) { }

  ngOnInit(): void {
  }

  close() {
    this.windowRef.close();
  }

}
