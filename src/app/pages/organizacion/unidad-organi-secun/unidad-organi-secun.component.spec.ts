import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadOrganiSecunComponent } from './unidad-organi-secun.component';

describe('UnidadOrganiSecunComponent', () => {
  let component: UnidadOrganiSecunComponent;
  let fixture: ComponentFixture<UnidadOrganiSecunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadOrganiSecunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadOrganiSecunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
