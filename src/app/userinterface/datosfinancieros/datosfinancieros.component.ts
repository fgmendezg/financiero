import { Component, OnInit } from '@angular/core';

//Servicios
import { ApirestService } from '../../services/apirest.service';

@Component({
  selector: 'app-datosfinancieros',
  templateUrl: './datosfinancieros.component.html',
  styleUrls: ['./datosfinancieros.component.scss']
})
export class DatosfinancierosComponent implements OnInit {

  sector = [];
  convenios = [];

  constructor(private apiService: ApirestService) { 

    //Cargar sectores desde la base de datos
    if(localStorage.getItem("sectorList") == "null" || localStorage.getItem("sectorList") == ""){
      console.log("Obteniedo")
      this.cargarSectores();
    }else{
      console.log("Reciclando")
      this.tratarDatosSectores(localStorage.getItem("sectorList"))
    }
    

    this.convenios = [
      "Convenio 1",
      "Convenio 2",
      "Convenio 3",
      "Convenio 4",
      "Convenio 5",
      "Convenio 6"
    ];
  }

  ngOnInit(): void {}

  //TODO: envia los datos cargados en el formulario
  // Primero deberia mostrar un resumen de lo que va a enviar.
  enviarDatos(){

  }

  async cargarSectores(){
    this.apiService.getSectors();

    var awaiTime = 0;
    for(awaiTime = 0; awaiTime <= 30; awaiTime++){
      if(localStorage.getItem("sectorList") == ""){
        await this.delay(200)
        awaiTime++;
      }else{
        this.tratarDatosSectores(localStorage.getItem("sectorList"));
        awaiTime = 500;
      }
    }
  }

  /**
   * Agrega los sectores al array sector
   */
  tratarDatosSectores(listaSectores: string){
    var jsonSector = JSON.parse(listaSectores)
    var count = 0;

    for(let sector in jsonSector){
      this.sector.push(jsonSector[count]["name_sector"])
      count++
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
