import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

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

}
