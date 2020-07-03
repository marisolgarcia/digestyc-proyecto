import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEjecucionIndicadorComponent } from './editar-ejecucion-indicador.component';

describe('EditarEjecucionIndicadorComponent', () => {
  let component: EditarEjecucionIndicadorComponent;
  let fixture: ComponentFixture<EditarEjecucionIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEjecucionIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEjecucionIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
