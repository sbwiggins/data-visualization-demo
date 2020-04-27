import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArchitectureGridComponent } from './select-architecture-grid.component';

describe('SelectArchitectureGridComponent', () => {
  let component: SelectArchitectureGridComponent;
  let fixture: ComponentFixture<SelectArchitectureGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArchitectureGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArchitectureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
