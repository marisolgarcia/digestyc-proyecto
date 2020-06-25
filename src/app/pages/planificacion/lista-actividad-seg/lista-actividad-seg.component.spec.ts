import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActividadSegComponent } from './lista-actividad-seg.component';

describe('ListaActividadSegComponent', () => {
  let component: ListaActividadSegComponent;
  let fixture: ComponentFixture<ListaActividadSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaActividadSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaActividadSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
