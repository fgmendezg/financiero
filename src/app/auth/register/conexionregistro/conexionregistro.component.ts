import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//Servicios
import { ApirestService } from '../../../services/apirest.service';

@Component({
  selector: 'app-conexionregistro',
  templateUrl: './conexionregistro.component.html',
  styleUrls: ['./conexionregistro.component.scss']
})
export class ConexionregistroComponent implements OnInit {
  constructor(private apiService: ApirestService, private router:Router) { }
  ngOnInit(): void { }

  public async register(nombres: string[], apellidos: string[], email: string, pass: string) {
    this.apiService.resetResponse();

    try {
      await this.apiService.newUser(email, nombres[0], nombres[1], apellidos[0], apellidos[1], pass);
    } catch (e) {
      
    }
    // TODO: comentar linea de abajo
    var res = this.apiService.getResponse();

    if( res != undefined ){
      // Se registro correctamente y debe redirecionar a welcome
      this.router.navigate(['/welcome']);
    }else{
      // TODO: No se registro adecuadamente y debe mostrar un mensaje

    }

    console.log(res);
  }

}
