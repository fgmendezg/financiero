import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NbIconConfig } from '@nebular/theme';
import { NbAuthOAuth2Token, NbAuthService } from '@nebular/auth';

//Servicios
import { ApirestService } from '../services/apirest.service';

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
  dateUserApi: any = [];

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

  constructor(private sidebarService: NbSidebarService, private nbMenuService: NbMenuService,
    private authService: NbAuthService, private apiService: ApirestService) {

    this.clearItems;
    this.nbMenuService.addItems(this.loginItems);


    this.apiService.getUsers()
      .subscribe(
        (data) => { // Success
          this.dateUserApi = data;
          console.log(this.dateUserApi);
        },
        (error) => {
          console.error(error);
        }
      );

    this.dateUser = this.apiService.getDateUser();
    this.pictureUser = this.dateUser["picture"];
    console.log(this.dateUser);

  }

  clearItems() {
    this.items = [];
  }

  ngOnInit(): void {
  }

}
