import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosfinancierosComponent } from './datosfinancieros.component';

describe('DatosfinancierosComponent', () => {
  let component: DatosfinancierosComponent;
  let fixture: ComponentFixture<DatosfinancierosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosfinancierosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosfinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
