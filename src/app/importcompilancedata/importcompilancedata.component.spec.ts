import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportcompilancedataComponent } from './importcompilancedata.component';

describe('ImportcompilancedataComponent', () => {
  let component: ImportcompilancedataComponent;
  let fixture: ComponentFixture<ImportcompilancedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportcompilancedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportcompilancedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
