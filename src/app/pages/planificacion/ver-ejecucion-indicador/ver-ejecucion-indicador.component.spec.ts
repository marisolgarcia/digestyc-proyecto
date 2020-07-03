import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEjecucionIndicadorComponent } from './ver-ejecucion-indicador.component';

describe('VerEjecucionIndicadorComponent', () => {
  let component: VerEjecucionIndicadorComponent;
  let fixture: ComponentFixture<VerEjecucionIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEjecucionIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEjecucionIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
