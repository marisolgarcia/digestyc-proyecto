import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarIndicadorComponent } from './informar-indicador.component';

describe('InformarIndicadorComponent', () => {
  let component: InformarIndicadorComponent;
  let fixture: ComponentFixture<InformarIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformarIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
