import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { Architecture } from 'src/app/model/architecture';
import { RelatedArchitecture } from  'src/app/model/related-architecture'
import { ArchitectureService } from 'src/app/service/architecture.service';
import ArrayStore from "devextreme/data/array_store";

@Component({
  selector: 'related-viewpoints-grid',
  templateUrl: '../../view/related-viewpoints-grid/related-viewpoints-grid.component.html',
  styleUrls: ['../../view/related-viewpoints-grid/related-viewpoints-grid.component.css']
})
export class RelatedViewpointsGridComponent implements OnInit, OnChanges {

  modelData: any
  @Input() selectedRow : any

  constructor(private service: ArchitectureService) { }

  ngOnInit(): void {
    this.selectedRow = new Architecture(Number(localStorage.getItem("architectureId")), localStorage.getItem("architectureName") )
    
    this.service.getRelatedViewPointsGridData(this.selectedRow.architectureId)          
      .subscribe(response =>  this.modelData = this.createStore(response))  

  }

  ngOnChanges(changes: SimpleChanges){
    
    if (changes['selectedRow'].currentValue){  

     localStorage.setItem("architectureId",this.selectedRow.architectureId)
     localStorage.setItem("architectureName",this.selectedRow.architectureName)
     this.service.getRelatedViewPointsGridData(this.selectedRow.architectureId)          
     .subscribe(response =>  this.modelData = this.createStore(response))

    }
   
 }

  createStore = (response: any) =>
  new ArrayStore({
    key: ["architectureId", "relatedArchId"],
    data: response.json().map(item =>
        new RelatedArchitecture(
            item.architectureId,
            item.architectureName,
            item.viewId,
            item.viewName,
            item.relatedArchId,
            item.relatedArchName,
            item.relatedViewId,
            item.relatedViewName,
            item.relateTypeId,
            item.relateTypeName                        
        ))          
  })   

}
