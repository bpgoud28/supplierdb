import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsupplierComponent } from './searchsupplier.component';

describe('SearchsupplierComponent', () => {
  let component: SearchsupplierComponent;
  let fixture: ComponentFixture<SearchsupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
