import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { NbIconConfig } from '@nebular/theme';

@Component({
  selector: 'app-userinterface',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})
export class UserinterfaceComponent implements OnInit {

  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };

  items: NbMenuItem[] = [
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

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
  }

}
