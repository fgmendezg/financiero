import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NbIconConfig } from '@nebular/theme';

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

  WelItems: NbMenuItem[] = [
    {
      title: 'Inicia Sesion',
      icon: 'person-done-outline',
      url: 'auth/login'
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
    }
  ];

  loginItems: NbMenuItem[] = [
    {
      title: 'Editar Perfil',
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

  constructor(private sidebarService: NbSidebarService, private nbMenuService: NbMenuService) {

    if ( !loginState ){
      this.nbMenuService.addItems(this.WelItems);
    }else{
      this.clearItems;
      this.nbMenuService.addItems(this.loginItems);
    }

  }

  clearItems() {
    this.items = [];
  }

  public setStateLogin(newState:boolean){
    loginState = newState;
    console.log(loginState);
  }

  ngOnInit(): void {
  }

}
