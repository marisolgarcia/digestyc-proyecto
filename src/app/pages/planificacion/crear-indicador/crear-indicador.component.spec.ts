import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIndicadorComponent } from './crear-indicador.component';

describe('CrearIndicadorComponent', () => {
  let component: CrearIndicadorComponent;
  let fixture: ComponentFixture<CrearIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
