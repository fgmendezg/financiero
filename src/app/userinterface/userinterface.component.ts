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
  dateUser = {}
  pictureUser = "";
  nameUser = "";

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

    /* Estoy logueado pero no tengo datos de usuario cargados
    TODO: Mejorar cuando tiene que cargar los datos desde aqui
    ya que alcanza a cargar informacion vacia. Se podria poner una pagina anterior de carga */
    if(this.apiService.getStatusLogin && (localStorage.getItem("data_user") == null )){
      this.getData();
    }else{
      console.log("Ya tengo los datos")
      this.dateUser = JSON.parse(localStorage.getItem("data_user"));
      this.alistarVariables();
      console.log(this.dateUser);
    }
    

    //this.dateUser = this.apiService.getDateUser();
    ///this.pictureUser = this.dateUser["picture"];
    //console.log(this.dateUser);

  }

  async getData(){
    this.apiService.resetResponse();

    var error = 0;
    try {
      await this.apiService.getCurrentUser();
    } catch (e) {
      error = 1;
      console.error("Se a producido un error al obtener los datos de usuario desde el dasboard: " + e) 
    }

    if (error == 0){
      this.procesarDataUser();
    }
  
  }

  async procesarDataUser(){

    var segundosEspera = 0;
    for (segundosEspera = 0; segundosEspera <= 3; segundosEspera++) {
      if(this.apiService.getResponse() == undefined){
        console.log("esperando");
        await this.delay(500)
        segundosEspera++;
      }else{
        segundosEspera = 10;
      }
    }

    var data = this.apiService.getResponse();
    if(data != undefined){
      localStorage.setItem('data_user', JSON.stringify(data));
      this.dateUser = data;
      this.alistarVariables()
    }
    //console.log(this.dateUser['primer_nombre']);

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  /* El objetivo es realizar un filtrado para que el html pueda mostrar la informacion */
  alistarVariables(){
    this.nameUser = this.dateUser['primer_nombre'] + " " + this.dateUser['segundo_nombre'] + " " +this.dateUser['primer_apellido'] + 
      " " + this.dateUser['segundo_apellido'];
  }

  clearItems() {
    this.items = [];
  }

  ngOnInit(): void {
  }

}
