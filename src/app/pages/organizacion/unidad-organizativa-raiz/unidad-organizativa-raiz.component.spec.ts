import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadOrganizativaRaizComponent } from './unidad-organizativa-raiz.component';

describe('UnidadOrganizativaRaizComponent', () => {
  let component: UnidadOrganizativaRaizComponent;
  let fixture: ComponentFixture<UnidadOrganizativaRaizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadOrganizativaRaizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadOrganizativaRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
