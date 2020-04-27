import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramModalPopupComponent } from './diagram-modal-popup.component';

describe('DiagramModalPopupComponent', () => {
  let component: DiagramModalPopupComponent;
  let fixture: ComponentFixture<DiagramModalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramModalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
