import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciativasPlanAnualComponent } from './iniciativas-plan-anual.component';

describe('IniciativasPlanAnualComponent', () => {
  let component: IniciativasPlanAnualComponent;
  let fixture: ComponentFixture<IniciativasPlanAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciativasPlanAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciativasPlanAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
