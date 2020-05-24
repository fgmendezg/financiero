import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Servicios
import { ApirestService } from '../../../services/apirest.service';

@Component({
  selector: 'app-conexionlogin',
  templateUrl: './conexionlogin.component.html',
  styleUrls: ['./conexionlogin.component.scss']
})
export class ConexionloginComponent implements OnInit {
  loading = false;

  constructor(private apiService: ApirestService, private router: Router) { }

  ngOnInit(): void {
  }

  public async login(email: string, pass: string) {
    this.apiService.getTokenLogin(email, pass);

    this.loading = true;
    var contadorTimeOut = 0;

    // Espera que el back responda y luego se rederige a la pagina principal
    while (this.loading && contadorTimeOut <= 10) {
      await this.delay(500)
      if (localStorage.getItem("auth_token") == null) {
      } else {
        this.loading = false
        this.router.navigate(['/dashboard'])
      }

      contadorTimeOut++;
    }

    //TODO: Letrero de timeout con el back

    /* setTimeout(() => {
      this.loading = false
      this.router.navigate(['/dashboard']);
    }, 3000) */

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
