import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import createCommonModelDiagram from './functions/createCommonModelDiagram'
import bindCommonModelDiagram from './functions/bindCommonModelDiagram'

@Component({
  selector: 'common-model-diagram',
  templateUrl: '../../view/common-model-diagram/common-model-diagram.component.html',
  styleUrls: ['../../view/common-model-diagram/common-model-diagram.component.css']
})
export class CommonModelDiagramComponent implements OnInit, OnChanges {
  
  @Input() selectedRow : any
  commonModelDiagram : any
  constructor() { }

  ngOnInit(): void {
        this.commonModelDiagram = createCommonModelDiagram()
        bindCommonModelDiagram(Number(localStorage.getItem("architectureId")), 
                               localStorage.getItem("architectureName"),
                               this.commonModelDiagram)        
  }

  ngOnChanges(changes: SimpleChanges){
    
    if (changes['selectedRow'].currentValue){          
      console.log("inside change")
      bindCommonModelDiagram(this.selectedRow.architectureId,this.selectedRow.architectureName, this.commonModelDiagram) 

    }
   
 }

}
