import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArchitectureDropdownComponent } from './select-architecture-dropdown.component';

describe('SelectArchitectureDropdownComponent', () => {
  let component: SelectArchitectureDropdownComponent;
  let fixture: ComponentFixture<SelectArchitectureDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArchitectureDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArchitectureDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
