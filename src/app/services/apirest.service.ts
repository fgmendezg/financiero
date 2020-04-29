import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private urlBackend = 'http://127.0.0.1:3000';

  constructor( protected http: HttpClient ) {
    //console.log("Apirestservices");
  }
    
  getUsers() {
    return this.http.get( this.urlBackend + '/fdusuarios' );
  }
}
