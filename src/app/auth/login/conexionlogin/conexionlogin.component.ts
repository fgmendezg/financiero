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
    this.apiService.getTokenLogin(email, pass);
    //console.log(localStorage.getItem('auth_token'))
    this.router.navigate(['/dashboard']);
  }


}
