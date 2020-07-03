import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionesIndicadorComponent } from './ejecuciones-indicador.component';

describe('EjecucionesIndicadorComponent', () => {
  let component: EjecucionesIndicadorComponent;
  let fixture: ComponentFixture<EjecucionesIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionesIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionesIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
