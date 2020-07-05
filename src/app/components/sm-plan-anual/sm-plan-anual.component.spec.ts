import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmPlanAnualComponent } from './sm-plan-anual.component';

describe('SmPlanAnualComponent', () => {
  let component: SmPlanAnualComponent;
  let fixture: ComponentFixture<SmPlanAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmPlanAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmPlanAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
