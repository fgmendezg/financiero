import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog-archivos-cargados',
  templateUrl: './dialog-archivos-cargados.component.html',
  styleUrls: ['./dialog-archivos-cargados.component.scss']
})
export class DialogArchivosCargadosComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;

  constructor(protected ref: NbDialogRef<DialogArchivosCargadosComponent>) {}
  ngOnInit(): void {}

  dismiss() {
    this.ref.close();
  }
}
