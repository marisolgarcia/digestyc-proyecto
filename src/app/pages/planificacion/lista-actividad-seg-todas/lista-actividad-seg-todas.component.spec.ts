import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActividadSegTodasComponent } from './lista-actividad-seg-todas.component';

describe('ListaActividadSegTodasComponent', () => {
  let component: ListaActividadSegTodasComponent;
  let fixture: ComponentFixture<ListaActividadSegTodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaActividadSegTodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaActividadSegTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
