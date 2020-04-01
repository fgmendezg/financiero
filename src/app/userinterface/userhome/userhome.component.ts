import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
