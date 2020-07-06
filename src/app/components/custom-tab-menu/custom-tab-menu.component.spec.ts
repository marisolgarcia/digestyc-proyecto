import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTabMenuComponent } from './custom-tab-menu.component';

describe('CustomTabMenuComponent', () => {
  let component: CustomTabMenuComponent;
  let fixture: ComponentFixture<CustomTabMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTabMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
