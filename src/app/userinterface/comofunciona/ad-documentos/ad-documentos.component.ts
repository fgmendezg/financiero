import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core'
import { NbDialogService } from '@nebular/theme';
import { DialogArchivosCargadosComponent } from './dialog-archivos-cargados/dialog-archivos-cargados.component';

//Servicios
import { ApirestService } from '../../../services/apirest.service';

@Component({
  selector: 'app-ad-documentos',
  templateUrl: './ad-documentos.component.html',
  styleUrls: ['./ad-documentos.component.scss']
})
export class AdDocumentosComponent implements OnInit {
  //@ViewChild('dialogSuccess') dialogSuccess:DialogArchivosCargadosComponent;
  fileCedula = null;
  load = false;
  cargador = 0;

  constructor(private apiService: ApirestService, private ref: ChangeDetectorRef, private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  // Action del boton cargar que llamar a cargarArchivos de acuerdo a los archivos cargados
  async loadFiles() {
    this.load = true;

    // No se cargo ningun archivo
    if ((<HTMLInputElement>document.getElementById("input_cedula")).files[0] == null &&
      (<HTMLInputElement>document.getElementById("input_nomina")).files[0] == null &&
      (<HTMLInputElement>document.getElementById("input_claboral")).files[0] == null &&
      (<HTMLInputElement>document.getElementById("input_hvida")).files[0] == null) {
      this.load = false;
      this.ref.detectChanges();

      var title = 'No se Cargo ningun Documento'
      var message = 'No ha sido seleccionado ningun documento.\n Seleccione al menos uno.'
      this.openDialogWindows(title, message)

      return
    }

    this.cargador = 4;

    if ((<HTMLInputElement>document.getElementById("input_cedula")).files[0] == null) { this.cargador-- } else {
      this.cargarArchivos("input_cedula", "cedula")
    }

    if ((<HTMLInputElement>document.getElementById("input_nomina")).files[0] == null) { this.cargador-- } else {
      this.cargarArchivos("input_nomina", "nomina")
    }

    if ((<HTMLInputElement>document.getElementById("input_claboral")).files[0] == null) { this.cargador-- } else {
      this.cargarArchivos("input_claboral", "certificadolaboral")
    }

    if ((<HTMLInputElement>document.getElementById("input_hvida")).files[0] == null) { this.cargador-- } else {
      this.cargarArchivos("input_hvida", "hojadevida")
    }


    var timeEspera = 0;
    for (timeEspera = 0; timeEspera <= 320; timeEspera++) {
      if (this.cargador <= 0) {
        timeEspera = 400;
        var title = 'Documentos Cargados Satisfactoriamente'
        var message = 'Sus Documentos an sido cargados correctamente. Si desea actualizarlos puede volver a cargalos desde sus documentos'
        this.openDialogWindows(title, message)
      } else {
        await this.delay(250);
      }
    }

  }

  // Cargar un archivo a la vez llamando al metodo loadFile del apirest
  async cargarArchivos(nameInput: string, name: String) {
    if ((<HTMLInputElement>document.getElementById(nameInput)) == null) {
      //No se carga
      console.log("Archivo no encontrado para enviar")
    } else {
      localStorage.setItem("statusLoadFile" + name, null)

      this.fileCedula = (<HTMLInputElement>document.getElementById(nameInput)).files[0]
      await this.apiService.loadFile(this.fileCedula, name);

      var segundosEspera = 0;
      this.load = true;
      for (segundosEspera = 0; segundosEspera <= 20; segundosEspera++) {
        if (localStorage.getItem("statusLoadFile" + name) == "true") {
          segundosEspera = 30;
          this.cargador--;
          this.load = false;
        } else {
          await this.delay(1000)
          segundosEspera++;
        }
      }

      // Para que detecte el cambio y actualice la vista del spiner
      this.ref.detectChanges();

    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Abre una ventana emergente con el titulo y el mensaje recibido
   */
  openDialogWindows(title: string, message: string) {
    this.dialogService.open(DialogArchivosCargadosComponent, {
      context: {
        title: title,
        message: message
      }
    });
  }

}
