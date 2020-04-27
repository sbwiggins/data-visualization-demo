import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'diagram-modal-popup',
  templateUrl: '../../view/diagram-modal-popup/diagram-modal-popup.component.html',
  styleUrls: ['../../view/diagram-modal-popup/diagram-modal-popup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DiagramModalPopupComponent implements OnInit, OnChanges {
  
  @Input() selectedRow : any
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  openModal = (content) =>  this.modalService.open(content, { centered: true, size: 'xl'})
  
  ngOnChanges(changes: SimpleChanges){
    
    if (changes['selectedRow'].currentValue){          
      console.log("inside change")    

    }
  }
}
