import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmenuPlanEstrategicoComponent } from './tabmenu-plan-estrategico.component';

describe('TabmenuPlanEstrategicoComponent', () => {
  let component: TabmenuPlanEstrategicoComponent;
  let fixture: ComponentFixture<TabmenuPlanEstrategicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmenuPlanEstrategicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmenuPlanEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
