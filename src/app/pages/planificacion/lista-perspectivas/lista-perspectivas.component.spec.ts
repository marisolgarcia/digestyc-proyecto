import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPerspectivasComponent } from './lista-perspectivas.component';

describe('ListaPerspectivasComponent', () => {
  let component: ListaPerspectivasComponent;
  let fixture: ComponentFixture<ListaPerspectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPerspectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPerspectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
