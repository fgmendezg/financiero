import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuth2LoginComponentComponent } from './oauth2-login-component.component';

describe('OAuth2LoginComponentComponent', () => {
  let component: OAuth2LoginComponentComponent;
  let fixture: ComponentFixture<OAuth2LoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAuth2LoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAuth2LoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
