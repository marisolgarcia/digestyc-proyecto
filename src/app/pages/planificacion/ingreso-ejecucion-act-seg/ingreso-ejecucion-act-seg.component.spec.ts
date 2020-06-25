import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEjecucionActSegComponent } from './ingreso-ejecucion-act-seg.component';

describe('IngresoEjecucionActSegComponent', () => {
  let component: IngresoEjecucionActSegComponent;
  let fixture: ComponentFixture<IngresoEjecucionActSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoEjecucionActSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEjecucionActSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
