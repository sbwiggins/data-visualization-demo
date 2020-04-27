import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModelDiagramComponent } from './common-model-diagram.component';

describe('CommonModelDiagramComponent', () => {
  let component: CommonModelDiagramComponent;
  let fixture: ComponentFixture<CommonModelDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonModelDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonModelDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
