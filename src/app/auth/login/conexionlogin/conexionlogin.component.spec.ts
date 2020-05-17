import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionloginComponent } from './conexionlogin.component';

describe('ConexionloginComponent', () => {
  let component: ConexionloginComponent;
  let fixture: ComponentFixture<ConexionloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexionloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
