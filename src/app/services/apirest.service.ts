import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbAuthOAuth2Token, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private urlBackend = 'http://127.0.0.1:3000';
  private infoToken = {}
  private dateUser = {}

  constructor(protected http: HttpClient, private authService: NbAuthService, private router: Router) {
    //console.log("Apirestservices");
  }

  getUsers() {
    return this.http.get(this.urlBackend + '/fdusuarios');
  }

  // Registra en el back un usuario con los datos que estan en la variables dateUser
  autenticacion(){
    //console.log(this.dateUser);

    //TODO: Me registro, o valido existencia.
    //Me logueo en el back y obtengo token
    // Obtengo informacion basica con el token para dashboard  
    this.router.navigateByUrl('/dashboard');
  }

  // Regresa los datos basicos necesarios para el dasboard
  // Ya debe estar autenticado
  getDateUser(){
    this.getDateGoogletoken();
    return this.dateUser;
  }

  // Parte de Autenticación con google
  getDateGoogletoken() {
    // Obtiene los datos basicos de la autenticación.
    this.authService.onTokenChange()
      .subscribe((token: NbAuthOAuth2Token) => {
        if (token.isValid()) {
          this.infoToken = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          this.getBasicInformation(this.infoToken["access_token"]);
          //console.log(this.dateUser["name"]);
        }

      });
  }

  // Envia una solicitud http mediante el token que recibe,
  // para obtener los datos basicos del usuario.
  // TODO: Podria implementarce asincronicamente?
  getBasicInformation(access_token: string) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + access_token, false);
    /* request.onreadystatechange = function (aEvt) {
      if (request.readyState == 4) {
        if(request.status == 200){
          console.log(request.responseText);
        }
     }
    } */
    request.send();
    if (request.status == 200) {
      this.dateUser = JSON.parse(request.responseText);
      this.autenticacion();
    }
  }

}
