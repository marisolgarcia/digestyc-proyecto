import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesOrganizativasVaciaComponent } from './unidades-organizativas-vacia.component';

describe('UnidadesOrganizativasVaciaComponent', () => {
  let component: UnidadesOrganizativasVaciaComponent;
  let fixture: ComponentFixture<UnidadesOrganizativasVaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesOrganizativasVaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesOrganizativasVaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
