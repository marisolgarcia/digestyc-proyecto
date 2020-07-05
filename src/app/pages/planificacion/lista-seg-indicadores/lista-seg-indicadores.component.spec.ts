import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSegIndicadoresComponent } from './lista-seg-indicadores.component';

describe('ListaSegIndicadoresComponent', () => {
  let component: ListaSegIndicadoresComponent;
  let fixture: ComponentFixture<ListaSegIndicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSegIndicadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSegIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
