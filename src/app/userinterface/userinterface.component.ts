import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-userinterface',
  templateUrl: './userinterface.component.html',
  //styleUrls: ['./userinterface.component.scss']
})
export class UserinterfaceComponent /*implements OnInit*/ {

  constructor(private sidebarService: NbSidebarService) {
  }

  /*ngOnInit(): void {
  }*/

}
