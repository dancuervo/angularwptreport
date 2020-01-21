import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelListReportsComponent } from './panel-list-reports.component';

describe('PanelListReportsComponent', () => {
  let component: PanelListReportsComponent;
  let fixture: ComponentFixture<PanelListReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelListReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelListReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
