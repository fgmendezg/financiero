import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

//Servicios
import { ApirestService } from '../../services/apirest.service'

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
}