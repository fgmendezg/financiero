import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  dataKey: string;
  dataValue: string;
}

@Component({
  selector: 'app-homeuser',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.scss']
})
export class HomeuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customColumn = 'dataKey';
  defaultColumns = [ 'dataValue'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  data: TreeNode<FSEntry>[] = [
    {
      data: { dataKey: 'Nombres:', dataValue: 'Nombre de usuario' }
    },
    {
      data: { dataKey: 'Apellidos:', dataValue: 'Apellidos de usuario' }
    },
    {
      data: { dataKey: 'Correo Electronico:', dataValue: 'email@gmail.com' },
    },
    {
      data: { dataKey: 'Celular:', dataValue: '1234567890' }
    },
    {
      data: { dataKey: 'Telefono:', dataValue: '1234567890' },
    }
  ];

}
