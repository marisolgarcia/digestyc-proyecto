import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanesAnualesComponent } from './lista-planes-anuales.component';

describe('ListaPlanesAnualesComponent', () => {
  let component: ListaPlanesAnualesComponent;
  let fixture: ComponentFixture<ListaPlanesAnualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanesAnualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanesAnualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
