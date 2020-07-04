import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObjetivosEstrategicosComponent } from './lista-objetivos-estrategicos.component';

describe('ListaObjetivosEstrategicosComponent', () => {
  let component: ListaObjetivosEstrategicosComponent;
  let fixture: ComponentFixture<ListaObjetivosEstrategicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaObjetivosEstrategicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaObjetivosEstrategicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
