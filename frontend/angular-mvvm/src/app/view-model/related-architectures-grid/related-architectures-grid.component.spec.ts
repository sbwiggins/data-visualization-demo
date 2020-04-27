import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedArchitecturesGridComponent } from './related-architectures-grid.component';

describe('RelatedArchitecturesGridComponent', () => {
  let component: RelatedArchitecturesGridComponent;
  let fixture: ComponentFixture<RelatedArchitecturesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedArchitecturesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedArchitecturesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
