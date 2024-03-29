import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NbAuthOAuth2Token, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private urlBackend = 'http://127.0.0.1:3000';
  private infoToken = {}
  private dateUser = {}

  private response;

  constructor(protected http: HttpClient, private authService: NbAuthService, private router: Router) { }

  getUsers() {
    return this.http.get(this.urlBackend + '/fdusuarios');
  }

  // TODO: Eliminar, solo se creo para probar los cors sin tener token
  // Obtiene todos los namedocs
  getNameDocs() {
    return this.http.get(this.urlBackend + '/fdnamedocs');
  }

  // Llama al back para crear un nuevo usuario creado desde la pagina de registro
  // TODO: Deberia realizar un hash de la contraseña antes de enviarla al back
  newUser(email: string, primerNombre: string, segundoNombre: string, primerApellido: string, segundoApellido: string, pass: string) {

    let promise = new Promise((resolve, reject) => {

      this.http.post<any>(this.urlBackend +
        '/fdusuarios?email=' + email + '&primer_nombre=' + primerNombre + '&segundo_nombre=' + segundoNombre + '&primer_apellido=' + primerApellido
        + '&segundo_apellido=' + segundoApellido + '&password=' + pass + '', {}).toPromise().then(
          res => {
            this.response = res;
            resolve();
          },
          error => {
            this.response = error
            reject('Error la registrar usuario');
          }
        )
    })
    return promise;

    /* .subscribe({
      next: data => this.response = data,
      error: error => {
        console.log("Hubo un error");
        this.response = error
        //this.setResponse(error);
      }
    }) */
    /*  .pipe(
       data => this.response = data,
       catchError((err) => {
         console.log('error caught in service')
         return throwError(err);
       })
     ) */

  }

  //Obtiene token para iniciar sesion de forma convencional
  getTokenLogin(email: string, pass: string) {
    localStorage.removeItem('auth_token');
    this.http.post(this.urlBackend + '/fdusuario_token',
      {
        "auth": {
          "email": email,
          "password": pass
        }

      }).subscribe((resp: any) => {
        //console.log(resp.jwt)
        localStorage.setItem('auth_token', resp.jwt);

        // Trato de tener los datos de usuario lo antes posible
        this.getCurrentUser();
      })

    //TODO: Capturar errores, que pasa cuando el usuario o contraseñas son erroneos
  }

  /* Obtiene los datos del usuario autenticado actualmente */
  async getCurrentUser() {

    localStorage.setItem("data_user", null)

    var segundosEspera = 0;
    for (segundosEspera = 0; segundosEspera <= 3; segundosEspera++) {
      if (localStorage.getItem("auth_token") == null) {
        console.log("esperando");
        await this.delay(1000)
        segundosEspera++;
      } else {
        segundosEspera = 10;
      }
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("auth_token"),
      'Accept': '*/*'
    })
    this.http.get(this.urlBackend + '/fdusuarios/getDateCurrentUser', { headers: headers })
      .subscribe((resp: any) => {
        //console.log(resp);
        this.response = resp;
        localStorage.setItem("data_user", JSON.stringify(resp))
      })

  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // edita los datos Numero de cedula, departamento, ciudad de residencia, celular y telefono
  // consume a ...fdusuarios/updateuser/1
  async standartUpdateUser(documento: string, departamento: string, ciudad: string, celular: string, telefono: string) {
    localStorage.setItem("respose_standartUpdateUser", null);
    var id_user = JSON.parse(localStorage.getItem("data_user"))['id'];

    //console.log("id_user: " + id_user)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("auth_token"),
      'Accept': '*/*'
    })
    this.http.patch(this.urlBackend + '/fdusuarios/updateuser/' + id_user, {
      "num_identificacion": documento,
      "departamento": departamento,
      "ciudad": ciudad,
      "celular": celular,
      "telefono": telefono
    }, { headers: headers })
      .subscribe(
        (val: any) => {
          //console.log("Editar: " + JSON.parse(val) );
          localStorage.setItem("respose_standartUpdateUser", JSON.stringify(val))
        }
      )
  }

  resetResponse() {
    this.response = undefined;
  }

  getResponse() {
    return this.response;
  }

  handleError(error: HttpErrorResponse) {
    console.log("Error: " + error)
  }

  // Cargar un archivo usando updatedocsci del controlador fdnamedocs
  // Recibe el archivo y el nombre con el que se guardara en s3
  async loadFile(archivo: File, nameFile: String) {

    if (archivo == null) {
      console.log("No se recibio ningun archivo valido")
      return false
    } else {
      const headers = new HttpHeaders({
        'Authorization': localStorage.getItem("auth_token"),
        'Accept': '*/*'
      })

      let body = new FormData();
      body.append("namedoc", archivo)

      return this.http.post(this.urlBackend + '/fdnamedocs/updatedocsci?name=' + nameFile, body, { headers: headers })
        .subscribe(
          (res) => {
            console.log(res)
            localStorage.setItem("statusLoadFile" + nameFile, "true")
          },
          (err) => {
            console.log("Error inesperado al subir archivo " + archivo.name)
            console.log(err);
          }
        )
    }

  }

  /**
   * Verifica si un archivo con el nombre recibido existe para el usuario actual
   */
  getIsExistFile(name: string) {
    var res = null;
    localStorage.setItem("statusDoc" + name, "")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("auth_token"),
      'Accept': '*/*'
    })

    this.http.get(this.urlBackend + '/fdnamedocs/isexist?name=' + name, { headers: headers })
      .subscribe((resp: any) => {
        res = resp;
        localStorage.setItem("statusDoc" + name, resp)
      })

    return res;
  }

  /**
   * Obtiene todos los sectores en base de datos
   */
  getSectors() {
    localStorage.setItem("sectorList", "")

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("auth_token"),
      'Accept': '*/*'
    })

    this.http.get(this.urlBackend + '/fdsectors', { headers: headers })
      .subscribe((resp: any) => {
        localStorage.setItem("sectorList", JSON.stringify(resp))
      })

  }

  /**
   * Borra todas la variables guardadas en el navegador
   * se llama cuando se cierra sesión
   */
  clearItems() {
    localStorage.setItem('auth_token', null);
    localStorage.setItem("data_user", null);
    localStorage.setItem("respose_standartUpdateUser", null);
    localStorage.setItem("sectorList", null)
  }

  // Registra en el back un usuario con los datos que estan en la variables dateUser
  autenticacion() {
    //console.log(this.dateUser);

    //TODO: Me registro, o valido existencia.
    //Me logueo en el back y obtengo token
    // Obtengo informacion basica con el token para dashboard  
    this.router.navigateByUrl('/dashboard');
  }

  // Regresa los datos basicos necesarios para el dasboard
  // Ya debe estar autenticado
  getDateUser() {
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
