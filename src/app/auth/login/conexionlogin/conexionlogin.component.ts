import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//Servicios
import { ApirestService } from '../../../services/apirest.service';

@Component({
  selector: 'app-conexionlogin',
  templateUrl: './conexionlogin.component.html',
  styleUrls: ['./conexionlogin.component.scss']
})
export class ConexionloginComponent implements OnInit {

  constructor(private apiService: ApirestService, private router:Router) { }

  ngOnInit(): void {
  }

  public async login(email: string, pass: string) {
    if(localStorage.getItem('auth_token') == null){
      this.apiService.getTokenLogin(email, pass);
    }else{
      console.log("El usuario ya estaba autenticado")
    }
    //console.log(localStorage.getItem('auth_token'))
    this.router.navigate(['/dashboard']);
  }


}
