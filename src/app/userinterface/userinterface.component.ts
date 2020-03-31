import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-userinterface',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './userinterface.component.html',
  //styleUrls: ['./userinterface.component.scss']
})
export class UserinterfaceComponent /*implements OnInit*/ {

  items: NbMenuItem[] = [
    {
      title: 'Editar Perfil',
      icon: 'person-outline',
    },
    {
      title: 'Cambiar Contraseña',
      icon: 'lock-outline',
    },
    {
      title: 'Sobre FinanRed',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Cerrar Sesión',
      icon: 'unlock-outline',
    },
  ];

  constructor(private sidebarService: NbSidebarService) {
  }

  /*ngOnInit(): void {
  }*/

}
