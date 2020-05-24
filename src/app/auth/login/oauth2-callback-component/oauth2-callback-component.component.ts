import { Component, OnDestroy } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

//Srevicios
import { ApirestService } from '../../../services/apirest.service';

@Component({
  selector: 'app-oauth2-callback-component',
  templateUrl: './oauth2-callback-component.component.html',
  styleUrls: ['./oauth2-callback-component.component.scss']
})
export class OAuth2CallbackComponentComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private authService: NbAuthService, private router: Router, 
    private apiService: ApirestService) {

    this.authService.authenticate('google')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {
          
          this.apiService.getDateGoogletoken();
          //this.router.navigateByUrl('/dashboard');
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
