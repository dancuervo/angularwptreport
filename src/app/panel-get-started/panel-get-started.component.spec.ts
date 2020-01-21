import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGetStartedComponent } from './panel-get-started.component';

describe('PanelGetStartedComponent', () => {
  let component: PanelGetStartedComponent;
  let fixture: ComponentFixture<PanelGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
