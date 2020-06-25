import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuSeguimientoComponent } from './sub-menu-seguimiento.component';

describe('SubMenuSeguimientoComponent', () => {
  let component: SubMenuSeguimientoComponent;
  let fixture: ComponentFixture<SubMenuSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
