import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NbIconConfig } from '@nebular/theme';
import { NbAuthOAuth2Token, NbAuthService } from '@nebular/auth';

var loginState = true;

@Component({
  selector: 'app-userinterface',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})

export class UserinterfaceComponent implements OnInit {

  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };

  items = [];
  user = {};
  dateUser = {}
  pictureUser = "";

  loginItems: NbMenuItem[] = [
    {
      title: 'Tus Datos',
      icon: 'person-outline',
      url: '/dashboard/home'
    },
    {
      title: '¿Como pedir tu credito?',
      icon: 'checkmark-circle-2-outline',
      url: '/dashboard/ComofuncionaComponent'
    },
    {
      title: 'Pide tu Credito',
      icon: 'clipboard-outline'
    },
    {
      title: 'Preguntas frecuentes',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      url: '/dashboard/frecuentes'
    },
    {
      title: 'Salida Segura',
      icon: 'unlock-outline',
    },
  ];

  constructor(private sidebarService: NbSidebarService, private nbMenuService: NbMenuService, private authService: NbAuthService) {

    this.clearItems;
    this.nbMenuService.addItems(this.loginItems);

    // Obtiene los datos basicos de la autenticación.
    this.authService.onTokenChange()
      .subscribe((token: NbAuthOAuth2Token) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          //console.log(this.user["access_token"]);
          this.getBasicInformation(this.user["access_token"]);
          //console.log(this.dateUser["name"]);
        }

      });

  }

  clearItems() {
    this.items = [];
  }

  // Envia una solicitud http mediante el token que recibe,
  // para obtener los datos basicos del usuario.
  // TODO: Podria implementarce asincronicamente?
  getBasicInformation( access_token:string ){
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
    if(request.status == 200){
      this.dateUser = JSON.parse(request.responseText);
      this.pictureUser = this.dateUser["picture"];
    }
  }

  ngOnInit(): void {
  }
  
}
