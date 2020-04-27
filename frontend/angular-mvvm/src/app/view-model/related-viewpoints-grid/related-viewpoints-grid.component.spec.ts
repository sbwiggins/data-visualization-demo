import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedViewpointsGridComponent } from './related-viewpoints-grid.component';

describe('RelatedViewpointsGridComponent', () => {
  let component: RelatedViewpointsGridComponent;
  let fixture: ComponentFixture<RelatedViewpointsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedViewpointsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedViewpointsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
