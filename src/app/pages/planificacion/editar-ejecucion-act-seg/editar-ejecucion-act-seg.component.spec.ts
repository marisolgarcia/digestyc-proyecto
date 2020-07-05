import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEjecucionActSegComponent } from './editar-ejecucion-act-seg.component';

describe('EditarEjecucionActSegComponent', () => {
  let component: EditarEjecucionActSegComponent;
  let fixture: ComponentFixture<EditarEjecucionActSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEjecucionActSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEjecucionActSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
