import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenteFinanciamientoComponent } from './fuente-financiamiento.component';

describe('FuenteFinanciamientoComponent', () => {
  let component: FuenteFinanciamientoComponent;
  let fixture: ComponentFixture<FuenteFinanciamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuenteFinanciamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenteFinanciamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
