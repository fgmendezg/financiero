import { Component, OnInit } from '@angular/core';

//Servicios
import { ApirestService } from '../../../services/apirest.service';

@Component({
  selector: 'app-conexionregistro',
  templateUrl: './conexionregistro.component.html',
  styleUrls: ['./conexionregistro.component.scss']
})
export class ConexionregistroComponent implements OnInit {
  constructor(private apiService: ApirestService) {}
  ngOnInit(): void {}

  public register(nombres: string[], apellidos: string[], email: string, pass: string){
    var res = this.apiService.newUser(email, nombres[0], nombres[1], apellidos[0], apellidos[1], pass);
    console.log("RES: " + res);
  }

}
