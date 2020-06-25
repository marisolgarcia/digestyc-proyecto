import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEjecucionActSegComponent } from './detalle-ejecucion-act-seg.component';

describe('DetalleEjecucionActSegComponent', () => {
  let component: DetalleEjecucionActSegComponent;
  let fixture: ComponentFixture<DetalleEjecucionActSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEjecucionActSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEjecucionActSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
