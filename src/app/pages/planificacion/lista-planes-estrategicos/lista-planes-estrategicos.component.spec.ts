import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanesEstrategicosComponent } from './lista-planes-estrategicos.component';

describe('ListaPlanesEstrategicosComponent', () => {
  let component: ListaPlanesEstrategicosComponent;
  let fixture: ComponentFixture<ListaPlanesEstrategicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanesEstrategicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanesEstrategicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
