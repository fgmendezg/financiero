import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDocumentosComponent } from './ad-documentos.component';

describe('AdDocumentosComponent', () => {
  let component: AdDocumentosComponent;
  let fixture: ComponentFixture<AdDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
