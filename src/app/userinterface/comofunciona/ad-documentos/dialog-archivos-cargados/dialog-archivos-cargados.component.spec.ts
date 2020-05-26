import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArchivosCargadosComponent } from './dialog-archivos-cargados.component';

describe('DialogArchivosCargadosComponent', () => {
  let component: DialogArchivosCargadosComponent;
  let fixture: ComponentFixture<DialogArchivosCargadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogArchivosCargadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArchivosCargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
