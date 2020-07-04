import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIniciativasComponent } from './lista-iniciativas.component';

describe('ListaIniciativasComponent', () => {
  let component: ListaIniciativasComponent;
  let fixture: ComponentFixture<ListaIniciativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIniciativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIniciativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
