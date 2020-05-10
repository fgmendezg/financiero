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
    console.log(nombres);
    console.log(apellidos);
    console.log(email);
    console.log(pass);

    //var res = this.apiService.newUser(f.value.email, losNombres[0], losNombres[1], losApellidos[0], losApellidos[1], f.value.password);
  }

}
