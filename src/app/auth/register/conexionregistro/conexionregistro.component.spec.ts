import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionregistroComponent } from './conexionregistro.component';

describe('ConexionregistroComponent', () => {
  let component: ConexionregistroComponent;
  let fixture: ComponentFixture<ConexionregistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexionregistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
