import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionesActSegComponent } from './ejecuciones-act-seg.component';

describe('EjecucionesActSegComponent', () => {
  let component: EjecucionesActSegComponent;
  let fixture: ComponentFixture<EjecucionesActSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionesActSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionesActSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
