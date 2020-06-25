import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleActividadComponent } from './ver-detalle-actividad.component';

describe('VerDetalleActividadComponent', () => {
  let component: VerDetalleActividadComponent;
  let fixture: ComponentFixture<VerDetalleActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetalleActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetalleActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
