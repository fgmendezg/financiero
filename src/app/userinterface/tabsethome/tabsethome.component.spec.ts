import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsethomeComponent } from './tabsethome.component';

describe('TabsethomeComponent', () => {
  let component: TabsethomeComponent;
  let fixture: ComponentFixture<TabsethomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsethomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsethomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
